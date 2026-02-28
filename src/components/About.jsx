import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, BookOpen, Users, List, TrendingUp, BriefcaseBusiness, Building2 } from 'lucide-react';
import EmptyState from './ui/EmptyState';
import axiosInstance from '../lib/api';


const About = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [features, setFeatures] = useState([]);

  const iconMap = {
    Target, Eye, Award, BookOpen, Users, List, TrendingUp, BriefcaseBusiness, Building2
  }

  const fetchPortfolios = async () => {
    try {
      await axiosInstance.get("/portfolios").then((res) =>{
        const data = res.data.data;
        setPortfolios(data);
      });
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }

  const fetchFeatures = async () => {
    try {
      await axiosInstance.get("/features").then((res) =>{
        const data = res.data.data;
        const featuresWithIcons = data.map(service => ({
          ...service,
          icon: iconMap[service.icon] || Building2
        }));
        setFeatures(featuresWithIcons);
      });
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }

  useEffect(() => {
    fetchPortfolios();
    fetchFeatures();
  }, [])

  return (
    <section id='about' className='py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl'></div>


      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4'>
            Tentang Kami
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4'>
            Portofolio & Keunggulan Kami
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Learnova Consultant Indonesia telah dipercaya oleh berbagai organisasi terkemuka 
            untuk mengembangkan kompetensi trainer profesional mereka
          </p>
        </motion.div>

        {/* Video Banner */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-b-3xl mb-20">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/videos/V-7.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0A1F44]/70"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Learnova Consultant Indonesia
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Membangun Trainer Profesional, Kompeten, dan Berdaya Saing Global
              </p>
            </motion.div>
          </div>
        </div>


        <div className='grid md:grid-cols-3 gap-8 mb-20'>
          { portfolios.length === 0 ? (
            <EmptyState
              title="Belum ada Portofolio"
              description="Saat ini belum ada Portofolio yang tersedia. Silakan cek kembali nanti atau hubungi kami untuk informasi lebih lanjut."
              icon={BriefcaseBusiness} /> 
          ) : (
            portfolios.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
              >
                <div className='text-5xl font-bold bg-gradient-to-r from-red-600 to-[#D4AF37] bg-clip-text text-transparent mb-3'>
                  {item.count}+
                </div>
                <h3 className='text-xl font-bold text-[#0A1F44] mb-2'>{item.title}</h3>
                <p className='text-gray-600'>{item.description}</p>
              </motion.div>
            ))
          )}
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          { features.length === 0 ? (
            <EmptyState
              title="Belum ada Fitur"
              description="Saat ini belum ada Fitur yang tersedia. Silakan cek kembali nanti atau hubungi kami untuk informasi lebih lanjut."
              icon={List} /> 
          ) : (
          features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2'
            >
              <div className='w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <feature.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-[#0A1F44] mb-3'>{feature.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
            </motion.div>
          )))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 bg-gradient-to-r from-[#0A1F44] to-[#1a3a6e] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden'
        >
          <div className='absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl'></div>
          <div className='relative z-10 grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Mengapa Memilih Learnova?
              </h3>
              <p className='text-gray-200 text-lg leading-relaxed'>
                Kami tidak hanya memberikan pelatihan, tetapi membangun ekosistem pembelajaran 
                yang berkelanjutan. Dengan pendekatan holistik dan dukungan pasca pelatihan, 
                kami memastikan setiap trainer yang kami latih siap menghadapi tantangan di era modern.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              {/* Removed: 10+ Tahun Pengalaman */}
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center'>
                <p className='text-4xl font-bold text-[#D4AF37] mb-2'>50+</p>
                <p className='text-white'>Expert Trainer</p>
              </div>
              {/* Removed: 200+ Program Tersedia */}
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center'>
                <p className='text-4xl font-bold text-[#D4AF37] mb-2'>24/7</p>
                <p className='text-white'>Support System</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
