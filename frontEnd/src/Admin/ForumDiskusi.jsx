import React, { useState } from 'react';
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import Theo from "../assets/img/user4.png";

const ForumDiskusi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false); // State for logout popup
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false); // State for change password popup
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [comments, setComments] = useState([
    {

        id: 1,
        author: 'Farhan Alamsyah',
        content: 'Saya ingin mendaftar di pondok pesantren unsiq II isi formulir pendaftaran di data diri ya?',
        time: '2 jam yang lalu',
        imgSrc: "Theo",
        replies: [
          {
            id: 1,
            author: 'Unknown',
            content: 'Untuk alur pendaftaran bisa dilihat di halaman informasi pendaftaran ya kak',
            time: '8:00 PM',
          },],
      },
      {
        id: 2,
        author: 'Theo Rahmadhan',
        imgSrc: "Theo", // Replace with actual image URL
        content: 'UNSIQ II punya fasilitas apa aja?',
        time: '6 jam yang lalu',
        replies: [],
      },
      {
        id: 3,
        author: 'M Rayhan Rama',
        content: 'Saya ingin menanyakan tentang biaya pendaftaran',
        time: '6 jam yang lalu',
        replies: [],
      },
      {
        id: 4,
        author: 'Gabriyel Tanoyo',
        content: 'Halo adik-adik calon santri, semangat terus ya!',
        time: '6 jam yang lalu',
        replies: [],
      },
      {
        id: 5,
        author: 'Dimas Rakabumi',
        content: 'Mau bertanya untuk pendaftaran online, gimana caranya?',
        time: '6 jam yang lalu',
        replies: [],
      },
      {
        id: 6,
        author: 'Aji Nasetyo',
        content: 'Halo Guys, sudah pada daftar semua belum?',
        time: '6 jam yang lalu',
        replies: [],
      },
    ]);
   

  const openSettingsPopup = () => {
    setIsSettingsPopupOpen(true);
  };

  const closeSettingsPopup = () => {
    setIsSettingsPopupOpen(false);
  };

  const openLogoutPopup = () => {
    setIsLogoutPopupOpen(true);
  };

  const closeLogoutPopup = () => {
    setIsLogoutPopupOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleChangePassword = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Lakukan validasi kata sandi baru
    if (newPassword !== confirmPassword) {
      setPasswordError('Kata sandi baru tidak cocok');
      return;
    }

    setPasswordError('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsChangePasswordOpen(false);
  };
  const discussions = [
  { name: 'Farhan Alamsyah', time: '2 jam yang lalu', message: 'Saya ingin men...', unread: false },
  { name: 'Theo Rahmadhan', time: '6 jam yang lalu', message: 'UNSIQ II punya f...', unread: true },
  { name: 'M Rayhan Rama', time: '6 jam yang lalu', message: 'Saya ingin men...', unread: true },
  { name: 'Gabriyel Tanoyo', time: '6 jam yang lalu', message: 'Halo adik-adik c...', unread: true },
  { name: 'Dimas Rakabumi', time: '6 jam yang lalu', message: 'Mau bertanya un...', unread: true },
  { name: 'Aji Nasetyo', time: '6 jam yang lalu', message: 'Halo Guys...', unread: true },
];

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
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openPopup}>Profile</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openSettingsPopup}>Pengaturan</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openLogoutPopup}>Keluar</li> {/* Open logout popup */}
              </ul>
            )}
          </div>
        </div>
       
        {/* Popup for Profile */}
        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Profil</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <span className="text-black font-bold">Admin</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="namaLengkap">Nama Lengkap:</label>
                  <input 
                    type="text" 
                    id="namaLengkap" 
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    placeholder="Abdurohman Hamam"
                    value="Abdurohman Hamam"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    placeholder="abdurohman@gmail.com" 
                    value="Abdurohman@gmail.com"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="noTelp">Nomor Telepon:</label>
                  <input 
                    type="tel" 
                    id="noTelp" 
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    placeholder="08977654323"
                    value="08977654323"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="jabatan">Jabatan:</label>
                  <input 
                    type="text" 
                    id="jabatan" 
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    placeholder="Sekretaris 2"
                    value="Sekretaris 2"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="kataSandi">Kata Sandi:</label>
                  <input 
                    type="password" 
                    id="kataSandi" 
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    placeholder="*********"
                    value="Abd*******98"
                    readOnly
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closePopup}>Simpan</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Popup for Settings */}
        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <span className="text-black font-bold">Admin</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="namaLengkap">Nama Lengkap:</label>
                  <input 
                    type="text" 
                    id="namaLengkap" 
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                    placeholder="Abdurohman Hamam"
                    value="Abdurohman Hamam"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Ubah Kata Sandi:</label>
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={toggleChangePassword}>Ubah Kata Sandi</button>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Hapus Akun:</label>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Hapus Akun</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Popup for Change Password */}
        {isChangePasswordOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Ubah Kata Sandi</h2>
              <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="currentPassword">Kata Sandi Saat Ini:</label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Masukkan kata sandi saat ini"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="newPassword">Kata Sandi Baru:</label>
                  <input
                    type="password"
                    id="newPassword"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Masukkan kata sandi baru"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Konfirmasi kata sandi baru"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {passwordError && <span className="text-red-500">{passwordError}</span>}
                </div>
                <div className="flex justify-end gap-4">
                  <button type="button" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={toggleChangePassword}>Batal</button>
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Popup for Logout */}
        {isLogoutPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Keluar dari akun anda?</h2> 
              <div className="flex justify-end gap-4">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeLogoutPopup}>Tidak</button> 
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={() => {
                  // Add your logout logic here
                  console.log("Logout!");
                  closeLogoutPopup();
                }}>Keluar</button>
              </div>
            </div>
          </div>
        )}
     <div className="flex h-screen">
      <div className="w-1/3 bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Forum Diskusi</h1>
        <ul>
          {discussions.map((discussion, index) => (
            <li
            x
              key={index}
              className={`flex items-center p-2 mb-2 ${index === 0 ? 'bg-white' : 'bg-gray-200'} ${discussion.unread ? 'font-bold' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <div className="text-sm">{discussion.name}
                </div>
                <div className="text-xs justify-end text-right text-gray-500">{discussion.time}</div>
                <div className="text-xs">{discussion.message}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 bg-white p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center border mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
            <img src={Theo} alt="user" className="" />

            </div>
            <div>
              <div className="text-sm font-bold">Farhan Alamsyah</div>
              <div className="text-xs text-gray-500">2 jam yang lalu</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-white p-4 border border-teal-600 rounded-md mb-7">
              Saya ingin mendaftar di pondok pesantren unsiq II isi formulir pendaftaran di data diri ya?
            </div>
            <div className="bg-teal-600 p-4 rounded-md ml-auto text-white text-right">
              Untuk alur pendaftaran bisa dilihat di halaman informasi pendaftaran ya kak
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input type="text" className="f lex-1 border rounded-md p-2" placeholder="Ketik pesan..." />
          <button className="ml-2 bg-teal-600 text-white p-2 rounded-md">Kirim</button>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default ForumDiskusi;