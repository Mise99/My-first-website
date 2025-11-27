
import React, { useState } from "react";
import { Link } from "react-scroll";
import avocadoImg from "./assets/avocado.jpg";
import eggsImg from "./assets/eggs.avif";
import feedImg from "./assets/yeast.jpg";
import farmHeroImg from "./assets/farm.jpg";

// SVG Logo Component
function Logo({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby="astriseLogo"
      role="img"
    >
      <title id="astriseLogo">Astrise logo</title>
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g)" />
      <path
        d="M28 62c6-10 22-18 36-18"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M48 28c4 6 10 14 8 22"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Header Component
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <h1 className="text-2xl font-bold">Astrise</h1>
            <p className="text-sm text-gray-500">
              Fresh Farm Products Shipped Internationally
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          <Link to="home" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">
            Home
          </Link>
          <Link to="products" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">
            Products
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-green-600 cursor-pointer">
            Contact
          </Link>
        </nav>

        {/* Contact Button Desktop */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hidden md:inline-block bg-gradient-to-r from-green-400 to-cyan-400 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
        >
          Contact Us
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-t border-gray-200 flex flex-col gap-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-green-600 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="hover:text-green-600 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-green-600 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Fresh Farm Products Delivered Internationally
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            High-quality yeast, nutritious animal feed, fresh avocados, and farm-fresh eggs — shipped to Canada, US, EU, UK.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              to="products"
              smooth={true}
              duration={500}
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
            >
              Shop Products
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        <div>
          <img
            src={farmHeroImg}
            alt="Farm"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}


// Products Section
function Products() {
  const productData = [
    {
      name: "Fresh Avocados",
      img: avocadoImg,
      desc: "Premium produce for international markets.",
      price: "$1.50 / piece",
    },
    {
      name: "Farm Eggs",
      img: eggsImg,
      desc: "Organic farm-fresh eggs.",
      price: "$3.00 / dozen",
    },
    {
      name: "Animal Feed",
      img: feedImg,
      desc: "Nutritious feed for livestock.",
      price: "$15.00 / bag",
    },
  ];

  return (
    <section id="products" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {productData.map((product, index) => (
          <div
  key={index}
  className="border rounded-lg p-4 shadow hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
>

          
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.desc}</p>
            <p className="mt-2 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700">
        Email us at{" "}
        <a
          href="mailto:\engineer.wanjira@gmail.com"
          className="text-green-600 underline"
        >
          engineer.wanjira@gmail.com
        </a>{" "}
        or call +254 700407423.
      </p>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Astrise. All rights reserved.
        </p>
        <div className="flex gap-6 text-gray-700">
          <a href="mailto:engineer.wanjra@gmail.com" className="hover:text-green-600">
            engineer.wanjira@gmail.com
          </a>
          <a href="tel:+254700407423" className="hover:text-green-600">
            +254700407423
          </a>
        </div>
      </div>
    </footer>
  );
}

// Back to Top Button
import { animateScroll as scroll } from "react-scroll";

function BackToTop() {
  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 500 })}
      className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
      title="Back to Top"
    >
      ↑
    </button>
  );
}




// Main App
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}


export default App;
