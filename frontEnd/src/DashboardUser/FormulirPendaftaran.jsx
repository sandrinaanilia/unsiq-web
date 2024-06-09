import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../assets/img/dashboarduser.png";
import Pembayaran from "../assets/img/dollar.png";
import Pengaturan from "../assets/img/setting.png";
import Keluar from "../assets/img/keluar.png";
import Paper from "../assets/img/paper.png";

const FormulirPendaftaran = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    namaLengkap: "",
    jenisKelamin: "",
    tempatLahir: "",
    tanggalLahir: "",
    nik: "",
    nisn: "",
    nim: "",
    prodi: "",
    tahunMasuk: "",
    namaAyah: "",
    namaIbu: "",
    alamatOrtu: "",
    telpOrtu: "",
    pasFoto: null,
    suratPernyataan: null,
    kategori: "reguler",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    const allFieldsFilled = Object.values(formValues).every((value) => value !== "" && value !== null);

    if (allFieldsFilled) {
      setIsModalOpen(true);
    } else {
      alert("Mohon isi semua kolom pada formulir.");
    }
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
                  onClick={() => window.location.assign("/formulirpendaftaran")}
                >
                  <img src={Paper} alt="Formulir Pendaftaran" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Formulir Pendaftaran</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pembayaran" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => window.location.assign("/pembayaran")}
                >
                  <img src={Pembayaran} alt="Pembayaran" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Pembayaran</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pengaturanprofil" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => window.location.assign("/pengaturan")}
                >
                  <img src={Pengaturan} alt="Pengaturan Profil" className="w-6 h-6 mr-3" />
                  <span className="font-bold">Pengaturan Profil</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/keluar" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => window.location.assign("/keluar")}
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
              <h1 className="text-base font-bold">Isi Formulir ini dengan lengkap dan benar, lalu klik Kirim</h1>
            </div>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="namaLengkap" className="block text-base font-medium text-black">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="namaLengkap"
                      name="namaLengkap"
                      placeholder="Masukan nama lengkap Anda"
                      value={formValues.namaLengkap}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="jenisKelamin" className="block text-base font-medium text-black">
                      Jenis Kelamin
                    </label>
                    <input
                      type="text"
                      id="jenisKelamin"
                      name="jenisKelamin"
                      placeholder="Masukan jenis kelamin Anda"
                      value={formValues.jenisKelamin}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="tempatLahir" className="block text-base font-medium text-black">
                      Tempat Lahir
                    </label>
                    <input
                      type="text"
                      id="tempatLahir"
                      name="tempatLahir"
                      placeholder="Masukan tempat lahir Anda"
                      value={formValues.tempatLahir}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="tanggalLahir" className="block text-base font-medium text-black">
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      id="tanggalLahir"
                      name="tanggalLahir"
                      value={formValues.tanggalLahir}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="nik" className="block text-base font-medium text-black">
                      NIK
                    </label>
                    <input
                      type="text"
                      id="nik"
                      name="nik"
                      placeholder="Masukan NIK Anda"
                      value={formValues.nik}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="nisn" className="block text-base font-medium text-black">
                      NISN
                    </label>
                    <input
                      type="text"
                      id="nisn"
                      name="nisn"
                      placeholder="Masukan NISN Anda"
                      value={formValues.nisn}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="nim" className="block text-base font-medium text-black">
                      NIM
                    </label>
                    <input
                      type="text"
                      id="nim"
                      name="nim"
                      placeholder="Masukan NIM Anda"
                      value={formValues.nim}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="prodi" className="block text-base font-medium text-black">
                      Program Studi
                    </label>
                    <input
                      type="text"
                      id="prodi"
                      name="prodi"
                      placeholder="Masukan program studi Anda"
                      value={formValues.prodi}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="tahunMasuk" className="block text-base font-medium text-black">
                      Tahun Masuk
                    </label>
                    <input
                      type="text"
                      id="tahunMasuk"
                      name="tahunMasuk"
                      placeholder="Masukan tahun masuk Anda"
                      value={formValues.tahunMasuk}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="namaAyah" className="block text-base font-medium text-black">
                      Nama Ayah
                    </label>
                    <input
                      type="text"
                      id="namaAyah"
                      name="namaAyah"
                      placeholder="Masukan nama ayah Anda"
                      value={formValues.namaAyah}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="namaIbu" className="block text-base font-medium text-black">
                      Nama Ibu
                    </label>
                    <input
                      type="text"
                      id="namaIbu"
                      name="namaIbu"
                      placeholder="Masukan nama ibu Anda"
                      value={formValues.namaIbu}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="alamatOrtu" className="block text-base font-medium text-black">
                      Alamat Orang Tua
                    </label>
                    <input
                      type="text"
                      id="alamatOrtu"
                      name="alamatOrtu"
                      placeholder="Masukan alamat orang tua Anda"
                      value={formValues.alamatOrtu}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="telpOrtu" className="block text-base font-medium text-black">
                      Telepon Orang Tua
                    </label>
                    <input
                      type="text"
                      id="telpOrtu"
                      name="telpOrtu"
                      placeholder="Masukan telepon orang tua Anda"
                      value={formValues.telpOrtu}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm placeholder:text-sm placeholder:pl-2 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="pasFoto" className="block text-base font-medium text-black">
                      Pas Foto
                    </label>
                    <input
                      type="file"
                      id="pasFoto"
                      name="pasFoto"
                      onChange={handleInputChange}
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-teal-50 file:text-teal-600 hover:file:bg-teal-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="suratPernyataan" className="block text-base font-medium text-black">
                      Surat Pernyataan
                    </label>
                    <input
                      type="file"
                      id="suratPernyataan"
                      name="suratPernyataan"
                      onChange={handleInputChange}
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-teal-50 file:text-teal-600 hover:file:bg-teal-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="kategori" className="block text-base font-medium text-black">
                      Kategori Pendaftar
                    </label>
                    <select
                      id="kategori"
                      name="kategori"
                      value={formValues.kategori}
                      onChange={handleInputChange}
                      className="mt-1 block w-full bg-white hover:text-white hover:bg-teal-600 rounded-md shadow-sm"
                    >
                      <option value="reguler">Reguler</option>
                      <option value="beasiswa">Beasiswa 5 - 10 Juz</option>
                      <option value="beasiswa">Beasiswa 11 - 20 Juz</option>
                      <option value="beasiswa">Beasiswa 21 - 29 Juz</option>
                      <option value="beasiswa">Beasiswa 30 Juz</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6 col-span-2 flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Kirim
                </button>
              </div>
            </form>
            {isModalOpen && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <h2 className="text-xl font-bold mb-4">Formulir Terkirim</h2>
                  <p className="mb-4">Terima kasih, formulir Anda telah berhasil dikirim.</p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormulirPendaftaran;
