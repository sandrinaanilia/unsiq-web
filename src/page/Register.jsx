import { useState } from 'react';
import Logo from '../assets/img/welcome2.jpeg'; // Make sure to replace this path with the correct path to your logo

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Mahasiswa');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl p-10 max-w-4xl w-full">

        {/* Left side */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
          <img src={Logo} alt="Logo" className="w-240 mb-4 mx-auto hidden md:block" />
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-teal-600 mb-2">Buat Akun</h2>
            <p className="text-gray-400 mb-8">gunakan email Anda untuk pendaftaran</p>

            {/* Toggle buttons */}
            <div className="flex mb-6 rounded-md hover:bg-teal-700 transition duration-300">
              <button
                className={`flex-1 py-2 rounded-l-lg focus:outline-none ${role === 'Mahasiswa' ? 'bg-teal-600 text-white font-bold' : 'bg-emerald-50 text-emerald-600 font-bold'}`}
                onClick={() => setRole('Mahasiswa')}
              >
                Mahasiswa
              </button>
              <button
                className={`flex-1 py-2 rounded-r-lg focus:outline-none ${role === 'Admin' ? 'bg-teal-600 text-white font-bold' : 'bg-emerald-50 text-emerald-600 font-bold'}`}
                onClick={() => setRole('Admin')}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">
                  Nama Lengkap
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700">
                  Email
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700">
                  Kata Sandi
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Kata Sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="mb-4 text-right">
                <a href="#" className="text-teal-600 hover:underline">Lupa kata sandi?</a>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition duration-300"
              >
                Daftar
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Sudah punya akun? <a href="/login" className="text-teal-600 hover:underline">Masuk</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
