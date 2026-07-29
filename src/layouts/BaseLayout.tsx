// src/layouts/BaseLayout.tsx
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Drawer from '../components/Drawer';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-lg px-4 py-3 text-base ${isActive ? 'bg-primary-100 font-medium text-primary-700' : 'text-neutral-700 hover:bg-neutral-100'}`;

const BaseLayout = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen items-center bg-primary-200">
      <header className="w-full bg-primary-600 text-white">
        <div className="flex items-center px-2 py-1">
          <button
            type="button"
            aria-label="menu"
            className="mr-2 p-2 rounded-full hover:bg-white/10"
            onClick={() => setNavOpen(true)}
          >
            <MenuIcon />
          </button>
          <span className="text-lg">Mecânica Cabrini</span>
        </div>
      </header>

      <div className="w-full flex-1 overflow-y-auto">
        <main className="mx-auto w-full max-w-3xl px-4 py-4">
          <Outlet /> {/* This is where nested routes will be rendered */}
        </main>
      </div>

      <Drawer open={navOpen} title="Menu" onClose={() => setNavOpen(false)}>
        <nav className="space-y-1" onClick={() => setNavOpen(false)}>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/clientes" className={navLinkClass}>
            Clientes
          </NavLink>
        </nav>
      </Drawer>
    </div>
  );
};

export default BaseLayout;
