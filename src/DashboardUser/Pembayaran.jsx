import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Payment from "../assets/img/dollar.png";
import PengaturanProfil from "../assets/img/setting.png";
import FormulirPendaftaran from "../assets/img/formulir.png";
import Keluar from "../assets/img/keluar.png";

const Pembayaran = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className=" bg-white w-64 p-4 flex flex-col justify-between rounded-lg shadow-md mt-20">
          <div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-200">
                <img src={FormulirPendaftaran} alt="Formulir" className="w-6 h-6" />
                <span className="ml-4">Formulir Pendaftaran</span>
              </li>
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-200">
                <img src={Payment} alt="Pembayaran" className="w-6 h-6" />
                <span className="ml-4">Pembayaran</span>
              </li>
              <li className="flex items-center p-2 rounded-lg bg-teal-600 text-white">
                <img src={PengaturanProfil} alt="Pengaturan" className="w-6 h-6" />
                <span className="ml-4">Pengaturan Profil</span>
              </li>
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-200">
                <img src={Keluar} alt="Keluar" className="w-6 h-6" />
                <span className="ml-4">Keluar</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <img src={DashboardUser} alt="Profile" className="rounded-full w-16 h-16" />
            <div className="ml-4">
              <div className="text-lg font-semibold">Farhan Alamsyah</div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className="bg-white p-6 rounded-lg shadow-md mt-20">
            <h2 className="text-2xl font-semibold mb-4">Ubah Data dan klik Simpan Perubahan</h2>
            <h1 className="text-2xl font-semibold mb-4">Admin UNSIQ II</h1>
            <h4 className="text-gray-500">04 Mei 2024</h4>
            <p>
              Untuk calon santri 2024/2025 silahkan membayar daftar ulang maksimal Senin, 20 Mei 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut <strong>356373738833338</strong>.
            </p>
            <p>
              Untuk rincian biaya bisa lihat di{" "}
              <a href="#" className="text-blue-500">
                sini
              </a>
              .
            </p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-md flex items-center justify-center">Upload Bukti Pembayaran</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pembayaran;
