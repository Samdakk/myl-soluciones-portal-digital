
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { 
  LayoutDashboard, 
  Clock, 
  UserCog, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  LogOut
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-grow pt-16">
        {/* Sidebar */}
        <aside 
          className={cn(
            "h-[calc(100vh-4rem)] fixed top-16 left-0 bottom-0 transition-all duration-300 glass border-r border-gray-800 flex flex-col z-40",
            sidebarCollapsed ? "w-16" : "w-64",
            isMobile && (sidebarCollapsed ? "-translate-x-full" : "translate-x-0")
          )}
        >
          <div className="flex-grow overflow-y-auto p-3">
            <nav className="space-y-1">
              <SidebarLink 
                to="/dashboard" 
                icon={<LayoutDashboard size={20} />} 
                label="Dashboard" 
                collapsed={sidebarCollapsed} 
              />
              <SidebarLink 
                to="/dashboard/servicios" 
                icon={<Clock size={20} />} 
                label="Mis Servicios" 
                collapsed={sidebarCollapsed} 
              />
              <SidebarLink 
                to="/dashboard/perfil" 
                icon={<UserCog size={20} />} 
                label="Mi Perfil" 
                collapsed={sidebarCollapsed} 
              />
              <SidebarLink 
                to="/dashboard/ajustes" 
                icon={<Settings size={20} />} 
                label="Ajustes" 
                collapsed={sidebarCollapsed} 
              />
            </nav>
          </div>
          
          <div className="p-3 border-t border-gray-800">
            <Link to="/logout">
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20",
                  sidebarCollapsed && "justify-center"
                )}
              >
                <LogOut size={20} />
                {!sidebarCollapsed && <span className="ml-2">Cerrar Sesión</span>}
              </Button>
            </Link>
          </div>

          {/* Toggle button */}
          {!isMobile && (
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-muted border border-gray-700 flex items-center justify-center text-myl hover:border-myl/50"
            >
              {sidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>
          )}
        </aside>
        
        {/* Mobile overlay */}
        {isMobile && !sidebarCollapsed && (
          <div 
            className="fixed inset-0 bg-black/50 z-30" 
            onClick={() => setSidebarCollapsed(true)}
          />
        )}
        
        {/* Mobile toggle button */}
        {isMobile && (
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={cn(
              "fixed bottom-4 left-4 z-50 w-10 h-10 rounded-full glass border border-gray-700 flex items-center justify-center text-myl hover:border-myl/50",
              !sidebarCollapsed && "left-[17rem]"
            )}
          >
            {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        )}
        
        {/* Main content */}
        <div 
          className={cn(
            "flex-grow transition-all duration-300 pt-6 pb-12",
            !isMobile && (sidebarCollapsed ? "ml-16" : "ml-64")
          )}
        >
          <div className="container mx-auto px-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  collapsed: boolean;
}

function SidebarLink({ to, icon, label, collapsed }: SidebarLinkProps) {
  return (
    <Link 
      to={to}
      className={cn(
        "flex items-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-muted transition-colors",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <span className="text-gray-400">{icon}</span>
      {!collapsed && <span className="ml-3">{label}</span>}
    </Link>
  );
}
