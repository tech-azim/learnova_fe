import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import axiosInstance from "../lib/api";
import {
  Send,
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  FileText,
  Users,
} from "lucide-react";

const Registration = () => {
  const { toast } = useToast();
  const [programs, setPrograms] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    programId: "",
    participants: "1",
    preferredDate: "",
    message: "",
  });

  // Fetch programs dari API
  const fetchPrograms = async () => {
    try {
      await axiosInstance.get("/programs?page=1&limit=100").then((res) => {
        const data = res.data.data;
        setPrograms(data);
      });
    } catch (error) {
      console.error("Failed to fetch programs:", error.message);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axiosInstance.post("/registrations", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        position: formData.position,
        programId: Number(formData.programId), // backend expects uint
        participants: Number(formData.participants),
        preferredDate: formData.preferredDate, // format YYYY-MM-DD
        message: formData.message,
      });

      toast({
        title: "Pendaftaran Berhasil! 🎉",
        description:
          "Tim kami akan menghubungi Anda dalam 1x24 jam. Terima kasih atas kepercayaan Anda!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        programId: "",
        participants: "1",
        preferredDate: "",
        message: "",
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Terjadi kesalahan. Silakan coba lagi.";
      toast({
        title: "Pendaftaran Gagal",
        description: message,
        variant: "destructive",
      });
      console.error("Registration error:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Pendaftaran Program
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
            Daftar Program Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Isi formulir di bawah ini untuk mendaftar program training atau
            konsultasi dengan tim kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a6e] rounded-2xl p-8 shadow-2xl text-white h-full">
              <h3 className="text-2xl font-bold mb-6">
                Mengapa Mendaftar Sekarang?
              </h3>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#0A1F44]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Jadwal Fleksibel</h4>
                    <p className="text-gray-300 text-sm">
                      Pilih jadwal training yang sesuai dengan kebutuhan Anda
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#0A1F44]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Grup Kecil</h4>
                    <p className="text-gray-300 text-sm">
                      Perhatian maksimal dengan peserta terbatas per batch
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#0A1F44]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sertifikat Resmi</h4>
                    <p className="text-gray-300 text-sm">
                      Dapatkan sertifikat yang diakui industri
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-3">Promo Special!</h4>
                <p className="text-sm text-gray-200 mb-2">
                  🎁 Early Bird Discount 15% untuk pendaftaran akhir tahun!
                </p>
                <p className="text-sm text-gray-200">
                  💰 Diskon Grup 10% untuk pendaftaran 5 peserta atau lebih
                </p>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-gray-300">
                  Butuh informasi lebih lanjut? Tim kami siap membantu Anda 24/7
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-2 mb-2 text-[#0A1F44]"
                  >
                    <User className="w-4 h-4" /> Nama Lengkap *
                  </Label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="flex items-center gap-2 mb-2 text-[#0A1F44]"
                    >
                      <Mail className="w-4 h-4" /> Email *
                    </Label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="flex items-center gap-2 mb-2 text-[#0A1F44]"
                    >
                      <Phone className="w-4 h-4" /> No. Telepon *
                    </Label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="company"
                      className="flex items-center gap-2 mb-2 text-[#0A1F44]"
                    >
                      <Building className="w-4 h-4" /> Perusahaan/Instansi
                    </Label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="position"
                      className="mb-2 block text-[#0A1F44]"
                    >
                      Jabatan
                    </Label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="Posisi/jabatan Anda"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="programId"
                    className="mb-2 block text-[#0A1F44]"
                  >
                    Program Yang Diminati *
                  </Label>
                  <select
                    id="programId"
                    name="programId"
                    value={formData.programId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  >
                    <option value="">Pilih program training</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="participants"
                      className="flex items-center gap-2 mb-2 text-[#0A1F44]"
                    >
                      <Users className="w-4 h-4" /> Jumlah Peserta
                    </Label>
                    <input
                      type="number"
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="preferredDate"
                      className="flex items-center gap-2 mb-2 text-[#0A1F44]"
                    >
                      <Calendar className="w-4 h-4" /> Jadwal Preferensi *
                    </Label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="mb-2 block text-[#0A1F44]"
                  >
                    Pesan/Pertanyaan
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                    placeholder="Sampaikan pertanyaan atau kebutuhan khusus Anda"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 text-lg rounded-lg shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Dengan mendaftar, Anda menyetujui kebijakan privasi kami
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
