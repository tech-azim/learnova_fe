import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  Laptop, 
  Wrench, 
  Stethoscope, 
  Calculator,
  Code2,
  Truck,
  ChefHat,
  DollarSign
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Sertifikasi Manajemen',
      description: 'ISO, Quality Management, Project Management Professional (PMP)',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'Sertifikasi Pendidikan',
      description: 'Guru Profesional, Dosen, Instruktur, Training of Trainer',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Laptop,
      title: 'Sertifikasi IT & Teknologi',
      description: 'Network Security, Cloud Computing, Data Science, Software Development',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Sertifikasi Teknik',
      description: 'Electrical Engineer, Mechanical Engineer, Civil Engineering',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Stethoscope,
      title: 'Sertifikasi Kesehatan',
      description: 'Nursing, Medical Laboratory, Healthcare Management',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Calculator,
      title: 'Sertifikasi Keuangan',
      description: 'Accounting, Tax Consultant, Financial Analyst',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Code2,
      title: 'Sertifikasi Digital',
      description: 'Digital Marketing, UI/UX Design, SEO Specialist',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Truck,
      title: 'Sertifikasi Logistik',
      description: 'Supply Chain Management, Logistics, Warehouse Management',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: ChefHat,
      title: 'Sertifikasi Hospitality',
      description: 'Hotel Management, Culinary Arts, Tourism',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: DollarSign,
      title: 'Sertifikasi Bisnis',
      description: 'Business Analyst, Entrepreneurship, Sales Professional',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100'
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>{service.title}</h3>
              <p className='text-sm text-gray-600 leading-relaxed'>{service.description}</p>
            </motion.div>
          ))}
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