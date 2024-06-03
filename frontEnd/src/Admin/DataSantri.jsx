import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import Filter from "../assets/img/filter.png";
import Cetak from "../assets/img/cetak.png";

const DataSantri = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [namaLengkap, setNamaLengkap] = useState('');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [programStudi, setProgramStudi] = useState('');
  const [nim, setNim] = useState('');
  const [tahunMasuk, setTahunMasuk] = useState('');
  const [nik, setNik] = useState('');
  const [nisn, setNisn] = useState('');
  const [namaAyahIbu, setNamaAyahIbu] = useState('');
  const [noTelpOrangTua, setNoTelpOrangTua] = useState('');
  const [kategori, setKategori] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', {
      namaLengkap,
      tempatLahir,
      tanggalLahir,
      programStudi,
      nim,
      tahunMasuk,
      nik,
      nisn,
      namaAyahIbu,
      noTelpOrangTua,
      kategori,
    });
  };

  const [selectedSantri, setSelectedSantri] = useState(null);

  const data = [
    { name: "Sayifulloh", nim: "2021150108", year: 2024, category: "Beasiswa 5 Juz" },
    { name: "Rafi Aji S", nim: "2021150112", year: 2024, category: "Reguler" },
    { name: "Sayifulloh", nim: "2021150145", year: 2024, category: "Beasiswa 5 Juz" },
    { name: "Sayifulloh", nim: "2021150108", year: 2024, category: "Beasiswa 5 Juz" },
  ];

  const filteredData = data.filter(santri => 
    (selectedFilter === 'All' || santri.category === selectedFilter) && 
    (santri.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    santri.nim.includes(searchTerm))
  );

  const handleDelete = () => {
    console.log("Deleting santri:", selectedSantri);
    setShowDeleteConfirmation(false);
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  }

  const handleEdit = () => {
    console.log("Editing santri:", selectedSantri);
    setShowEditConfirmation(false);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
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
          <div className="flex items-center cursor-pointer">
              <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
              <span className="text-black">Abdurohman Hamam</span>
              <img src={arrow} alt="Dropdown Arrow" className="w-2 h-2 rotate-180 ml-2" />
            </div>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-10">Tabel Data Santri Baru</h1>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <button 
                className={`mr-2 py-2 px-4 rounded-lg focus:outline-none ${selectedFilter === 'All' ? 'bg-teal-500 text-white' : 'bg-gray-100'}`} 
                onClick={() => setSelectedFilter('All')}
              >
                All
              </button>
              <button 
                className={`mr-2 py-2 px-4 rounded-lg focus:outline-none ${selectedFilter === 'Reguler' ? 'bg-teal-500 text-white' : 'bg-gray-100'}`} 
                onClick={() => setSelectedFilter('Reguler')}
              >
                Reguler
              </button>
              <button 
                className={`py-2 px-4 rounded-lg focus:outline-none ${selectedFilter === 'Beasiswa 5 Juz' ? 'bg-teal-500 text-white' : 'bg-gray-100'}`} 
                onClick={() => setSelectedFilter('Beasiswa 5 Juz')}
              >
                Beasiswa
              </button>
            </div>
            <button className="py-1 px-2 bg-teal-500 text-white rounded-lg focus:outline-none flex items-center">
              <img src={Cetak} alt="Cetak" className="w-10 h-10 "/>
              <span>Cetak</span>
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <img src={Filter} alt="Filter" className="w-6 h-6 mr-0" />
            <label htmlFor="categoryFilter" className="mr-5">Filter</label>
            <select
              id="categoryFilter"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-neutral-200 p-2 rounded-lg focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Reguler">Reguler</option>
              <option value="Beasiswa 5 Juz">Beasiswa 5 Juz</option>
            </select>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">
                    <input type="checkbox" />
                  </th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">Nama</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">NIM</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">Tahun Masuk Pondok</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">Kategori</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">Data Diri</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((santri, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-400">
                      <input type="checkbox" />
                    </td>
                    <td className="py-2 px-4 border-b border-gray-400">{santri.name}</td>
                    <td className="py-2 px-4 border-b border-gray-400">{santri.nim}</td>
                    <td className="py-2 px-4 border-b border-gray-400">{santri.year}</td>
                    <td className="py-2 px-4 border-b border-gray-400">{santri.category}</td>
                    <td className="py-2 px-4 border-b border-gray-400">
                      <ul className="flex space-x-2 text-green-500 mr-2">
                        <li>
                          <button onClick={() => { 
                            setShowDeleteConfirmation(true);
                            setSelectedSantri(santri); 
                          }} className="bg-blue-400 text-white px-2 py-1 rounded">
                            view
                          </button>
                        </li>
                        <li>
                          <button onClick={() => { 
                            setShowEditConfirmation(true);
                            setSelectedSantri(santri); 
                          }} className="bg-green-500 text-white px-2 py-1 rounded">
                            Edit
                          </button>
                        </li>
                        <li>
                          <button onClick={() => {
                            setShowDeleteConfirmation(true);
                            setSelectedSantri(santri);
                          }} className="bg-red-500 text-white px-2 py-1 rounded">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Delete Confirmation</h2>
              <p>Are you sure you want to delete this santri?</p>
              <div className="flex justify-end mt-6">
                <button onClick={handleCancelDelete} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Confirmation Modal */}
        {showEditConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl text-teal-600 font-extrabold mb-4">Edit Berkas Data Santri</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="namaLengkap" className="text-gray-700">Nama Lengkap</label>
                    <input type="text" id="namaLengkap" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div> <div>
                    <label htmlFor="programStudi" className="text-gray-700">Program Studi</label>
                    <input type="text" id="programStudi" value={programStudi} onChange={(e) => setProgramStudi(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div>
                    <div>
                    <label htmlFor="tempatLahir" className="text-gray-700">Tempat Lahir</label>
                    <input type="text" id="tempatLahir" value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} className="w-full p-2 border  border-gray-400 rounded"/>
                  </div>
                
                  <div>
                    <label htmlFor="nim" className="text-gray-700">NIM</label>
                    <input type="text" id="nim" value={nim} onChange={(e) => setNim(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div>
                 <div>
                    <label htmlFor="tanggalLahir" className="text-gray-700" >Tanggal Lahir</label>
                    <input type="date" id="tanggalLahir" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} className="w-full p-2 border border-gray-400 text-gray-400 rounded"/>
                  </div>
                  <div>
                    <label htmlFor="tahunMasuk" className="text-gray-700">Tahun Masuk</label>
                    <input type="number" id="tahunMasuk" value={tahunMasuk} onChange={(e) => setTahunMasuk(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div>
                  <div>
                    <label htmlFor="nik" className="text-gray-700">NIK</label>
                    <input type="text" id="nik" value={nik} onChange={(e) => setNik(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div>
                  <div>
                    <label htmlFor="nisn" className="text-gray-700">NISN</label>
                    <input type="text" id="nisn" value={nisn} onChange={(e) => setNisn(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div>
                  <div>
                    <label htmlFor="namaAyahIbu" className="text-gray-700">Nama Ayah/Ibu</label>
                    <input type="text" id="namaAyahIbu" value={namaAyahIbu} onChange={(e) => setNamaAyahIbu(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div>
                 
                  <div>
                    <label htmlFor="kategori" className="text-gray-700">Kategori</label>
                    <input type="text" id="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div> 
                  <div>
                    <label htmlFor="noTelpOrangTua" className="text-gray-700">No Telp Orang Tua</label>
                    <input type="text" id="noTelpOrangTua" value={noTelpOrangTua} onChange={(e) => setNoTelpOrangTua(e.target.value)} className="w-full p-2 border border-gray-400 rounded"/>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button onClick={() => setShowEditConfirmation(false)} className="mr-2 text-gray-700 px-4 py-2 border border-gray-600 hover:bg-teal-600 hover:text-white rounded">Batal</button>
                  <button type="submit" className="px-4 py-2 hover:text-white hover:bg-teal-600 border border-gray-600 text-gray-700 rounded">Perbarui</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataSantri;
