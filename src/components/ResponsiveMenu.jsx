import React from "react";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <>
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] bg-amber-900 p-5 transition-transform duration-300 z-50 flex flex-col justify-between ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu items */}
        <nav className="mt-12 flex flex-col gap-7 text-lg font-semibold text-white">
          <a href="/" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#menu" onClick={() => setOpen(false)}>
            Menu
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#testimonial" onClick={() => setOpen(false)}>
            Testimonial
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            <button className="bg-amber-800 px-4 py-2 rounded-md hover:bg-amber-700">
              Contact
            </button>
          </a>
        </nav>

        {/* Footer message inside sidebar */}
        <p className="text-white text-sm text-center">
          Made with ❤️ by Astha
        </p>
      </div>
    </>
  );
};

export default ResponsiveMenu;
