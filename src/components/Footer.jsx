import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const {
    toast
  } = useToast();
  const handleWhatsApp = () => {
    window.open('https://wa.me/628131865800', '_blank');
  };
  const handleEmail = () => {
    window.location.href = 'mailto:info@learnova.co.id';
  };
  const handleInstagram =() => {
    window.open('https://www.instagram.com/lci_learnova/', '_blank');
  }
  
  return <footer id='footer' className='bg-gradient-to-br from-[#0A1F44] via-[#1a3a6e] to-[#0A1F44] text-white relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] opacity-10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 py-16 relative z-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-21 h-20 rounded-lg flex items-center justify-center'>
                <img src='/images/logo.png'></img>
              </div>
              <div>
                <span className='text-xl font-bold block'>Learnova</span>
                <span className='text-sm text-gray-300'>Consultant Indonesia</span>
              </div>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Penyedia Training of Trainer profesional terpercaya untuk mengembangkan kompetensi trainer di Indonesia.
            </p>
            <div className='flex gap-3'>
              <motion.button whileHover={{
              scale: 1.1
            }} onClick={() => handleInstagram('Instagram')} className='w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300'>
                <Instagram className='w-5 h-5' />
              </motion.button>
              <motion.button whileHover={{
              scale: 1.1
            }} onClick={() => handleSocialClick('LinkedIn')} className='w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300'>
                <Linkedin className='w-5 h-5' />
              </motion.button>
              <motion.button whileHover={{
              scale: 1.1
            }} onClick={() => handleSocialClick('Facebook')} className='w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300'>
                <Facebook className='w-5 h-5' />
              </motion.button>
              <motion.button whileHover={{
              scale: 1.1
            }} onClick={() => handleSocialClick('YouTube')} className='w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300'>
                <Youtube className='w-5 h-5' />
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <span className='text-lg font-bold mb-6 block text-[#D4AF37]'>Program Pelatihan</span>
            <ul className='space-y-3'>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Training of Trainer Master Trainer/KKNI Lv 6</span>
              </li>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Training of Trainer KKNI Lv 5</span>
              </li>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Training for Trainer Instruktur Junior/KKNI Lv 3</span>
              </li>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Training for Trainer Instruktur/KKNI Lv 4</span>
              </li>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'></span>
              </li>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Public Speaking Skills</span>
              </li>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Training Officer Course</span>
              </li>
              <li>
                <span className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Online Training Mastery</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <span className='text-lg font-bold mb-6 block text-[#D4AF37]'>Kontak Kami</span>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1' />
                <span className='text-gray-300'>
                Ruko Albizia, Jl. Raya Kota Sutera No.10, Sindangsari, Kec. Ps. Kemis, Tangerang, 15560
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='w-5 h-5 text-[#D4AF37] flex-shrink-0' />
                <button onClick={handleWhatsApp} className='text-gray-300 hover:text-white transition-colors'>+62 8131865800</button>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='w-5 h-5 text-[#D4AF37] flex-shrink-0' />
                <button onClick={handleEmail} className='text-gray-300 hover:text-white transition-colors'>learnovacontsultan@gmail.com</button>
              </li>
              <li className='flex items-start gap-3'>
                <Clock className='w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1' />
                <div className='text-gray-300'>
                  <p>Senin - Jumat: 09.00 - 17.00 WIB</p>
                  <p>Sabtu: 09.00 - 14.00 WIB</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <span className='text-lg font-bold mb-6 block text-[#D4AF37]'>Newsletter</span>
            <p className='text-gray-300 mb-4'>
              Dapatkan update terbaru tentang program pelatihan dan tips training langsung ke email Anda.
            </p>
            <div className='flex gap-2'>
              <input type='email' placeholder='Email Anda' className='flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors' />
              <button className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center'>
                <Send className='w-5 h-5' />
              </button>
            </div>
            <div className='mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20'>
              <p className='text-sm text-gray-300'>
                📞 <span className='font-semibold'>Booking Admin:</span>
              </p>
              <button onClick={handleWhatsApp} className='text-[#D4AF37] hover:text-yellow-400 font-semibold transition-colors mt-1 flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                Chat WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        <div className='border-t border-white/20 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-300 text-sm text-center md:text-left'>© 2025 Learnova Consultant Indonesia. All rights reserved.</p>
            <div className='flex gap-6 text-sm'>
              <span className='text-gray-300 hover:text-white cursor-pointer transition-colors'>
                Privacy Policy
              </span>
              <span className='text-gray-300 hover:text-white cursor-pointer transition-colors'>
                Terms of Service
              </span>
              <span className='text-gray-300 hover:text-white cursor-pointer transition-colors'>
                Kebijakan Cookie
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
