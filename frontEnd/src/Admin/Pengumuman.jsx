import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";

const Pengumuman = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false); // State for logout popup
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false); // State for change password popup
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [announcements, setAnnouncements] = useState([
    { id: 1, text: "Silakan lakukan pembayaran daftar ulang dan upload bukti pembayaran sebelum 20 Mei 2024", autoMessage: "Pesan Otomatis" },
    { id: 2, text: "Pendaftaran Anda sudah berhasil", autoMessage: "Pesan Otomatis" },
  ]);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
  const [newAnnouncementText, setNewAnnouncementText] = useState("");

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
      setPasswordError("Kata sandi baru tidak cocok");
      return;
    }

    setPasswordError("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsChangePasswordOpen(false);
  };

  const handleEditAnnouncement = (announcement) => {
    setCurrentAnnouncement(announcement);
    setNewAnnouncementText(announcement.text);
    setIsEditPopupOpen(true);
  };

  const handleDeleteAnnouncement = (announcementId) => {
    setAnnouncements(announcements.filter((ann) => ann.id !== announcementId));
  };

  const handleAddAnnouncement = () => {
    setCurrentAnnouncement(null);
    setNewAnnouncementText("");
    setIsEditPopupOpen(true);
  };

  const handleSaveAnnouncement = () => {
    if (currentAnnouncement) {
      // Edit mode
      setAnnouncements(announcements.map((ann) => (ann.id === currentAnnouncement.id ? { ...ann, text: newAnnouncementText } : ann)));
    } else {
      // Add mode
      const newAnnouncement = {
        id: announcements.length + 1,
        text: newAnnouncementText,
        autoMessage: "Pesan Otomatis",
      };
      setAnnouncements([...announcements, newAnnouncement]);
    }
    setIsEditPopupOpen(false);
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
            <input type="text" placeholder="Search..." className="bg-gray-100 pl-10 p-2 rounded-lg focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
              <span className="text-black">Abdurohman Hamam</span>
              <img src={arrow} alt="Dropdown Arrow" className={`w-2 h-2 ml-2 ${isDropdownOpen ? "rotate-0" : "rotate-180"}`} />
            </div>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openPopup}>
                  Profile
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openSettingsPopup}>
                  Pengaturan
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openLogoutPopup}>
                  Keluar
                </li>{" "}
                {/* Open logout popup */}
              </ul>
            )}
          </div>
        </div>

        {/* Announcement Section */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Pengumuman</h1>
          <button className="text-teal-600 font-bold mb-4" onClick={handleAddAnnouncement}>
            + Tambah Pengumuman
          </button>
          <div className="space-y-4">
            {announcements.map((ann) => (
              <div key={ann.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p>{ann.text}</p>
                <p className="text-sm text-teal-600">{ann.autoMessage}</p>
                <div className="flex justify-end space-x-2 mt-2">
                  <button className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none" onClick={() => handleEditAnnouncement(ann)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none" onClick={() => handleDeleteAnnouncement(ann.id)}>
                    Hapus
                  </button>
                </div>
              </div>
            ))}
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
                  <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="abdurohman@gmail.com" value="Abdurohman@gmail.com" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="noTelp">Nomor Telepon:</label>
                  <input type="tel" id="noTelp" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="08977654323" value="08977654323" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="peran">Peran:</label>
                  <input type="text" id="peran" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Admin" value="Admin" readOnly />
                </div>
              </form>
              <div className="flex justify-end mt-4">
                <button className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none" onClick={closePopup}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for Edit/Add Announcement */}
        {isEditPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">{currentAnnouncement ? "Edit" : "Tambah"} Pengumuman</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="announcementText">Teks Pengumuman:</label>
                  <textarea
                    id="announcementText"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tulis teks pengumuman disini"
                    value={newAnnouncementText}
                    onChange={(e) => setNewAnnouncementText(e.target.value)}
                  />
                </div>
              </form>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none" onClick={() => setIsEditPopupOpen(false)}>
                  Batal
                </button>
                <button className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none" onClick={handleSaveAnnouncement}>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for Settings */}
        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="ubahKataSandi">Ubah Kata Sandi:</label>
                  <button id="ubahKataSandi" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-teal-500 text-white hover:bg-teal-600" onClick={toggleChangePassword}>
                    Ubah Kata Sandi
                  </button>
                </div>
              </form>
              <div className="flex justify-end mt-4">
                <button className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none" onClick={closeSettingsPopup}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for Change Password */}
        {isChangePasswordOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Ubah Kata Sandi</h2>
              <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="currentPassword">Kata Sandi Saat Ini:</label>
                  <input type="password" id="currentPassword" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-600" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="newPassword">Kata Sandi Baru:</label>
                  <input type="password" id="newPassword" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-600" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru:</label>
                  <input type="password" id="confirmPassword" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-600" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <div className="flex justify-end mt-4">
                  <button className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none mr-2" onClick={toggleChangePassword}>
                    Batal
                  </button>
                  <button type="submit" className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none">
                    Ubah
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Popup for Logout */}
        {isLogoutPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Konfirmasi Keluar</h2>
              <p className="mb-4">Apakah Anda yakin ingin keluar?</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none" onClick={closeLogoutPopup}>
                  Batal
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none"
                  onClick={() => {
                    // Logika untuk logout
                    console.log("Logged out");
                    closeLogoutPopup();
                  }}
                >
                  Keluar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pengumuman;
