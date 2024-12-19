import React from "react";

const Contacts = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Контакты
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 border">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-2xl">📍</span>
          <p className="text-gray-700 text-lg">12341, Москва, Россия</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-2xl">📞</span>
          <a
            href="tel:+79991234567"
            className="text-blue-600 text-lg hover:underline"
          >
            +7 (999) 123-4567
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-2xl">✉️</span>
          <a
            href="mailto:info@example.com"
            className="text-blue-600 text-lg hover:underline"
          >
            info@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
