import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Pembayaran from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";

import Keluar from "../assets/img/keluar.png";
import { useNavigate } from 'react-router-dom';

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Perubahan Disimpan</h2>
        <p className="mb-4">Kata sandi Anda telah berhasil diubah.</p>
        <div className="flex justify-center">
          <button 
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowModal(false)}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const UbahSandi = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSaveChanges = () => {
    setShowModal(true);
    // Here you can add additional logic to handle the password change
  };

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
        <div className="bg-white"></div>

        <div className="flex flex-col w-3/4 bg-white shadow-lg rounded-lg p-4">
          <div className="p-4 bg-white mt-4">
            {/* Banner Section */}
            <div className="bg-teal-600 text-white text-center py-2 rounded mb-4">
              <h1 className="text-xl font-bold">Ubah dan klik Simpan Perubahan</h1>
            </div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">Ubah Kata Sandi</h2>
            <p className="text-gray-600 mb-4">Pastikan akun Anda menggunakan kata sandi yang panjang dan acak untuk tetap aman.</p>
            <div className="mb-4">
              <label htmlFor="lama" className="block text-gray-700 font-bold mb-2">Kata Sandi Lama</label>
              <input type="password" id="lama" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Kata Sandi Lama" />
            </div>
            <div className="mb-4">
              <label htmlFor="baru" className="block text-gray-700 font-bold mb-2">Kata Sandi Baru</label>
              <input type="password" id="baru" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Kata Sandi Baru" />
            </div>
            <div className="mb-4">
              <label htmlFor="konfirmasi" className="block text-gray-700 font-bold mb-2">Konfirmasi Kata Sandi Baru</label>
              <input type="password" id="konfirmasi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Konfirmasi Kata Sandi Baru" />
            </div>
            <div className="flex justify-center">
              <button 
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                onClick={handleSaveChanges}
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />

      <Footer />
    </>
  );
};

export default UbahSandi;
