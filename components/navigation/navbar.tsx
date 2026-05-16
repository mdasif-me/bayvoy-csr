'use client';

import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants/navigation';
import { AnimatePresence, motion } from 'framer-motion';
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

  //--- Prevent background scrolling when mobile menu is open ---//
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

  //--- animation variants ---//
  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'tween' as const,
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'tween' as const,
        duration: 0.3,
        ease: 'easeIn' as const,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  const menuButtonVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 180 },
    transition: { duration: 0.3 },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-white/80 shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className='container mx-auto px-4 lg:px-8'>
          <nav className='flex items-center justify-between'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link href='/' className='flex items-center group/logo w-fit'>
                <motion.div
                  className={`w-16 h-10 relative flex items-center justify-center transition-all duration-300 ${isScrolled ? 'brightness-0 opacity-80' : 'brightness-0 invert opacity-100'}`}
                >
                  <Image
                    src='/logo/favicon-transparent.png'
                    alt='BayVoy'
                    fill
                    className='object-contain'
                    priority
                  />
                </motion.div>
                <span
                  className={`text-xl sm:text-2xl font-bold tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                >
                  BayVoy
                </span>
              </Link>
            </motion.div>

            {/* --- desktop navigation --- */}
            <div className='hidden md:flex items-center gap-8'>
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors ${navTextClass} ${
                      pathname === link.href ? 'text-[#0ea5e9]' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className='hidden md:flex items-center gap-4'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/auth/login'>
                  <Button
                    variant='ghost'
                    className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                  >
                    Sign In
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/auth/register'>
                  <Button className='bg-primary text-white hover:opacity-90 rounded-full px-6 transition-all shadow-md shadow-primary/20'>
                    Register
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* --- mobile trigger --- */}
            <motion.button
              className={`md:hidden p-2 transition-all duration-300 z-50 relative ${
                isScrolled ? 'text-slate-900' : 'text-white'
              } ${isMenuOpen ? 'fixed right-4 top-5' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              whileTap={{ scale: 0.9 }}
              animate={isMenuOpen ? 'animate' : 'initial'}
              variants={menuButtonVariants}
            >
              <AnimatePresence mode='wait'>
                {isMenuOpen ? (
                  <motion.div
                    key='close'
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key='menu'
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* --- mobile sidebar overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='fixed inset-0 bg-black/50 z-40 md:hidden'
            variants={overlayVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* --- mobile sidebar --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='fixed top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-2xl z-40 md:hidden overflow-hidden'
            variants={sidebarVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <div className='flex flex-col h-full pt-20 pb-6 px-6'>
              {/* --- mobile navigation links --- */}
              <div className='flex-1'>
                <div className='flex flex-col gap-2'>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      custom={index}
                      variants={linkVariants}
                      initial='hidden'
                      animate='visible'
                    >
                      <Link
                        href={link.href}
                        className={`group relative font-medium py-4 px-3 rounded-xl transition-all duration-300 block ${
                          pathname === link.href
                            ? 'text-[#0ea5e9] bg-sky-50'
                            : 'text-slate-700 hover:text-[#0ea5e9] hover:bg-slate-50'
                        }`}
                        onClick={handleLinkClick}
                      >
                        <span className='flex items-center justify-between'>
                          {link.name}
                          {pathname === link.href && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 17,
                              }}
                              className='w-1 h-6 bg-[#0ea5e9] rounded-full ml-2'
                            />
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* --- mobile action buttons --- */}
              <motion.div
                className='mt-auto pt-6 border-t border-slate-100'
                variants={buttonVariants}
                initial='hidden'
                animate='visible'
              >
                <div className='flex flex-col gap-3'>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href='/auth/login' onClick={handleLinkClick}>
                      <Button
                        variant='outline'
                        className='w-full rounded-xl h-12 text-base font-medium hover:bg-slate-50 transition-all duration-300'
                      >
                        Sign In
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href='/auth/register' onClick={handleLinkClick}>
                      <Button className='w-full bg-primary text-white rounded-xl h-12 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300'>
                        Register Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
