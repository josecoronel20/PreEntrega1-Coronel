import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarTop">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              fill="#f78c8c"
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm.04 3.858c1.32.019 2.634.335 3.78.989c.549.31.957.642 1.238.895a6.912 6.912 0 0 0-2.25 3.04c-.06.165-.123.354-.183.546a6.856 6.856 0 0 0-.252 1.605c-.003.162.002.374.003.578c.012.242.05.519.08.789a7.013 7.013 0 0 0 1.753 3.586a6.889 6.889 0 0 0 1.87 1.42a7.792 7.792 0 0 1-2.629 2.166a7.717 7.717 0 0 1-3.846.808a9.16 9.16 0 0 1-.22-.013a7.695 7.695 0 0 1-1.504-.247a8.201 8.201 0 0 1-2.83-1.354a7.056 7.056 0 0 1-1.894-2.1c-.22-.38-1.49-2.644-.769-5.452A7.261 7.261 0 0 1 5.93 8.18a5.513 5.513 0 0 0-2.105 1.082C4.12 8.573 5.306 6 8.217 4.66a8.944 8.944 0 0 1 3.823-.8zm5.702 2.508c.202.126.464.309.736.572c.108.103.478.468.82 1.054c.413.703.549 1.327.62 1.65a5.52 5.52 0 0 1 .013 2.302a7.133 7.133 0 0 0-2.044-1.688a7.243 7.243 0 0 0-1.551.3a6.834 6.834 0 0 0-1.05.422a6.058 6.058 0 0 1 .267-1.563a5.923 5.923 0 0 1 .806-1.643a6.255 6.255 0 0 1 1.383-1.406Z"
            />
          </svg>
          <p className="logoTitle">Eagle fit</p>
        </div>

        <div className="search">
          <input
            className="searchBar"
            type="text"
            placeholder="Buscar un producto"
          />
          <button className="searchBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 32 32"
            >
              <path
                fill="#f78c8c"
                d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
              />
            </svg>
          </button>
        </div>

        <div className="icons">
          
            <CartWidget />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 512 512"
          >
            <path
              fill="#f78c8c"
              d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6ZM176 144a80 80 0 0 1 160 0v16H176Z"
            />
          </svg>
        </div>
      </div>

      <ul className="navbarBottom">
        <li>Inicio</li>
        <li>Categorías</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Navbar;
