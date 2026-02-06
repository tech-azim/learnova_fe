import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Award, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Beranda', id: 'hero' },
    { label: 'Layanan', id: 'services' },
    { label: 'Proses Sertifikasi', id: 'certification-process' },
    { label: 'Testimoni', id: 'testimonials' },
    { label: 'Pendaftaran', id: 'registration' },
    { label: 'Kontak', id: 'footer' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center gap-3 cursor-pointer'
            onClick={() => scrollToSection('hero')}
          >
            <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg'>
              <Award className='w-8 h-8 text-white' />
            </div>
            <div className='hidden md:block'>
              <span className='text-xl font-bold text-blue-900'>LSP</span>
              <span className='text-sm text-blue-600 block'>Indonesia</span>
            </div>
          </motion.div>

          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <Button
              onClick={() => scrollToSection('registration')}
              className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg shadow-lg'
            >
              Daftar Sertifikasi
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden'
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={28} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={28} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className='md:hidden mt-4 bg-white rounded-lg shadow-xl p-4'
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className='block w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors'
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('registration')}
              className='w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
            >
              Daftar Sertifikasi
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;