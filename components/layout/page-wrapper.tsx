/**
 * Page Wrapper Component
 */

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function PageWrapper({ children, title, description }: PageWrapperProps) {
  return (
    <main className="min-h-screen">
      {(title || description) && (
        <section className="bg-gray-50 py-8 mb-8">
          <div className="container mx-auto px-4">
            {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
            {description && <p className="text-lg text-gray-600">{description}</p>}
          </div>
        </section>
      )}
      <section className="container mx-auto px-4 py-8">
        {children}
      </section>
    </main>
  );
}
