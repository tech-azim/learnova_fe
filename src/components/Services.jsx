import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Laptop, 
  Wrench, 
  Stethoscope, 
  Calculator,
  Code2,
  Truck,
  ChefHat,
  DollarSign,
  Building2
} from 'lucide-react';
import axiosInstance from "../lib/api";
import EmptyState from './ui/EmptyState';

const iconMap = {
  GraduationCap, 
  Laptop, 
  Wrench, 
  Stethoscope, 
  Calculator,
  Code2,
  Truck,
  ChefHat,
  DollarSign,
  Building2
}

const Services = () => {
  const [services, setServices] = useState([]); 

  const fetchServices = async () => {
    try {
      await axiosInstance.get("/services").then((res) => {
        const data = res.data.data;
        // Map icon strings to actual components
        const servicesWithIcons = data.map(service => ({
          ...service,
          icon: iconMap[service.icon] || Building2
        }));
        setServices(servicesWithIcons);
      })
    } catch (error) {
       console.error("An error occurred:", error.message);
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section id='services' className='py-20 bg-white relative overflow-hidden'>
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
            Bidang Sertifikasi
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Layanan Sertifikasi Kami
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Kami menyediakan sertifikasi kompetensi profesional untuk berbagai bidang industri 
            dengan standar nasional dan internasional
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
          {services.length === 0 ? (
            <EmptyState
              title="Belum ada Layanan"
              description="Saat ini belum ada Layanan yang tersedia. Silakan cek kembali nanti atau hubungi kami untuk informasi lebih lanjut."
              icon={Building2} />
          ) : (
            services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100'
              >
                <div className={`w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`} style={{backgroundColor: service.color}}>
                  <service.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{service.title}</h3>
                <p className='text-sm text-gray-600 leading-relaxed'>{service.description}</p>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden'
        >
          <div className='absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-10 rounded-full blur-3xl'></div>
          <div className='relative z-10'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Tidak Menemukan Bidang yang Anda Cari?
            </h3>
            <p className='text-gray-200 text-lg mb-6 max-w-2xl mx-auto'>
              Hubungi kami untuk konsultasi tentang kebutuhan sertifikasi khusus untuk organisasi Anda.
            </p>
            <button
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg shadow-xl transition-all duration-300 font-semibold'
            >
              Konsultasi Gratis
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;