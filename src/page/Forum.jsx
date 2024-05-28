import React, { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import user1 from "../assets/img/user1.png";
import user2 from "../assets/img/user2.png";
import user3 from "../assets/img/user3.png";
import user4 from "../assets/img/user4.png";
import hamam from "../assets/img/hamam.png";
import likeIcon from "../assets/img/like.png";
import commentIcon from "../assets/img/comment.png";
import iconuser from "../assets/img/iconuser.jpg";


function Forum() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Dimas Rakabumi',
      date: '04 Mei 2024',
      comment: 'Mau bertanya untuk daftar ulang membawa berkas fotocopy yang diminta ke pondoknya?',
      imgSrc: user1,
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      name: 'Gabriel Tanoyo',
      date: '04 Mei 2024',
      comment: 'Hai adik adik calon santri baru, saya panitia PSB ingin menyampaikan untuk bukti pembayaran bisa di beri keterangan nama lengkap yaa',
      imgSrc: user2,
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      name: 'M Rayhan Rama',
      date: '05 Mei 2024',
      comment: 'Saya Ingin mendaftar di pondok pesantren UNSIQ II',
      imgSrc: user3,
      likes: 0,
      comments: [],
      reply: {
        name: 'Abdurohman Hamam',
        comment: 'Halo Farhan UNSIQ II, silahkan buat akun terlebih dahulu dan isi data diri ya. untuk informasi lengkapnya klik di navbar "Pendaftaran". Terima Kasih.',
        imgSrc: hamam, 
        likes: 0,
        comments: [],
      },
    },
    {
      id: 4,
      name: 'Theo Ramadhan',
      date: '06 Mei 2024',
      comment: 'UNSIQ II mempunyai fasilitas yang modern, sehingga proses pembelajaran menjadi lebih nyaman dan efektif',
      imgSrc: user4,
      likes: 0,
      comments: [],
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      name: 'User',
      date: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      comment: newComment,
      imgSrc: user1, // Default user image, change as needed
      likes: 0,
      comments: [],
    };
    setPosts([...posts, newPost]);
    setNewComment('');
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleAddComment = (id, text) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, comments: [...post.comments, { text, imgSrc: user1 }] } : post
    ));
  };

  return (
    <>
      <Navbar />
      <div className="bg-teal-600 h-80 flex items-center justify-center">
        <h1 className="text-white py-36 h-10 font-bold text-4xl md:text-4xl text-center">Forum Diskusi</h1>
      </div>
      <div className="container mx-auto px-4 py-6 md:py-12"> {/* Tambahkan padding atas untuk mencegah tertutupnya forum oleh navbar */}
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-300 rounded-lg p-4 mt-4 bg-white shadow-sm">
            <div className="flex items-center mb-2">
              <img src={post.imgSrc} alt="User" className="h-8 w-8 rounded-full mr-2" />
              <div>
                <b className="text-sm">{post.name}</b>
                <div className="text-gray-500 text-xs mb-2">{post.date}</div>
              </div>
            </div>
            <div className="text-gray-700 text-sm mb-2">{post.comment}</div>
            {post.reply && (
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="ml-8 flex items-start">
                  <img src={post.reply.imgSrc} alt="Reply User" className="h-8 w-8 rounded-full mr-2" />
                  <div>
                    <b className="text-sm">{post.reply.name}</b>
                    <div className="text-blue-700 text-xs mb-2">Admin</div>
                    <div className="text-gray-700 text-sm">{post.reply.comment}</div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center mt-4">
              <button onClick={() => handleLike(post.id)} className="flex items-center text-gray-600 mr-4">
                <img src={likeIcon} alt="Like" className="h-5 w-5 mr-1" />
                <span>{post.likes}</span>
              </button>
              <button onClick={() => handleAddComment(post.id, prompt('Add your comment:'))} className="flex items-center text-gray-600">
                <img src={commentIcon} alt="Comment" className="h-5 w-5 mr-1" />
                <span>{post.comments.length}</span>
              </button>
            </div>
            {post.comments.length > 0 && (
              <div className="mt-4">
                {post.comments.map((comment, index) => (
                  <div key={index} className="flex items-start mt-2">
                    <img src={comment.imgSrc} alt="Comment User" className="h-6 w-6 rounded-full mr-2" />
                    <div className="text-gray-700 text-sm">{comment.text}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <form onSubmit={handleFormSubmit} className="mt-4 flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
          <img src={iconuser} alt="User" className="h-10 w-10 rounded-full mr-2" />
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-lg mr-2"
            placeholder="Ketik Pesan"
            value={newComment}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Kirim
          </button>
        </form>
      </div>
      <Footer />
    </>
  ); 
}

export default Forum;