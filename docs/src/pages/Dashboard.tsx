
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Computer, Wrench, Timer, Check, AlertCircle } from "lucide-react";
import { AuthContext } from "@/App";
import { useToast } from "@/components/ui/use-toast";

interface ServiceRequest {
  id: string;
  type: string;
  device: string;
  status: "pending" | "in_progress" | "completed";
  createdAt: string;
  estimatedCompletionDate?: string;
}

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function DashboardCard({ icon, title, value }: DashboardCardProps) {
  return (
    <Card className="glass border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-2 rounded-full glass border border-myl/30 text-myl">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "pending":
      return (
        <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/30 text-yellow-300">
          Pendiente
        </span>
      );
    case "in_progress":
      return (
        <span className="px-2 py-1 rounded-full text-xs bg-blue-500/30 text-blue-300">
          En progreso
        </span>
      );
    case "completed":
      return (
        <span className="px-2 py-1 rounded-full text-xs bg-green-500/30 text-green-300">
          Completado
        </span>
      );
    default:
      return (
        <span className="px-2 py-1 rounded-full text-xs bg-gray-500/30 text-gray-300">
          Desconocido
        </span>
      );
  }
}

function ServiceRequestCard({ service }: { service: ServiceRequest }) {
  return (
    <div className="glass p-4 rounded-lg border border-gray-800">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <StatusBadge status={service.status} />
            <h3 className="font-medium">{service.type}</h3>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Dispositivo: {service.device}
          </p>
          <p className="text-gray-400 text-sm">
            ID de servicio: {service.id}
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          {service.status === "in_progress" && (
            <div className="text-xs bg-myl/10 text-myl px-3 py-1 rounded-full flex items-center">
              <Timer size={14} className="mr-1" />
              En progreso
            </div>
          )}
          <Button size="sm" variant="outline" className="border-myl/50">
            Ver detalles
          </Button>
        </div>
      </div>
    </div>
  );
}

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useContext(AuthContext);
  const { toast } = useToast();
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
  
  useEffect(() => {
    // Verificar si el usuario está autenticado
    if (!isAuthenticated) {
      toast({
        title: "Acceso denegado",
        description: "Debes iniciar sesión para acceder al dashboard",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }
    
    // Simular obtención de solicitudes de servicio
    const mockServiceRequests: ServiceRequest[] = [
      {
        id: "SRV001",
        type: "Reparación",
        device: "PlayStation 5",
        status: "in_progress",
        createdAt: "2025-05-07T10:30:00",
        estimatedCompletionDate: "2025-05-11T18:00:00"
      },
      {
        id: "SRV002",
        type: "Mantenimiento",
        device: "PC Gaming",
        status: "pending",
        createdAt: "2025-05-08T14:15:00"
      },
      {
        id: "SRV003",
        type: "Limpieza",
        device: "Xbox Series X",
        status: "completed",
        createdAt: "2025-04-25T09:45:00",
        estimatedCompletionDate: "2025-04-28T12:00:00"
      }
    ];
    
    setServiceRequests(mockServiceRequests);
  }, [navigate, isAuthenticated, toast]);
  
  if (!isAuthenticated) {
    return null; // El usuario será redirigido a login
  }
  
  // Obtener el servicio en progreso (si existe)
  const inProgressService = serviceRequests.find(service => service.status === "in_progress");
  
  // Determinar qué contenido mostrar según la ruta
  const renderDashboardContent = () => {
    const path = location.pathname;
    
    if (path === "/dashboard/servicios") {
      return (
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-800">Mis Servicios</h1>
          <p className="text-gray-400 mb-6">Historial completo de tus servicios solicitados.</p>
          
          {/* Lista de servicios */}
          <div className="space-y-4">
            {serviceRequests.length > 0 ? (
              serviceRequests.map(service => (
                <ServiceRequestCard key={service.id} service={service} />
              ))
            ) : (
              <div className="glass p-6 rounded-lg border border-gray-800 text-center">
                <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium mb-2">No hay servicios solicitados</h3>
                <p className="text-gray-400 mb-4">
                  Aún no has solicitado ningún servicio técnico.
                </p>
                <Button className="bg-myl hover:bg-myl-600 text-black">
                  Solicitar nuevo servicio
                </Button>
              </div>
            )}
          </div>
        </div>
      );
    } else if (path === "/dashboard/perfil") {
      return (
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-800">Mi Perfil</h1>
          <p className="text-gray-400 mb-6">Administra tu información personal y preferencias.</p>
          
          <div className="glass p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
            <p className="text-gray-300 mb-2">Email: {user?.email}</p>
            <p className="text-gray-300 mb-4">ID de Usuario: {user?.id}</p>
            <Button className="bg-myl text-black hover:bg-myl-600">Editar Perfil</Button>
          </div>
        </div>
      );
    } else if (path === "/dashboard/ajustes") {
      return (
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-800">Ajustes</h1>
          <p className="text-gray-400 mb-6">Configura las preferencias de tu cuenta.</p>
          
          <div className="glass p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Preferencias de Notificaciones</h2>
            <p className="text-gray-300 mb-4">Configura cómo quieres recibir notificaciones sobre tus servicios.</p>
            <Button className="bg-myl text-black hover:bg-myl-600">Guardar Preferencias</Button>
          </div>
        </div>
      );
    }
    
    // Dashboard principal (default)
    return (
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-800">Bienvenido{user?.name ? `, ${user.name}` : ""}</h1>
          <p className="text-gray-400">Aquí puedes ver el estado de tus servicios y solicitar nuevos.</p>
        </div>
        
        {/* Countdown Timer (si hay un servicio en progreso) */}
        {inProgressService && inProgressService.estimatedCompletionDate && (
          <div className="mb-8">
            <CountdownTimer targetDate={new Date(inProgressService.estimatedCompletionDate)} />
          </div>
        )}
        
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard
            icon={<Computer size={28} />}
            title="Total de Servicios"
            value={serviceRequests.length.toString()}
          />
          <DashboardCard
            icon={<Wrench size={28} />}
            title="En Progreso"
            value={serviceRequests.filter(s => s.status === "in_progress").length.toString()}
          />
          <DashboardCard
            icon={<Check size={28} />}
            title="Completados"
            value={serviceRequests.filter(s => s.status === "completed").length.toString()}
          />
        </div>
        
        {/* Recent Service Requests */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Solicitudes Recientes</h2>
          <div className="space-y-4">
            {serviceRequests.length > 0 ? (
              serviceRequests.map(service => (
                <ServiceRequestCard key={service.id} service={service} />
              ))
            ) : (
              <div className="glass p-6 rounded-lg border border-gray-800 text-center">
                <AlertCircle className="mx-auto mb-2" size={24} />
                <p>No tienes solicitudes de servicio activas.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-myl text-black hover:bg-myl-600">
            Solicitar Nuevo Servicio
          </Button>
        </div>
      </div>
    );
  };
  
  return (
    <DashboardLayout>
      {renderDashboardContent()}
    </DashboardLayout>
  );
};

export default Dashboard;
