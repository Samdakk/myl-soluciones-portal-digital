
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass p-10 rounded-lg border border-gray-800 text-center max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-myl text-glow">404</h1>
        <p className="text-2xl mb-6">Página no encontrada</p>
        <p className="text-gray-400 mb-8">
          La página que estás buscando no existe o ha sido movida a otra ubicación.
        </p>
        <Link to="/">
          <Button className="bg-myl text-black hover:bg-myl-600">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
