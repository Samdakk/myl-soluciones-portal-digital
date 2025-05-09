
import { MainLayout } from "@/components/layouts/MainLayout";
import { TeamMemberCard } from "@/components/TeamMemberCard";

const Equipo = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo</h1>
            <p className="text-xl text-gray-300 mb-8">
              Conoce a los profesionales detrás de MyL Soluciones que hacen posible brindar el mejor servicio técnico.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10">
            <TeamMemberCard
              name="Miguel Rodríguez"
              role="Técnico Senior / Co-fundador"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
              description="Con más de 10 años de experiencia en reparación de equipos electrónicos, Miguel se especializa en soluciones avanzadas para consolas y computadoras. Su conocimiento técnico y pasión por la tecnología son la base de MyL Soluciones."
              expertise={[
                "Reparación de consolas",
                "Optimización de PC Gaming",
                "Recuperación de datos",
                "Soluciones de hardware"
              ]}
            />
            
            <TeamMemberCard
              name="Laura Méndez"
              role="Técnica Especialista / Co-fundadora"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
              description="Laura es especialista en mantenimiento y optimización de sistemas. Con su formación en ingeniería electrónica, aporta un enfoque metódico y preciso a cada servicio, garantizando resultados de calidad para todos nuestros clientes."
              expertise={[
                "Mantenimiento preventivo",
                "Electrodomésticos",
                "Sistemas operativos",
                "Redes y conectividad"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg border border-gray-800 hover:border-myl/30 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-myl">Profesionalismo</h3>
              <p className="text-gray-300">
                Nos comprometemos a ofrecer el más alto nivel de profesionalismo en cada servicio, desde el diagnóstico inicial hasta la solución final.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg border border-gray-800 hover:border-myl/30 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-myl">Transparencia</h3>
              <p className="text-gray-300">
                Creemos en la transparencia total con nuestros clientes, explicando cada proceso y detallando los costos antes de realizar cualquier trabajo.
              </p>
            </div>
            
            <div className="glass p-6 rounded-lg border border-gray-800 hover:border-myl/30 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-myl">Compromiso</h3>
              <p className="text-gray-300">
                Nuestro compromiso es brindarte la mejor solución para tus dispositivos, con resultados duraderos y garantizados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Equipo;
