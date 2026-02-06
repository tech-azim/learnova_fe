import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Building2,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Budi Santoso',
      position: 'IT Manager',
      company: 'PT Teknologi Maju',
      rating: 5,
      content: 'Sertifikasi dari LSP ini sangat membantu karir saya. Prosesnya profesional dan sertifikatnya diakui oleh perusahaan multinasional.',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Sari Dewi',
      position: 'Kepala Sekolah',
      company: 'SMA Negeri 1 Jakarta',
      rating: 5,
      content: 'Sebagai pendidik, sertifikasi dari LSP memberikan kredibilitas tambahan. Program pelatihannya sangat berkualitas.',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Ahmad Rizki',
      position: 'Direktur',
      company: 'PT Logistik Sukses',
      rating: 5,
      content: 'Kami telah mensertifikasi 50 karyawan melalui LSP ini. Hasilnya sangat memuaskan, produktivitas meningkat signifikan.',
      icon: Building2,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Maya Indah',
      position: 'HR Manager',
      company: 'PT Retail Indonesia',
      rating: 4,
      content: 'Proses sertifikasi yang efisien dan tim yang responsif. Sangat membantu dalam pengembangan SDM perusahaan.',
      icon: Briefcase,
      color: 'from-amber-500 to-amber-600'
    },
    {
      name: 'Dr. Hendra Wijaya',
      position: 'Dosen',
      company: 'Universitas Negeri',
      rating: 5,
      content: 'Standar kompetensi yang diterapkan sangat tinggi dan sesuai dengan kebutuhan industri. Highly recommended!',
      icon: GraduationCap,
      color: 'from-red-500 to-red-600'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];
  const IconComponent = currentTestimonial.icon;

  return (
    <section id='testimonials' className='py-20 bg-white relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4'>
            Testimoni
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Kata Mereka yang Telah Bersertifikasi
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Dengar langsung dari para profesional yang telah meningkatkan karir mereka 
            melalui sertifikasi dari LSP kami
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100'
          >
            <div className='flex flex-col md:flex-row gap-8'>
              <div className='md:w-1/3'>
                <div className={`w-24 h-24 bg-gradient-to-br ${currentTestimonial.color} rounded-2xl flex items-center justify-center shadow-xl mb-4 mx-auto md:mx-0`}>
                  <IconComponent className='w-12 h-12 text-white' />
                </div>
                <div className='text-center md:text-left'>
                  <h3 className='text-xl font-bold text-gray-900'>{currentTestimonial.name}</h3>
                  <p className='text-blue-600 font-medium'>{currentTestimonial.position}</p>
                  <p className='text-gray-600 text-sm'>{currentTestimonial.company}</p>
                  <div className='flex items-center justify-center md:justify-start gap-1 mt-2'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < currentTestimonial.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className='md:w-2/3 relative'>
                <Quote className='absolute -top-4 -left-4 w-12 h-12 text-blue-100' />
                <p className='text-lg text-gray-700 leading-relaxed italic pl-4'>
                  "{currentTestimonial.content}"
                </p>
              </div>
            </div>
          </motion.div>

          <div className='flex items-center justify-center gap-4 mt-8'>
            <button
              onClick={prevTestimonial}
              className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300'
            >
              <ChevronLeft className='w-5 h-5' />
            </button>
            
            <div className='flex gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300'
            >
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 grid md:grid-cols-3 gap-8'
        >
          <div className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center'>
            <div className='text-4xl font-bold text-blue-600 mb-2'>4.9/5.0</div>
            <p className='text-gray-600'>Rating Kepuasan</p>
          </div>
          <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center'>
            <div className='text-4xl font-bold text-green-600 mb-2'>98%</div>
            <p className='text-gray-600'>Tingkat Kelulusan</p>
          </div>
          <div className='bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 text-center'>
            <div className='text-4xl font-bold text-purple-600 mb-2'>200+</div>
            <p className='text-gray-600'>Perusahaan Mitra</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;