
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/60 mt-12 sm:mt-20 pt-8 sm:pt-10 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-myl text-glow">MyL</span>
                <span className="text-xl font-medium">Soluciones</span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400">
              Servicio técnico profesional para consolas, computadoras y electrodomésticos.
              Reparación, optimización, mantenimiento y limpieza general.
            </p>
          </div>
          
          <div className="sm:text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="text-gray-400 hover:text-white transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 justify-start sm:justify-center md:justify-start">
                <Phone size={18} className="text-myl" />
                <span className="text-gray-400">+123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 justify-start sm:justify-center md:justify-start">
                <Mail size={18} className="text-myl" />
                <span className="text-gray-400">info@mylsoluciones.com</span>
              </li>
              <li className="flex items-center gap-3 justify-start sm:justify-center md:justify-start">
                <MessageCircle size={18} className="text-myl" />
                <span className="text-gray-400">Chatea con nosotros</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MyL Soluciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
