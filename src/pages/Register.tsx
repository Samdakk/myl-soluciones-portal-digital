
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cedula: "",
    password: "",
    confirmPassword: ""
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
    
    // Validaciones básicas
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Las contraseñas no coinciden",
        description: "Por favor, verifica que ambas contraseñas sean iguales.",
        variant: "destructive",
        duration: 5000
      });
      return;
    }
    
    if (formData.cedula.length < 5) {
      toast({
        title: "Cédula inválida",
        description: "Por favor, ingresa un número de cédula válido.",
        variant: "destructive",
        duration: 5000
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // En una implementación real, aquí conectarías con tu API de registro
      // Por ahora, simulamos un registro exitoso
      setTimeout(() => {
        // Crear el ID como primera letra del nombre + cédula
        const userId = formData.fullName.charAt(0).toLowerCase() + formData.cedula;
        
        localStorage.setItem("myl-user", JSON.stringify({
          id: userId,
          email: formData.email,
          name: formData.fullName,
          cedula: formData.cedula
        }));
        
        toast({
          title: "Registro exitoso",
          description: `Tu cuenta ha sido creada con éxito. Tu ID de usuario es: ${userId}`,
          duration: 5000
        });
        
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast({
        title: "Error de registro",
        description: "Ocurrió un error al intentar registrar tu cuenta. Por favor, intenta nuevamente.",
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
              <h1 className="text-3xl font-bold mb-2">Crear una cuenta</h1>
              <p className="text-gray-400">Regístrate para acceder a todos nuestros servicios</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="bg-muted border-gray-700"
                  />
                </div>
                
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
                  <label htmlFor="cedula" className="block text-sm font-medium mb-2">
                    Número de cédula
                  </label>
                  <Input
                    id="cedula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    placeholder="Ingresa tu cédula"
                    required
                    className="bg-muted border-gray-700"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Tu ID de usuario será la primera letra de tu nombre + tu número de cédula
                  </p>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Contraseña
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="bg-muted border-gray-700"
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirmar contraseña
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="bg-muted border-gray-700"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-myl hover:bg-myl-600 text-black font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? "Registrando..." : "Registrarse"}
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400">¿Ya tienes una cuenta?</span>{" "}
              <Link to="/login" className="text-myl hover:text-myl-600 font-medium">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Register;
