import React, { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';


function Pendaftaran() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFormClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-teal-600 h-40 ]flex items-center justify-center text-white font-bold text-5xl">

Informasi Pendaftaran

</div>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          Telah Dibuka Penerimaan Santri Baru Pondok Pesantren
          <br />
          Tahfidzul Qur'an Mahasiswa UNSIQ 2 Tahun 2024 / 2025
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <p>
              Lihat Brosur Pondok Pesantren unduh{' '}
              <a href="#" className="text-teal-600 underline  font-bold ">
                disini
              </a>
            </p>
            <p>
            Informasi Syarat pendaftaran dan rincian biaya bisa lihat{' '}
              <a href="#" className="text-teal-600 underline  font-bold ">
                disini
              </a>
            </p>
            <p>
            Materi test (Reguler) unduh di{' '}
              <a href="#" className="text-teal-600 underline  font-bold ">
                disini
              </a>
            </p>
            <p>
            Surat Pernyataan unduh di{' '}
              <a href="#" className="text-teal-600 underline  font-bold ">
                disini
              </a>
            </p>
          </div>
          <h2 className="text-xl font-bold mb-4">ALUR PENDAFTARAN</h2>
          <ol className="list-decimal list-inside mb-8 space-y-1">
            <li>Silahkan mengunduh dokumen di atas dan memahami alur pendaftaran</li>
            <li>Silahkan mengunduh surat pernyataan, lalu lengkapi untuk di unggah di formulir pendaftaran</li>
            <li>Buat akun baru dengan klik tombol "Masuk" atau klik "Isi Formulir"</li>
            <li>Login dengan memasukkan email dan password yang telah dibuat</li>
            <li>Isi formulir pendaftaran dengan lengkap dengan tekan tombol "Formulir pendaftaran" pada akun profil lalu klik "Simpan Perubahan"</li>
            <li>Proses pendaftaran selesai, informasi lebih lanjut bisa dilihat melalui fitur notifikasi lonceng</li>
          </ol>
          <button
            onClick={handleFormClick}
            className="bg-teal-600 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
          >
            {isFormVisible ? 'Tutup Formulir' : 'Isi Formulir'}
          </button>
          {isFormVisible && (
            <div className="mt-8">
              {/* Formulir pendaftaran */}
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">No. Telepon</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="No. Telepon"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Kirim
                </button>
              </form>
            </div>
            
          )}
        </div>
      </div>
        <Footer />
    </>
  );
}

export default Pendaftaran;
