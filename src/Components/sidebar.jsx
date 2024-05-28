import React from 'react';
import logoponpesma from '../assets/img/logoponpesma.png';



const Sidebar = () => {
  return (
    <div className="sidebar h-screen w-64 bg-gray-800 text-white flex flex-col items-center py-4">
      {/* Logo */}
      <div className="mb-8">
        <img src={logoponpesma} alt="Logo" className="w-28 h-28" />
      </div>
      {/* Menu Items */}
      <nav className="flex flex-col space-y-4 w-full px-4">
        <a href="#" className="flex items-center space-x-2 bg-teal-500 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-home"></i>
          <span className="text-shadow">Dashboard</span>
        </a>
        <a href="#" className="text-whte flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-info-circle"></i>
          <span className="text-shadow">Informasi Pendaftaran</span>
        </a>
        <a href="#" className="text-whte flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-user-graduate"></i>
          <span className="text-shadow">Data Santri</span>
        </a>
        <a href="#" className="text-whte flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-bell"></i>
          <span className="text-shadow">Pengumuman</span>
        </a>
        <a href="#" className="text-whte flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-newspaper"></i>
          <span className="text-shadow">Berita</span>
        </a>
        <a href="#" className="text-whte flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-images"></i>
          <span className="text-shadow">Galeri</span>
        </a>
        <a href="#" className="text-whte flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-comments"></i>
          <span className="text-shadow">Forum Diskusi</span>
        </a>
        <a href="#" className="text-whte flex items-center space-x-2 p-2 rounded-md hover:bg-green-600">
          <i className="fas fa-user-friends"></i>
          <span className="text-shadow">Cerita Alumni</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;


