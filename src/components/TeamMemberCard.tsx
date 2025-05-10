
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  expertise: string[];
  className?: string;
}

export function TeamMemberCard({ name, role, image, description, expertise, className }: TeamMemberCardProps) {
  return (
    <div className={cn("glass rounded-lg overflow-hidden flex flex-col md:flex-row", className)}>
      <div className="md:w-1/3 h-60 md:h-auto relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-l"></div>
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-1">{name}</h3>
          <p className="text-myl mb-4">{role}</p>
          <p className="text-gray-300 mb-4">{description}</p>
          
          <div>
            <h4 className="font-semibold mb-2 text-sm">Especialidades:</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-muted text-gray-300 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
