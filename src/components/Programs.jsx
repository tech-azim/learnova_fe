import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Users, Award, BookOpen, Presentation, Target, RocketIcon, Lightbulb, MessageSquare, Building2 } from 'lucide-react';
import axiosInstance from '../lib/api';
import EmptyState from './ui/EmptyState';

const iconMap = {
  Presentation,
  Target,
  Lightbulb,
  MessageSquare,
  Users,
  BookOpen
};

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  const fetchPrograms = async () => {
    try {
      await axiosInstance.get("/programs").then((res) =>{
        const data = res.data.data;
        // Map icon strings to actual components
        const programsWithIcons = data.map(program => ({
          ...program,
          icon: iconMap[program.icon] || Presentation
        }));
        setPrograms(programsWithIcons);
      });
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }

  useEffect(() => {
    fetchPrograms();
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const getLevelColor = level => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700';
      case 'Advanced':
        return 'bg-purple-100 text-purple-700';
      case 'Professional':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  return <section id='programs' className='py-20 bg-white relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className='text-center mb-16'>
          <span className='inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4'>
            Program Pelatihan
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4'>
            Program Training Kami
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Pilihan program pelatihan yang komprehensif dan disesuaikan dengan kebutuhan 
            pengembangan kompetensi trainer di berbagai level
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            programs.length === 0 ?(
              <EmptyState 
                title="Belum ada Program"
                description="Saat ini belum ada Program yang tersedia. Silakan cek kembali nanti atau hubungi kami untuk informasi lebih lanjut."
                icon={RocketIcon} />
            ) : (
              programs.map((program, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100'>
              <div className='relative h-48 overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' alt={program.title} src={`${import.meta.env.VITE_API_BASE_URL}/${program.image}`.replaceAll("/api/v1","")}/>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                <div className='absolute top-4 right-4'>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(program.level)}`}>
                    {program.level}
                  </span>
                </div>
              </div>

              <div className='p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg'>
                    <program.icon className='w-6 h-6 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-[#0A1F44] leading-tight'>{program.title}</h3>
                  </div>
                </div>

                <div className='flex items-center gap-4 mb-4 text-sm text-gray-600'>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-4 h-4' />
                    <span>{program.duration} Hari</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Users className='w-4 h-4' />
                    <span>Max. {program.participants} Peserta</span>
                  </div>
                </div>

                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {program.description}
                </p>

                <div className='mb-4'>
                  <p className='font-semibold text-[#0A1F44] mb-2 flex items-center gap-2'>
                    <Award className='w-4 h-4 text-[#D4AF37]' />
                    Benefit Program:
                  </p>
                  <ul className='space-y-2'>
                    {program.benefits.map((benefit, idx) => <li key={idx} className='text-sm text-gray-600 flex items-start gap-2'>
                        <span className='text-[#D4AF37] mt-1'>✓</span>
                        <span>{benefit}</span>
                      </li>)}
                  </ul>
                </div>

                <div className='border-t border-gray-100 pt-4 mt-4'>
                  <div className='flex items-center justify-between mb-4'>
                    {/* <span className='text-sm text-gray-600'>Investasi:</span> */}
                    <span className='text-2xl font-bold text-red-600'>{program.price}</span>
                  </div>
                  <Button onClick={scrollToRegistration} className='w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg shadow-lg'>
                    Daftar Program Ini
                  </Button>
                </div>
              </div>
            </motion.div>)
            )
          }
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className='mt-16 bg-gradient-to-r from-[#0A1F44] to-[#1a3a6e] rounded-2xl p-8 md:p-12 shadow-2xl text-center'>
          <h3 className='text-3xl font-bold text-white mb-4'>
            Butuh Program Khusus untuk Organisasi Anda?
          </h3>
          <p className='text-gray-200 text-lg mb-6 max-w-2xl mx-auto'>
            Kami menyediakan program in-house training yang dapat disesuaikan dengan kebutuhan spesifik organisasi Anda.
          </p>
          <Button onClick={scrollToRegistration} className='bg-gradient-to-r from-[#D4AF37] to-yellow-600 hover:from-yellow-600 hover:to-[#D4AF37] text-[#0A1F44] px-8 py-6 text-lg rounded-lg shadow-xl font-semibold'>
            Konsultasi Gratis
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default Programs;
