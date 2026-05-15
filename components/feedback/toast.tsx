/**
 * Toast/Alert Component
 */

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
}

export function Toast({ message, type = "info", onClose }: ToastProps) {
  const bgColor = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    warning: "bg-yellow-50 border-yellow-200",
    info: "bg-blue-50 border-blue-200",
  };

  const textColor = {
    success: "text-green-800",
    error: "text-red-800",
    warning: "text-yellow-800",
    info: "text-blue-800",
  };

  return (
    <div className={`border rounded-lg p-4 ${bgColor[type]} ${textColor[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        {onClose && (
          <button onClick={onClose} className="ml-4 font-bold">
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
