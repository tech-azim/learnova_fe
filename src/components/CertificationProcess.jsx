import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  UserCheck, 
  BookOpen, 
  ClipboardCheck, 
  Award,
  Clock,
  Users,
  HelpCircle
} from 'lucide-react';

const CertificationProcess = () => {
  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'Pendaftaran',
      description: 'Isi formulir pendaftaran online dan unggah dokumen yang diperlukan',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      icon: UserCheck,
      title: 'Verifikasi Administrasi',
      description: 'Tim kami akan memverifikasi kelengkapan dokumen dan persyaratan',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '03',
      icon: BookOpen,
      title: 'Assesment Awal',
      description: 'Tes pengetahuan dan wawancara untuk mengukur kompetensi awal',
      color: 'from-purple-500 to-violet-500'
    },
    {
      step: '04',
      icon: ClipboardCheck,
      title: 'Pelatihan & Bimbingan',
      description: 'Program pelatihan untuk meningkatkan kompetensi sesuai standar',
      color: 'from-orange-500 to-amber-500'
    },
    {
      step: '05',
      icon: Award,
      title: 'Uji Kompetensi',
      description: 'Ujian teori dan praktik untuk menguji kemampuan sebenarnya',
      color: 'from-red-500 to-rose-500'
    },
    {
      step: '06',
      title: 'Sertifikasi',
      icon: Award,
      description: 'Penerbitan sertifikat kompetensi yang diakui secara nasional',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Proses Cepat',
      description: 'Proses sertifikasi selesai dalam 2-4 minggu'
    },
    {
      icon: Users,
      title: 'Assessor Berpengalaman',
      description: 'Dibimbing oleh assessor kompeten dengan sertifikasi nasional'
    },
    {
      icon: HelpCircle,
      title: 'Konsultasi Gratis',
      description: 'Konsultasi sebelum pendaftaran tanpa biaya tambahan'
    }
  ];

  return (
    <section id='certification-process' className='py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4'>
            Proses Sertifikasi
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Langkah-Langkah Sertifikasi
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Proses sertifikasi yang transparan dan terstruktur untuk memastikan 
            kompetensi Anda terukur dan sesuai standar
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='relative'
            >
              <div className='bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group border border-gray-100'>
                <div className='flex items-center justify-between mb-6'>
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className='w-8 h-8 text-white' />
                  </div>
                  <span className='text-5xl font-bold text-gray-200'>{step.step}</span>
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{step.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className='hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2'>
                  <div className='w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500'></div>
                  <div className='absolute right-0 top-1/2 transform translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-blue-500 rotate-45'></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100'
            >
              <feature.icon className='w-12 h-12 text-blue-600 mb-4' />
              <h3 className='text-lg font-bold text-gray-900 mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationProcess;