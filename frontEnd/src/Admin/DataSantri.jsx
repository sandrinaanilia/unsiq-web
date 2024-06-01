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
    // Implement your delete logic here
    // This is just a placeholder for demonstration
    console.log("Deleting santri:", selectedSantri);
    setShowDeleteConfirmation(false);
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  }

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
          <div className="flex items-center cursor-pointer">
              <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
              <span className="text-black">Abdurohman Hamam</span>
              <img src={arrow} alt="Dropdown Arrow" className="w-2 h-2 rotate-180 ml-2" />
            </div>
        </div>

        {/* Content */}
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
                          <button onClick={() => navigate("/berkasdatasantri")} className="bg-blue-400 text-white px-2 py-1 rounded">
                            view
                          </button>
                        </li>
                        <li>
                          <button onClick={() => navigate("/editberkasdata")} className="bg-green-400 text-white px-2 py-1 rounded">
                            edit
                          </button>
                        </li>
                        <li>
                          <button onClick={() => { 
                            setShowDeleteConfirmation(true);
                            setSelectedSantri(santri); 
                          }} className="bg-red-400 text-white px-2 py-1 rounded">
                            delete
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Delete Confirmation Modal */}
          {showDeleteConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Konfirmasi Penghapusan</h2>
                <p className="mb-6">Apakah Anda yakin ingin menghapus Data Santri {selectedSantri?.name}?</p>
                <div className="flex justify-end">
                  <button onClick={handleCancelDelete} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Batal</button>
                  <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Ya</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataSantri;