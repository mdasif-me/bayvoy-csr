export function VendorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      <aside className='w-64 bg-gray-900 text-white'>
        <div className='p-4'>
          <p className='text-lg font-bold'>Vendor Panel</p>
        </div>
        <nav className='space-y-2 p-4'>
          <a
            href='/vendor/dashboard'
            className='block py-2 hover:bg-gray-800 px-4 rounded'
          >
            Dashboard
          </a>
        </nav>
      </aside>
      <main className='flex-1'>{children}</main>
    </div>
  );
}
