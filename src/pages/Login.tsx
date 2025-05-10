
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { AuthContext } from "@/App";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // En una implementación real, aquí conectarías con tu API de autenticación
      // Por ahora, simulamos un login exitoso
      setTimeout(() => {
        const userData = {
          id: "user123",
          email: formData.email
        };
        
        // Usar el método login del contexto
        login(userData);
        
        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido a tu cuenta de MyL Soluciones.",
          duration: 5000
        });
        
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast({
        title: "Error de inicio de sesión",
        description: "Ocurrió un error al intentar iniciar sesión. Por favor, intenta nuevamente.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto glass p-8 rounded-lg border border-gray-800">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Iniciar Sesión</h1>
              <p className="text-gray-400">Ingresa a tu cuenta para ver el estado de tus servicios</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    required
                    className="bg-muted border-gray-700"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="bg-muted border-gray-700 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link to="/recuperar-contrasena" className="text-myl hover:text-myl-600">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-myl hover:bg-myl-600 text-black font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400">¿No tienes una cuenta?</span>{" "}
              <Link to="/register" className="text-myl hover:text-myl-600 font-medium">
                Regístrate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Login;
