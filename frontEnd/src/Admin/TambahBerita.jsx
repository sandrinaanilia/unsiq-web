import React from "react";

const TambahBerita = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
          <h1 className="text-2xl font-bold mb-4 text-teal-600">Tambah Berita</h1>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/3">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="photo">
                Tambah Foto
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg h-80 w-80 flex justify-center items-center">
                <span className="text-gray-500">Foto 1</span>
              </div>
            </div>
            <div className="w-2/3 flex flex-col space-y-4">
              <div className="w-full">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="title">
                  Judul Berita
                </label>
                <input id="title" type="text" className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan judul" />
              </div>
              <div className="w-full">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="date">
                  Tanggal
                </label>
                <input id="date" type="date" className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan tanggal" />
              </div>
              <div className="w-full flex space-x-4 items-end">
                <div className="flex-grow">
                  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="description">
                    Deskripsi
                  </label>
                  <textarea id="description" className="shadow appearance-none border rounded h-40 w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan deskripsi" />
                </div>
                <div className="flex space-x-4 mb-2">
                  <button className="border border-teal-600 text-teal-600 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Batal</button>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Unggah</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahBerita;
