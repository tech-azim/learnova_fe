import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: 'Beranda',
    id: 'hero'
  }, {
    label: 'Tentang Kami',
    id: 'about'
  }, {
    label: 'Program',
    id: 'programs'
  }, {
    label: 'Pendaftaran',
    id: 'registration'
  }, {
    label: 'Kontak',
    id: 'footer'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <motion.div whileHover={{
          scale: 1.05
        }} className='flex items-center gap-4 cursor-pointer' onClick={() => scrollToSection('hero')}>
            <img src="/images/logo.png" alt="Learnova Consultant Indonesia Logo" className={`h-32 w-auto transition-all duration-300 hover:opacity-90 ${isScrolled ? 'brightness-100' : 'brightness-[1.5]'}`} />
          </motion.div>

          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item, index) => <motion.button key={index} whileHover={{
            scale: 1.05
          }} onClick={() => scrollToSection(item.id)} className={`font-medium transition-colors ${isScrolled ? 'text-[#0A1F44] hover:text-red-600' : 'text-white hover:text-[#D4AF37]'}`}>
                {item.label}
              </motion.button>)}
            <Button onClick={() => scrollToSection('registration')} className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg shadow-lg'>
              Daftar Sekarang
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='md:hidden'>
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-[#0A1F44]' : 'text-white'} size={28} /> : <Menu className={isScrolled ? 'text-[#0A1F44]' : 'text-white'} size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className='md:hidden mt-4 bg-white rounded-lg shadow-xl p-4'>
            {navItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.id)} className='block w-full text-left py-3 px-4 text-[#0A1F44] hover:bg-red-50 rounded-lg transition-colors'>
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection('registration')} className='w-full mt-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'>
              Daftar Sekarang
            </Button>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;
