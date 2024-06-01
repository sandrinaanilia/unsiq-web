import React from "react";
import { useNavigate } from "react-router-dom";
import logoponpesma from "../assets/img/logoponpesma.png";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar h-full bg-gray-800 text-white flex flex-col items-center py-4">
      <div className="mb-8">
        <img src={logoponpesma} alt="Logo" className="w-40 h-40" />
      </div>
      {/* Menu Items */}
      <nav className="flex flex-col space-y-4 h-screen w-full px-4">
        <button onClick={() => navigate("/dashboard")} className="flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-home"></i>
          <span className="text-shadow">Dashboard</span>
        </button>
        <button onClick={() => navigate("/informasipendaftaran")} className="text-white flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-info-circle"></i>
          <span className="text-shadow">Informasi Pendaftaran</span>
        </button>
        <button onClick={() => navigate("/datasantri")} className="text-white flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-user-graduate"></i>
          <span className="text-shadow">Data Santri</span>
        </button>
        <button onClick={() => navigate("/pengumuman")} className="text-white flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-bell"></i>
          <span className="text-shadow">Pengumuman</span>
        </button>
        <button onClick={() => navigate("/berita")} className="text-white flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-newspaper"></i>
          <span className="text-shadow">Berita</span>
        </button>
        <button onClick={() => navigate("/galeriadmin")} className="text-white flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-images"></i>
          <span className="text-shadow">Galeri</span>
        </button>
        <button onClick={() => navigate("/forumdiskusi")} className="text-white flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-comments"></i>
          <span className="text-shadow">Forum Diskusi</span>
        </button>
        <button onClick={() => navigate("/ceritaalumni")} className="text-white flex items-center space-x-2 p-2 rounded-md hover:bg-teal-600">
          <i className="fas fa-user-friends"></i>
          <span className="text-shadow">Cerita Alumni</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
