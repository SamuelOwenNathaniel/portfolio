import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/me.jpg';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-card border-r border-border z-10 overflow-y-auto">
      <div className="p-8 space-y-6">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
            <img 
              src={profilePhoto} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Samuel O.N. Singh</h1>
          <p className="text-lg text-muted-foreground">Automation Engineer</p>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary mb-2">MSc Artificial Intelligence</h3>
            <p className="text-sm text-muted-foreground italic">University of Guyana S.A</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary mb-2">BSc Electrical Engineering</h3>
            <p className="text-sm text-muted-foreground italic">University of Guyana S.A</p>
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center">
          <Button variant="outline" className="w-full">
            Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© Alex Chen | Built with Lovable</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;