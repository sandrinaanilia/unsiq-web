import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Pembayaran from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";
import Keluar from "../assets/img/keluar.png";
import Paper from "../assets/img/paper.png";

const Lonceng = () => {
  const navigate = useNavigate();
  const [isRead, setIsRead] = useState({
    announcement1: false,
    announcement2: false,
  });

  const handleRead = (announcement) => {
    setIsRead((prevState) => ({
      ...prevState,
      [announcement]: true,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-10 px-10 min-h-screen">
        <div className="w-1/8 bg-white shadow-xl rounded-lg mr-10 flex flex-col">
          <nav className="p-6 mt-20">
            <ul>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                    window.location.pathname === "/formulirpendaftaran" ? "bg-teal-600 text-white" : "text-gray-600"
                  } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => navigate("/formulirpendaftaran")}
                >
                  <img src={Paper} alt="" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Formulir Pendaftaran</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pembayaran" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => navigate("/pembayaran")}
                >
                  <img src={Pembayaran} alt="Pembayaran" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Pembayaran</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pengaturanprofil" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => navigate("/pengaturanprofil")}
                >
                  <img src={Pengaturan} alt="Pengaturan Profil" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Pengaturan Profil</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/keluar" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => navigate("/keluar")}
                >
                  <img src={Keluar} alt="Keluar" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Keluar</span>
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center p-4 bg-white shadow-lg rounded-lg mx-10 my-4">
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
        <div className="flex flex-col w-3/4 bg-white shadow-lg rounded-lg p-6">
          <div className="p-4 bg-white mt-20">
            <div className="bg-teal-600 text-white text-left py-5 px-4 rounded mb-4">
              <h1 className="text-base font-bold">Pengumuman</h1>
            </div>
            <div className="flex justify-end mb-4">
              <span className="text-teal-600 text-base font-bold">Sudah Dibaca</span>
            </div>
            <div className="w-full p-4 bg-white">
              <button className={`border rounded p-4 w-full text-left ${isRead.announcement1 ? "bg-white text-black" : "bg-teal-50"}`} onClick={() => handleRead("announcement1")}>
                <div className="flex flex-col items-start border-b pb-2 mb-2">
                  <span>Silahkan lakukan pembayaran daftar ulang dan upload bukti pembayaran sebelum 20 Mei 2024</span>
                  <span className="text-gray-500 text-sm mt-2">20 Juni, 09:10</span>
                </div>
              </button>
            </div>
            <div className="w-full p-4 bg-white">
              <button className={`border rounded p-4 w-full text-left ${isRead.announcement2 ? "bg-white text-black" : "bg-teal-50"}`} onClick={() => handleRead("announcement2")}>
                <div className="flex flex-col items-start border-b pb-2 mb-2">
                  <span>Pendaftaran Anda Sudah Berhasil</span>
                  <span className="text-gray-500 text-sm mt-2">20 Juni, 09:10</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lonceng;
