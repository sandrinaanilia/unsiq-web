import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const PembayaranAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [payments, setPayments] = useState([
    {
      id: 1,
      text: "Untuk calon santri 2024/2025 silahkan membayar daftar ulang maksimal Senin, 20 Mei 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut 356373738833338. Untuk rincian biaya bisa lihat di sini",
      date: "10 Mei 2024",
    },
  ]);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentPayment, setCurrentPayment] = useState(null);
  const [newPaymentText, setNewPaymentText] = useState("");
  const [newPaymentDate, setNewPaymentDate] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [paymentToDelete, setPaymentToDelete] = useState(null);

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

  const handleEditPayment = (payment) => {
    setCurrentPayment(payment);
    setNewPaymentText(payment.text);
    setNewPaymentDate(payment.date);
    setIsEditPopupOpen(true);
  };

  const handleDeletePayment = (paymentId) => {
    setPayments(payments.filter((pay) => pay.id !== paymentId));
    setShowDeleteConfirmation(false);
  };

  const handleAddPayment = () => {
    setCurrentPayment(null);
    setNewPaymentText("");
    setNewPaymentDate("");
    setIsEditPopupOpen(true);
  };

  const handleSavePayment = (e) => {
    e.preventDefault();
    if (currentPayment) {
      setPayments(payments.map((pay) => (pay.id === currentPayment.id ? { ...pay, text: newPaymentText, date: newPaymentDate } : pay)));
    } else {
      const newPayment = {
        id: payments.length + 1,
        text: newPaymentText,
        date: newPaymentDate,
      };
      setPayments([...payments, newPayment]);
    }
    setIsEditPopupOpen(false);
  };

  const handleConfirmDelete = (paymentId) => {
    setPaymentToDelete(paymentId);
    setShowDeleteConfirmation(true);
  };

  const viewPaymentProof = () => {
    // Navigate to the payment proof page
    // Example: window.location.href = '/path-to-payment-proof';
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
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
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="p-4 font-poppins min-h-screen">
          <div className="bg-white shadow-md rounded-lg overflow-x-auto p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold mb-4 text-black">
                <span style={{ backgroundColor: "teal-600", padding: "0.2rem 0.5rem", borderRadius: "3rem", color: "Black" }}>Pembayaran</span>
              </h1>
            </div>
            <button className="text-teal-600 font-bold mb-4" onClick={handleAddPayment} style={{ display: "block", textAlign: "right" }}>
              + Tambah Pembayaran
            </button>
            <div className="space-y-2">
              <div className="space-y-4">
                {payments.map((pay) => (
                  <div key={pay.id} className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <p className="text-black font-bold">{pay.date}</p> {/* Tanggal dengan warna hitam dan tebal */}
                    </div>
                    <p className="text-black">{pay.text}</p>
                    <div className="flex justify-between">
                      <button onClick={viewPaymentProof} className="bg-teal-600 text-white px-4 py-2 rounded-md">
                        Lihat Bukti Pembayaran
                      </button>
                      <div className="flex space-x-4">
                        <button onClick={() => handleEditPayment(pay)} className="bg-green-500 text-white px-2 py-1 rounded">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={() => handleConfirmDelete(pay.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Profil</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="text-black font-bold">Admin</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-black">Nama Lengkap</label>
                  <input type="text" value="Abdurohman Hamam" readOnly className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-black">Email</label>
                  <input type="email" value="abdurohman@gmail.com" readOnly className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-black">Nomor Telepon</label>
                  <input type="email" value="08977654323" readOnly className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-black">Jabatan</label>
                  <input type="email" value="Sekertaris 2" readOnly className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="kataSandi">Kata Sandi:</label>
                  <input type="password" id="kataSandi" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="*********" value="Abd*******98" readOnly />
                </div>

                <div className="flex justify-end">
                  <button type="button" onClick={closePopup} className="px-4 py-2 bg-teal-600 text-white rounded-lg">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="text-black font-bold">Admin</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className=" text-black">Nama Lengkap:</label>
                  <input type="text" value="Abdurohman Hamam" readOnly className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className=" text-white px-4 py-2 rounded-md text-center bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <button type="button" onClick={handleChangePassword} className="px-4 py-2 bg-teal-600 text-white rounded-md">
                      Ubah Kata Sandi
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button type="button" onClick={closeSettingsPopup} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                      Kembali
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {isLogoutPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Keluar dari akun anda?</h2>
              <div className="flex justify-end gap-4">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeLogoutPopup}>
                  Tidak
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => {
                    // Add your logout logic here
                    console.log("Logout!");
                    closeLogoutPopup();
                    navigate("/");
                    <a href="/beranda" className="font-bold text-teal-600"></a>;
                  }}
                >
                  Keluar
                </button>
              </div>
            </div>
          </div>
        )}

        {isEditPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
              <h2 className="text-xl font-bold mb-4">{currentPayment ? "Edit Pembayaran" : "Tambah Pembayaran"}</h2>
              <form className="flex flex-col gap-4" onSubmit={handleSavePayment}>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-black">Tanggal</label>
                  <input type="date" value={newPaymentDate} onChange={(e) => setNewPaymentDate(e.target.value)} className="border border-gray-300 p-2 rounded-lg" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-black">Deskripsi</label>
                  <textarea value={newPaymentText} onChange={(e) => setNewPaymentText(e.target.value)} className="border border-gray-300 p-2 rounded-lg" required />
                </div>
                <div className="flex justify-end gap-4">
                  <button type="button" onClick={() => setIsEditPopupOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                    Batal
                  </button>
                  <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-lg">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteConfirmation && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
              <p className="mb-4 text-black">Apakah Anda yakin ingin menghapus pembayaran ini?</p>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setShowDeleteConfirmation(false)} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                  Batal
                </button>
                <button type="button" onClick={() => handleDeletePayment(paymentToDelete)} className="px-4 py-2 bg-red-600 text-white rounded-lg">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PembayaranAdmin;
