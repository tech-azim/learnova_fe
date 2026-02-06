import React, { useState } from 'react';
import '../styles/Banner.css';

const Banner = () => {
  // State untuk gambar banner
  const [bannerImage, setBannerImage] = useState('../public/images/Foto-1.jpeg');
  
  // Daftar gambar alternatif (opsional)
  const imageOptions = [
    '../public/images/Foto-1.jpeg',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e'
  ];
  
  // Fungsi untuk mengganti gambar (opsional)
  const changeImage = () => {
    const currentIndex = imageOptions.indexOf(bannerImage);
    const nextIndex = (currentIndex + 1) % imageOptions.length;
    setBannerImage(imageOptions[nextIndex]);
  };
  
  return (
    <div className="banner-container">
      <div 
        className="banner-image"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-overlay">
          <h1 className="banner-title">Selamat Datang</h1>
          <p className="banner-subtitle">Ini adalah contoh banner sederhana dengan React</p>
          <button className="banner-button" onClick={changeImage}>
            Ganti Gambar
          </button>
        </div>
      </div>
      
      {/* Versi alternatif dengan tag img */}
      {/* 
      <div className="banner-img-container">
        <img 
          src={bannerImage} 
          alt="Banner" 
          className="banner-img"
        />
        <div className="banner-content">
          <h1>Judul Banner</h1>
          <p>Deskripsi banner Anda di sini</p>
        </div>
      </div>
      */}
    </div>
  );
};

export default Banner;