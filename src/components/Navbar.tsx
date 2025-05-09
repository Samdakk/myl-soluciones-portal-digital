
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Wrench,
  Users,
  Phone,
  LogIn,
  LayoutDashboard
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass animate-fade-in">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="text-xl font-bold text-myl text-glow">MyL</span>
          <span className="text-lg font-medium">Soluciones</span>
        </Link>

        {/* Mobile menu button */}
        {isMobile && (
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Desktop navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            <NavLinks />
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" size="sm" className="border-myl">
                  <LogIn className="mr-2 h-4 w-4" />
                  Ingresar
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-myl text-black hover:bg-myl-600">
                  Registrarse
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div className="glass absolute top-full left-0 right-0 z-50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <MobileNavLinks onItemClick={closeMenu} />
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/login" onClick={closeMenu}>
                <Button variant="outline" className="w-full border-myl">
                  <LogIn className="mr-2 h-4 w-4" />
                  Ingresar
                </Button>
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <Button className="w-full bg-myl text-black hover:bg-myl-600">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link to="/" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
        <Home size={16} />
        <span>Inicio</span>
      </Link>
      <Link to="/servicios" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
        <Wrench size={16} />
        <span>Servicios</span>
      </Link>
      <Link to="/equipo" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
        <Users size={16} />
        <span>Equipo</span>
      </Link>
      <Link to="/contacto" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
        <Phone size={16} />
        <span>Contacto</span>
      </Link>
      <Link to="/dashboard" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
        <LayoutDashboard size={16} />
        <span>Dashboard</span>
      </Link>
    </>
  );
}

function MobileNavLinks({ onItemClick }: { onItemClick: () => void }) {
  return (
    <>
      <Link to="/" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md" onClick={onItemClick}>
        <Home size={18} />
        <span>Inicio</span>
      </Link>
      <Link to="/servicios" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md" onClick={onItemClick}>
        <Wrench size={18} />
        <span>Servicios</span>
      </Link>
      <Link to="/equipo" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md" onClick={onItemClick}>
        <Users size={18} />
        <span>Equipo</span>
      </Link>
      <Link to="/contacto" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md" onClick={onItemClick}>
        <Phone size={18} />
        <span>Contacto</span>
      </Link>
      <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md" onClick={onItemClick}>
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </Link>
    </>
  );
}
