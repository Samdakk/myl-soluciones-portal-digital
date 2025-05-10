import { MainLayout } from "@/components/layouts/MainLayout";
import { Wrench, Computer, HardDrive, Settings, Brush } from "lucide-react";

const Servicios = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-gray-300">
              Ofrecemos soluciones técnicas profesionales para tus consolas, computadoras y electrodomésticos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            {/* Repair Service */}
            <div id="reparacion" className="scroll-mt-20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <span className="text-myl text-sm font-medium mb-2 inline-block">SERVICIO TÉCNICO</span>
                  <h2 className="text-3xl font-bold mb-4">Reparación</h2>
                  <p className="text-gray-300 mb-6">
                    Nuestro servicio de reparación está diseñado para solucionar cualquier problema que presenten tus dispositivos. Realizamos un diagnóstico completo para identificar la causa del problema y ofrecerte la mejor solución.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Reparación de hardware y software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Reemplazo de componentes dañados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Recuperación de datos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Solución de problemas de arranque</span>
                    </li>
                  </ul>
                  
                  <div className="glass p-4 rounded-lg border border-myl/30">
                    <h4 className="text-sm font-semibold text-myl mb-2">COMPATIBILIDAD</h4>
                    <p className="text-gray-400 text-sm">
                      Reparamos consolas PlayStation, Xbox, Nintendo, computadoras de escritorio, laptops y electrodomésticos varios.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 glass rounded-lg overflow-hidden border border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                    alt="Servicio de reparación"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Optimization Service */}
            <div id="optimizacion" className="scroll-mt-20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800" 
                    alt="Servicio de optimización"
                    className="w-full h-64 md:h-80 object-cover rounded-lg glass border border-gray-800"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-myl text-sm font-medium mb-2 inline-block">RENDIMIENTO</span>
                  <h2 className="text-3xl font-bold mb-4">Optimización</h2>
                  <p className="text-gray-300 mb-6">
                    Mejoramos el rendimiento de tus dispositivos para que funcionen a su máxima capacidad. Eliminamos programas innecesarios, actualizamos el sistema y optimizamos la configuración.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Actualización de sistemas operativos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Eliminación de malware y virus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Mejora de rendimiento en juegos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Actualización de componentes</span>
                    </li>
                  </ul>
                  
                  <div className="glass p-4 rounded-lg border border-myl/30">
                    <h4 className="text-sm font-semibold text-myl mb-2">BENEFICIOS</h4>
                    <p className="text-gray-400 text-sm">
                      Mayor velocidad, mejor rendimiento en juegos, mayor espacio de almacenamiento y experiencia de usuario mejorada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Maintenance Service */}
            <div id="mantenimiento" className="scroll-mt-20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <span className="text-myl text-sm font-medium mb-2 inline-block">PREVENCIÓN</span>
                  <h2 className="text-3xl font-bold mb-4">Mantenimiento</h2>
                  <p className="text-gray-300 mb-6">
                    Un mantenimiento regular es esencial para prevenir problemas futuros y extender la vida útil de tus dispositivos. Realizamos revisiones periódicas para asegurar su correcto funcionamiento.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Mantenimiento preventivo programado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Detección temprana de problemas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Respaldos de información</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Revisión de conexiones y componentes</span>
                    </li>
                  </ul>
                  
                  <div className="glass p-4 rounded-lg border border-myl/30">
                    <h4 className="text-sm font-semibold text-myl mb-2">PLANES</h4>
                    <p className="text-gray-400 text-sm">
                      Ofrecemos planes de mantenimiento mensual, trimestral y anual adaptados a tus necesidades.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800" 
                    alt="Servicio de mantenimiento"
                    className="w-full h-64 md:h-80 object-cover rounded-lg glass border border-gray-800"
                  />
                </div>
              </div>
            </div>
            
            {/* Cleaning Service */}
            <div id="limpieza" className="scroll-mt-20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800" 
                    alt="Servicio de limpieza"
                    className="w-full h-64 md:h-80 object-cover rounded-lg glass border border-gray-800"
                  />
                </div>
                <div className="md:w-1/2">
                  <span className="text-myl text-sm font-medium mb-2 inline-block">RENDIMIENTO</span>
                  <h2 className="text-3xl font-bold mb-4">Limpieza</h2>
                  <p className="text-gray-300 mb-6">
                    La acumulación de polvo y suciedad puede afectar seriamente el rendimiento de tus dispositivos. Realizamos una limpieza profunda para eliminar cualquier residuo y mejorar la refrigeración.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Limpieza interna de componentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Reemplazo de pasta térmica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Limpieza de sistemas de refrigeración</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Limpieza de periféricos</span>
                    </li>
                  </ul>
                  
                  <div className="glass p-4 rounded-lg border border-myl/30">
                    <h4 className="text-sm font-semibold text-myl mb-2">RESULTADOS</h4>
                    <p className="text-gray-400 text-sm">
                      Mejor refrigeración, menor ruido, mayor durabilidad de componentes y prevención de sobrecalentamiento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Aesthetic Repair Service - NEW */}
            <div id="estetica" className="scroll-mt-20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <span className="text-myl text-sm font-medium mb-2 inline-block">APARIENCIA</span>
                  <h2 className="text-3xl font-bold mb-4">Reparación de Estética</h2>
                  <p className="text-gray-300 mb-6">
                    Restauramos la apariencia de tus dispositivos para que luzcan como nuevos. Reparamos daños estéticos, rayones, decoloraciones y problemas cosméticos que afectan la apariencia de tus consolas, computadoras y electrodomésticos.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Reparación de carcasas y cubiertas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Eliminación de rayones superficiales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Restauración de color y brillo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-myl mt-1">✓</span>
                      <span>Reemplazo de partes estéticas dañadas</span>
                    </li>
                  </ul>
                  
                  <div className="glass p-4 rounded-lg border border-myl/30">
                    <h4 className="text-sm font-semibold text-myl mb-2">TIPOS DE REPARACIONES</h4>
                    <p className="text-gray-400 text-sm">
                      Ofrecemos reparaciones estéticas para todo tipo de dispositivos, desde carcasas de consolas hasta gabinetes de PC y electrónicos varios.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800" 
                    alt="Servicio de reparación estética"
                    className="w-full h-64 md:h-80 object-cover rounded-lg glass border border-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Servicios;
