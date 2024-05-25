import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState('Mahasiswa');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side: Login form */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold text-teal-600 mb-6">Masuk ke akun Anda</h1>

          {/* Toggle buttons */}
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 rounded-l-lg focus:outline-none ${role === 'Mahasiswa' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setRole('Mahasiswa')}
            >
              Mahasiswa
            </button>
            <button
              className={`flex-1 py-2 rounded-r-lg focus:outline-none ${role === 'Admin' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setRole('Admin')}
            >
              Admin
            </button>
          </div>

          {/* Login form */}
          <form>
          <div className="mb-4">
              <input type="nama" placeholder="Nama" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Kata sandi" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-4 text-right">
              <Link to="#" className="text-teal-600 hover:underline">Lupa kata sandi?</Link>
            </div>
            <button className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition duration-300">Masuk</button>
          </form>

          {/* Register link */}
          <div className="mt-4 text-center">
            <p>Sudah punya akun? <Link to="/login" className="text-teal-600 hover:underline">Masuk</Link></p>
          </div>
        </div>

        {/* Right side: Welcome message */}
        <div className="w-1/2 bg-teal-600 text-white flex flex-col justify-center items-center p-10">
          <div className="text-center">
            <img src={welcome} alt="Logo" className="mb-4 w-24 mx-auto" />
            <h2 className="text-2xl font-bold">Selamat Datang</h2>
            <p className="mt-2">di Portal Website PPTQ Mahasiswa UNSIQ 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
