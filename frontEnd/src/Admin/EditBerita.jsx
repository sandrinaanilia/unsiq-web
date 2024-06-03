import React, { useState } from "react";

const EditBerita = () => {
  const [photo, setPhoto] = useState("path/to/photo.jpg");
  const [title, setTitle] = useState("PPTQ Unsiq 2 berhasil membawa 2 piala dalam rangka hari santri");
  const [date, setDate] = useState("20/10/2023");
  const [description, setDescription] = useState(
    "Pada perayaan Hari Santri yang diperingati secara nasional, Pusat Pendidikan dan Pelatihan Qur'an (PPTQ) UNSIQ 2 meraih prestasi gemilang dengan memenangkan dua piala dalam kompetisi tingkat kabupaten. Kedua piala ini berhasil diraih dalam dua kategori berbeda, menunjukkan keunggulan dan dedikasi yang luar biasa dari santri-santri yang terlibat. Dalam ajang perlombaan yang diadakan sebagai bagian dari peringatan Hari Santri, PPTQ UNSIQ 2 berhasil menonjolkan keunggulan me."
  );

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
          <h1 className="text-2xl font-bold mb-4 text-teal-600">Edit Berita</h1>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/3">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="photo">
                Tambah Foto
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg h-80 w-80 flex justify-center items-center">
                {photo ? <img src={photo} alt="Foto Berita" className="h-full w-full object-cover rounded-lg" /> : <span className="text-gray-500">Foto 1</span>}
              </div>
            </div>
            <div className="w-2/3 flex flex-col space-y-4">
              <div className="w-full">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="title">
                  Judul Berita
                </label>
                <input
                  id="title"
                  type="text"
                  className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Masukkan judul"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="date">
                  Tanggal
                </label>
                <input
                  id="date"
                  type="date"
                  className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Masukkan tanggal"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="w-full flex space-x-4 items-end">
                <div className="flex-grow">
                  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="description">
                    Deskripsi
                  </label>
                  <textarea
                    id="description"
                    className="shadow appearance-none border rounded h-40 w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan deskripsi"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex space-x-4 mb-2">
                  <button className="border border-teal-600 text-teal-600 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Batal</button>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Perbarui</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBerita;
