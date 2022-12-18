import Img from "./images/thais2.jpeg";
import Img4 from "./images/img4.jpeg";
import Img5 from "./images/img5.jpeg";
import Img6 from "./images/img6.jpeg";
import Img7 from "./images/img7.jpeg";
import Img8 from "./images/img8.jpeg";
import Img9 from "./images/img9.jpeg";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav
        className="
md:fixed
relative
w-full
flex flex-wrap
items-center
justify-between
py-5
bg-rose-100
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light
"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <a className="text-xl font-bold font-serif text-black md:w-full">
              Love Perfumaria e Cosméticos
            </a>

            {/* Left links  */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto ml-auto ">
              <li className="nav-item px-2 font-serif">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item pr-2 font-serif">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#catalogo"
                >
                  Catalogo
                </a>
              </li>
              <li className="nav-item pr-2 font-serif">
                <a
                  className=" nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="https://www.instagram.com/lovep_erfumaria/"
                >
                  Instagram
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
      </nav>
      {/* Home,Card */}

      <main className="bg-gray-200 h-screen flex">
        <div className=" flex justify-center md:w-auto sm:w-96  sm:m-auto sm:pt-20">
          <div className="flex flex-col md:flex-row  md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto  object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={Img}
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-3xl font-medium mb-2">
                Thaís Mendes
              </h5>
              <p className="text-gray-700 text-base mb-8 pt-4 ">
                Eu sou revendedora de perfumes, cosméticos e maquiagem. Trabalho
                com Eudora, Avon e O Boticário. Tem interesse em produtos dessas
                marcas? Clique no Botão a baixo para negociarmos!
              </p>
              <button
                type="button"
                className="inline-block animate-bounce px-6 py-3.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
              >
                Envie uma mensagem
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Catalogo, carrosel */}

      <section id="catalogo" className="overflow-hidden mt-10 text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Img7}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Img8}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Img9}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Img4}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Img5}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={Img6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer id="footer" className="text-center text-white bg-rose-100 p-10">
        <div className="text-center text-gray-700 p-4">
          © 2021 Copyright:
          <a className="text-gray-800" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>

        <a
          className="text-gray-800"
          href="https://www.instagram.com/loopes__f/"
        >
          Create by: Fabrício Lopes
        </a>
      </footer>
    </div>
  );
};

export default App;
