import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import PembayaranIcon from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";
import Keluar from "../assets/img/keluar.png";
import Paper from "../assets/img/paper.png";

const Pembayaran = () => {
  const navigate = useNavigate();

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
                <button className={`flex items-center py-2 px-8 mt-3 w-full text-left bg-teal-600 text-white hover:bg-teal-600 hover:text-white rounded-lg justify-start`} onClick={() => navigate("/pembayaran")}>
                  <img src={PembayaranIcon} alt="Pembayaran" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Pembayaran</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pengaturanprofil" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => navigate("/pengaturan")}
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
              <h1 className="text-base font-bold">Ubah Data dan klik Simpan Perubahan</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="ml-0 text-xl font-bold text-gray-800">Admin UNSIQ II</h1>
              <h4 className="text-gray-500 mb-2">04 Mei 2024</h4>
              <p>
                Untuk calon santri 2024/2025 silahkan membayar daftar ulang paling lambat Senin, 19 Agustus 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut <strong>356373738833338</strong>.
              </p>
              <p>
                Untuk rincian biaya bisa lihat{" "}
                <a href="#" className="text-blue-500">
                  disini
                </a>
              </p>
              <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-md flex items-center justify-center">Upload Bukti Pembayaran</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pembayaran;
