import React from 'react';

const Contact = () => {
  return (
    <div className='bg-slate-400'>
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Contactez-nous</h2>
      <p className="text-center text-gray-600 mb-8">Vous avez une question ? N'hésitez pas à nous contacter.</p>

      <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Nom :</label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Message :</label>
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
