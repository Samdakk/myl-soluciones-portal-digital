
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, link, className }: ServiceCardProps) {
  return (
    <div className={cn("glass rounded-lg p-4 sm:p-6 hover:border-myl/30 transition-all group", className)}>
      <div className="mb-4 text-myl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full glass border border-myl/50 group-hover:animate-pulse-glow">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">{description}</p>
      <Link to={link}>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto text-sm sm:text-base border-myl/50 hover:border-myl hover:bg-myl/10"
        >
          Más información
        </Button>
      </Link>
    </div>
  );
}
