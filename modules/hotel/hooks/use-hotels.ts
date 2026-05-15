/**
 * Use Hotels Hook
 */

import { useState, useEffect } from "react";
import { Hotel } from "../types/hotel.types";
import { getHotels } from "../api/get-hotels";

export function useHotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const data = await getHotels();
        setHotels(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setHotels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return { hotels, loading, error };
}
