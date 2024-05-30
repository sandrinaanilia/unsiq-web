import React, { useState } from 'react';
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import Akun from "../assets/img/pesan.png";
import User from "../assets/img/iconuser.png";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white shadow-lg p-4">
          <div className="relative">
            <button className="absolute left-2 top-2">
              <img src={searchIcon} alt="Search" className="w-6 h-6" />
            </button>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-100 pl-10 p-2 rounded-lg focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={toggleDropdown}
            >
              <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
              <span className="text-black">Abdurohman Hamam</span>
              <img src={arrow} alt="Dropdown Arrow" className={`w-2 h-2 ml-2 ${isDropdownOpen ? 'rotate-0' : 'rotate-180'}`} />
            </div>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Logout</li>
              </ul>
            )}
          </div>
        </div>

        {/* Summary Boxes */}
        <div className="flex justify-between p-6 gap-6">
          <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg w-1/8 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Akun Baru</h3>
              <span className="text-4xl">34</span>
            </div>
            <img src={User} alt="Account" className="w-16 h-16" />
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-1/3 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Pendaftar Diterima</h3>
              <span className="text-4xl">0</span>
            </div>
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="bg-red-400 text-white p-6 rounded-lg shadow-lg w-1/3 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Pesan Baru</h3>
              <span className="text-4xl">1</span>
            </div>
            <img src={Akun} alt="Message" className="w-16 h-16" />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 flex flex-wrap gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Pendaftar Baru</h2>
              <a href="#" className="text-teal-500">lihat</a>
            </div>
            <ul>
              {["Sayifulloh", "Boy", "Feri"].map((name, index) => (
                <li key={index} className="flex justify-between items-center border-b-2 py-2">
                  <span>{index + 1}. {name}</span>
                  <span>5 Mei 2024 22:30</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Informasi Pembayaran</h2>
            <ul>
              {["Sayifulloh", "Boy", "Feri"].map((name, index) => (
                <li key={index} className="flex justify-between items-center border-b-2 py-2">
                  <span>{index + 1}. {name}</span>
                  <button className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">Lihat pembayaran</button>
                </li>
              ))}
            </ul>
          </div>

          {/* New Activity Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Aktivitas</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pendataan Mahasiswa reguler dan beasiswa serta upload surat pernyataan dan daftar ulang</li>
              <li>Tagihan iuran kas bulanan dan agenda qurban</li>
              <li>Upload berita terbaru terkait data absen mengaji</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
