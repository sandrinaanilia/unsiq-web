import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Payment from "../assets/img/dollar.png";
import PengaturanProfil from "../assets/img/setting.png";
import FormulirPendaftaran from "../assets/img/formulir.png";
import Keluar from "../assets/img/keluar.png";

const Pengaturan = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className=" bg-white w-64 p-4 flex flex-col justify-between rounded-lg shadow-md mt-40">
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
            <form className="grid gap-4">
              <div className="col-span-2">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="farhanalamsyah@gmail.com" />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">No.Telp</label>
                <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="08595849384" />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Ubah Kata Sandi</label>
                <button type="button" className="mt-1 px-4 py-2 bg-teal-600 text-white rounded-md">
                  Ubah Kata Sandi
                </button>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700">Hapus Akun</label>
                <button type="button" className="mt-1 px-4 py-2 bg-red-500 text-white rounded-md">
                  Hapus Akun
                </button>
              </div>
              <div className="col-span-2 flex justify-end">
                <button type="submit" className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pengaturan;
