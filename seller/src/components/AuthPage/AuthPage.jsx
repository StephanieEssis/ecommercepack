// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthPage = () => {
//   const [view, setView] = useState('login'); // login | register | reset
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/login', {
//         email: formData.email,
//         password: formData.password,
//       });
//       alert('Connexion réussie');
//       localStorage.setItem('token', res.data.token);
//     } catch (err) {
//       console.error('Erreur de connexion:', err);
//       alert(err.response?.data?.message || 'Erreur de connexion');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/auth/register', {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
//       alert('Inscription réussie');
//       setView('login');
//     } catch (err) {
//       console.error('Erreur d’inscription:', err);
//       alert(err.response?.data?.message || 'Erreur d’inscription');
//     }
//   };

//   const handleReset = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/auth/reset-password', {
//         email: formData.email,
//       });
//       alert('Lien de réinitialisation envoyé');
//       setView('login');
//     } catch (err) {
//       console.error('Erreur de réinitialisation:', err);
//       alert(err.response?.data?.message || 'Erreur de réinitialisation');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
//       <div style={{ marginBottom: 20 }}>
//         <button onClick={() => setView('login')}>Connexion</button>
//         <button onClick={() => setView('register')}>Inscription</button>
//         <button onClick={() => setView('reset')}>Mot de passe oublié</button>
//       </div>

//       {view === 'login' && (
//         <form onSubmit={handleLogin}>
//           <h2>Connexion</h2>
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
//           <button type="submit">Se connecter</button>
//         </form>
//       )}

//       {view === 'register' && (
//         <form onSubmit={handleRegister}>
//           <h2>Inscription</h2>
//           <input type="text" name="name" placeholder="Nom" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
//           <button type="submit">S’inscrire</button>
//         </form>
//       )}

//       {view === 'reset' && (
//         <form onSubmit={handleReset}>
//           <h2>Réinitialiser le mot de passe</h2>
//           <input type="email" name="email" placeholder="Votre email" onChange={handleChange} required />
//           <button type="submit">Envoyer</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [view, setView] = useState('login'); // login | register | reset
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      alert('Connexion réussie');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error('Erreur de connexion:', err);
      alert(err.response?.data?.message || 'Erreur de connexion');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert('Inscription réussie');
      setView('login');
    } catch (err) {
      console.error('Erreur d’inscription:', err);
      alert(err.response?.data?.message || 'Erreur d’inscription');
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/reset-password', {
        email: formData.email,
      });
      alert('Lien de réinitialisation envoyé');
      setView('login');
    } catch (err) {
      console.error('Erreur de réinitialisation:', err);
      alert(err.response?.data?.message || 'Erreur de réinitialisation');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg shadow-lg">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setView('login')}
            className="text-white hover:text-gray-200 font-semibold"
          >
            Connexion
          </button>
          <button
            onClick={() => setView('register')}
            className="text-white hover:text-gray-200 font-semibold"
          >
            Inscription
          </button>
          <button
            onClick={() => setView('reset')}
            className="text-white hover:text-gray-200 font-semibold"
          >
            Mot de passe oublié
          </button>
        </div>

        {view === 'login' && (
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Connexion</h2>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Se connecter
            </button>
          </form>
        )}

        {view === 'register' && (
          <form onSubmit={handleRegister}>
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Inscription</h2>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              S’inscrire
            </button>
          </form>
        )}

        {view === 'reset' && (
          <form onSubmit={handleReset}>
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Réinitialiser le mot de passe</h2>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
