'use client';

import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState<boolean>(!isHomePage);

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = NAV_LINKS;

  const navTextClass = isScrolled
    ? 'text-slate-900 hover:text-[#0ea5e9]'
    : 'text-white/90 hover:text-white';

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-white/80 shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className='container mx-auto px-4 lg:px-8'>
          <nav className='flex items-center justify-between'>
            <Link href='/' className='flex items-center group/logo w-fit'>
              <div
                className={`w-16 h-10 relative flex items-center justify-center transition-all duration-300 ${isScrolled ? 'brightness-0 opacity-80' : 'brightness-0 invert opacity-100'}`}
              >
                <Image
                  src='/logo/tranfarent_icon.png'
                  alt='BayVoy'
                  fill
                  className='object-contain'
                  priority
                />
              </div>
              <span
                className={`text-xl sm:text-2xl font-bold tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                BayVoy
              </span>
            </Link>
            <div className='hidden md:flex items-center gap-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors ${navTextClass} ${
                    pathname === link.href ? 'text-[#0ea5e9]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className='hidden md:flex items-center gap-4'>
              <Link href='/auth/login'>
                <Button
                  variant='ghost'
                  className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                >
                  Sign In
                </Button>
              </Link>
              <Link href='/auth/register'>
                <Button className='bg-primary text-white hover:opacity-90 rounded-full px-6 transition-all shadow-md shadow-primary/20'>
                  Register
                </Button>
              </Link>
            </div>
            <button
              className={`md:hidden p-2 transition-all duration-300 z-50 relative ${
                isScrolled ? 'text-slate-900' : 'text-white'
              } ${isMenuOpen ? 'fixed right-4 top-5' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-2xl z-40 transition-transform duration-500 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full pt-20 pb-6 px-6'>
          <div className='flex-1'>
            <div className='flex flex-col gap-2'>
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative font-medium py-4 px-3 rounded-xl transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-[#0ea5e9] bg-sky-50'
                      : 'text-slate-700 hover:text-[#0ea5e9] hover:bg-slate-50'
                  }`}
                  onClick={handleLinkClick}
                  style={{
                    animation: isMenuOpen
                      ? `slideIn 0.3s ease-out ${index * 0.05}s forwards`
                      : 'none',
                    opacity: 0,
                    transform: 'translateX(20px)',
                  }}
                >
                  <span className='flex items-center justify-between'>
                    {link.name}
                    {pathname === link.href && (
                      <span className='w-1 h-6 bg-[#0ea5e9] rounded-full ml-2' />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className='mt-auto pt-6 border-t border-slate-100'>
            <div className='flex flex-col gap-3'>
              <Link href='/auth/login' onClick={handleLinkClick}>
                <Button
                  variant='outline'
                  className='w-full rounded-xl h-12 text-base font-medium hover:bg-slate-50 transition-all duration-300'
                >
                  Sign In
                </Button>
              </Link>
              <Link href='/auth/register' onClick={handleLinkClick}>
                <Button className='w-full bg-primary text-white rounded-xl h-12 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
