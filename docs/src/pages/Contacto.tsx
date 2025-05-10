
import { MainLayout } from "@/components/layouts/MainLayout";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const Contacto = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl text-gray-300 mb-8">
              Estamos aquí para ayudarte. Contáctanos para solicitar un servicio o resolver cualquier duda.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
              
              <div className="space-y-6">
                <div className="glass p-5 rounded-lg border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-myl/10 border border-myl/30 text-myl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Teléfono</h3>
                      <p className="text-gray-400">+123 456 7890</p>
                      <p className="text-gray-400">+123 987 6543</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass p-5 rounded-lg border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-myl/10 border border-myl/30 text-myl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Correo electrónico</h3>
                      <p className="text-gray-400">info@mylsoluciones.com</p>
                      <p className="text-gray-400">soporte@mylsoluciones.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass p-5 rounded-lg border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-myl/10 border border-myl/30 text-myl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Ubicación</h3>
                      <p className="text-gray-400">Calle Principal #123</p>
                      <p className="text-gray-400">Ciudad, País</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass p-5 rounded-lg border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-myl/10 border border-myl/30 text-myl">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Horario de atención</h3>
                      <p className="text-gray-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Sábado: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-400">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="glass p-4 rounded-lg border border-gray-800">
            <div className="aspect-video w-full">
              {/* Placeholder for a map - in a real application you would integrate Google Maps or another mapping service */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-gray-400">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contacto;
