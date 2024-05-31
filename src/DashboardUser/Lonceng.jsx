import React from "react";
import { useState } from "react"; // Pisahkan useState dari React
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Pembayaran from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";
import Keluar from "../assets/img/keluar.png";

const Lonceng = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-10 px-10 min-h-screen">
        <div className="w-1/8 bg-white shadow-xl rounded-lg mr-10">
          <nav className="p-10">
            <ul>
              <li>
                <div className="flex items-center py-2 px-8 mt-3 text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-lg">
                  <img src="" alt="" className="w-6 h-6 mr-3" />
                  <button className="w-full font-bold text-left" onClick={() => navigate("/formulirpendaftaran")}>
                    Formulir Pendaftaran
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center py-2 px-8 mt-3 text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-lg">
                  <img src={Pembayaran} alt="Pembayaran" className="w-6 h-6 mr-3" />
                  <button className="w-full font-bold text-left" onClick={() => navigate("/pembayaran")}>
                    Pembayaran
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center py-2 px-8 mt-3 bg-teal-600 text-white hover:bg-gray-100 hover:text-gray-700 rounded-lg">
                  <img src={Pengaturan} alt="Pengaturan Profil" className="w-6 h-6 mr-3" />
                  <button className="w-full font-bold text-left" onClick={() => navigate("/pengaturanprofil")}>
                    Pengaturan Profil
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center py-2 px-8 mt-3 text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-lg">
                  <img src={Keluar} alt="Keluar" className="w-6 h-6 mr-3" />
                  <button className="w-full font-bold text-left" onClick={() => navigate("/keluar")}>
                    Keluar
                  </button>
                </div>
              </li>
            </ul>
          </nav>
          <div className="flex items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="relative w-16 h-16">
              <img src={DashboardUser} alt="Profile" className="rounded-full w-16 h-16 object-cover" />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <span className="ml-4 text-xl font-bold text-gray-800">Farhan Alamsyah</span>
          </div>
        </div>
        <div className="flex flex-col w-3/4 bg-white shadow-lg rounded-lg p-4">
          <div className="p-4 bg-white mt-4">
            <div className="bg-teal-600 text-white text-left py-2 rounded mb-4">
              <h1 className="text-base font-bold">Pengumuman</h1>
            </div>
            <div className="flex justify-end">
              <span className="text-teal-600 text-xl font-bold">Sudah Dibaca</span>
            </div>
            <div className="w-3/4 p-4 bg-white">
              <div className="border rounded p-4 bg-teal-50">
                <div className="flex flex-col items-start border-b pb-2 mb-2">
                  <span>Silahkan lakukan pembayaran daftar ulang dan upload bukti pembayaran sebelum 20 mei 2024</span>
                  <span className="text-gray-500 text-sm mt-2">20 Juni, 09:10</span>
                </div>
                
              </div>
            </div>
            <div className="w-3/4 p-4 bg-white">
              <div className="border rounded p-4 bg-teal-50">
                <div className="flex flex-col items-start border-b pb-2 mb-2">
                  <span>Pendaftaran Anda Sudah Berhasil</span>
                  <span className="text-gray-500 text-sm mt-2">20 Juni, 09:10</span>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lonceng;
