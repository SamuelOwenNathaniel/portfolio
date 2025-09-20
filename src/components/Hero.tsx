import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 circuit-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Robotics
              </span>
              <br />
              <span className="text-foreground">Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Passionate about building intelligent systems that bridge the gap between 
              <span className="text-primary font-semibold"> hardware and software</span>.
              Specializing in robotics, AI vision, and innovative engineering solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="tech" 
              size="lg"
              onClick={scrollToSkills}
              className="group"
            >
              Explore My Work
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-3">
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
          </div>

          {/* Floating tech keywords */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {['Python', 'ROS', 'CAD Design', 'Computer Vision', 'Arduino', 'Machine Learning', '3D Printing', 'Signal Processing'].map((tech, index) => (
              <div 
                key={tech}
                className="px-3 py-2 bg-card/50 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-primary font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;