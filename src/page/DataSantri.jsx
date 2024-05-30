import React, { useState } from 'react';
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";

const DataSantri = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

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
          <h1 className="text-xl font-bold mb-4">Tabel Data Santri Baru</h1>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <button 
                className={`mr-2 py-2 px-4 rounded-lg focus:outline-none ${filter === 'All' ? 'bg-teal-500 text-white' : 'bg-gray-100'}`} 
                onClick={() => setFilter('All')}
              >
                All
              </button>
              <button 
                className={`mr-2 py-2 px-4 rounded-lg focus:outline-none ${filter === 'Reguler' ? 'bg-teal-500 text-white' : 'bg-gray-100'}`} 
                onClick={() => setFilter('Reguler')}
              >
                Reguler
              </button>
              <button 
                className={`py-2 px-4 rounded-lg focus:outline-none ${filter === 'Beasiswa 5 Juz' ? 'bg-teal-500 text-white' : 'bg-gray-100'}`} 
                onClick={() => setFilter('Beasiswa 5 Juz')}
              >
                Beasiswa
              </button>
            </div>
            <button className="py-2 px-4 bg-teal-500 text-white rounded-lg focus:outline-none">
              Cetak
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="categoryFilter" className="mr-2">Filter by Category:</label>
            <select
              id="categoryFilter"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-gray-200 p-2 rounded-lg focus:outline-none mr-4"
            >
              <option value="All">All</option>
              <option value="Reguler">Reguler</option>
              <option value="Beasiswa 5 Juz">Beasiswa 5 Juz</option>
            </select>
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
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">
                    <input type="checkbox" />
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">Nama</th>
                  <th className="py-2 px-4 border-b border-gray-200">NIM</th>
                  <th className="py-2 px-4 border-b border-gray-200">Tahun Masuk Pondok</th>
                  <th className="py-2 px-4 border-b border-gray-200">Kategori</th>
                  <th className="py-2 px-4 border-b border-gray-200">Data Diri</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((santri, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <input type="checkbox" />
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">{santri.name}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{santri.nim}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{santri.year}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{santri.category}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <button className="text-blue-500 mr-2">View</button>
                      <button className="text-green-500 mr-2">Edit</button>
                      <button className="text-red-500">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSantri;
