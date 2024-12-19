import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            ЗооМагазин
          </Link>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              to="/products"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Товары
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Контакты
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Корзина
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
