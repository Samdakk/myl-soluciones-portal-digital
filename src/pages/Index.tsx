
import { MainLayout } from "@/components/layouts/MainLayout";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HardDrive, Computer, Wrench, Settings, Brush } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-cover bg-center" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Soluciones técnicas <span className="text-myl text-glow">profesionales</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Servicio especializado en reparación, optimización y mantenimiento de consolas, computadoras y electrodomésticos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/servicios">
                <Button className="bg-myl text-black hover:bg-myl-600 px-6 py-6 text-lg">
                  Nuestros servicios
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="outline" className="border-white/20 hover:border-white px-6 py-6 text-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-gray-400">
              En MyL Soluciones ofrecemos una amplia gama de servicios técnicos para tus dispositivos electrónicos y electrodomésticos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <ServiceCard
              title="Reparación"
              description="Solucionamos problemas y averías de tus dispositivos con diagnósticos precisos."
              icon={<Wrench size={24} />}
              link="/servicios#reparacion"
            />
            <ServiceCard
              title="Optimización"
              description="Mejoramos el rendimiento de tus equipos para que funcionen a su máxima capacidad."
              icon={<Settings size={24} />}
              link="/servicios#optimizacion"
            />
            <ServiceCard
              title="Mantenimiento"
              description="Cuidamos tus dispositivos para prevenir problemas y extender su vida útil."
              icon={<Computer size={24} />}
              link="/servicios#mantenimiento"
            />
            <ServiceCard
              title="Limpieza"
              description="Eliminamos polvo y suciedad para evitar sobrecalentamientos y fallas."
              icon={<HardDrive size={24} />}
              link="/servicios#limpieza"
            />
            <ServiceCard
              title="Estética"
              description="Restauramos la apariencia de tus dispositivos para que luzcan como nuevos."
              icon={<Brush size={24} />}
              link="/servicios#estetica"
              className="lg:col-span-2 xl:col-span-1"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/servicios">
              <Button variant="outline" className="border-myl/50 hover:border-myl hover:bg-myl/10">
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-400">
              Experiencia, profesionalismo y compromiso con la satisfacción de nuestros clientes nos distinguen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg border border-gray-800 hover:border-myl/30 transition-all">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-myl border border-myl/50 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Experiencia</h3>
              <p className="text-gray-400">
                Años de experiencia en el sector nos avalan para ofrecerte el mejor servicio técnico.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg border border-gray-800 hover:border-myl/30 transition-all">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-myl border border-myl/50 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Garantía</h3>
              <p className="text-gray-400">
                Todos nuestros servicios cuentan con garantía para tu tranquilidad y satisfacción.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg border border-gray-800 hover:border-myl/30 transition-all">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-myl border border-myl/50 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Soporte</h3>
              <p className="text-gray-400">
                Asistencia y seguimiento continuo para asegurar que tus dispositivos funcionen perfectamente.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass p-8 md:p-12 rounded-lg border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">¿Necesitas ayuda con tus dispositivos?</h2>
                <p className="text-gray-300">
                  Contáctanos hoy mismo para obtener un diagnóstico profesional.
                </p>
              </div>
              <div className="flex gap-4">
                <Link to="/contacto">
                  <Button className="bg-myl text-black hover:bg-myl-600 px-6">
                    Contactar
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button variant="outline" className="border-white/20 hover:border-white">
                    Ver servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
