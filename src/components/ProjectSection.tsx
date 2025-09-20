import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import project images
import robotDog from '@/assets/robot-dog.jpg';
import robotSim from '@/assets/robot-sim.jpg';
import aiDetection from '@/assets/ai-detection.jpg';
import faceRecognition from '@/assets/face-recognition.jpg';
import timelapseSetup from '@/assets/timelapse-setup.jpg';
import droneCinema from '@/assets/drone-cinema.jpg';
import droneCad from '@/assets/drone-cad.jpg';
import gripper from '@/assets/gripper.jpg';
import midiController from '@/assets/midi-controller.jpg';
import aiMusic from '@/assets/ai-music.jpg';

// Image mapping for projects
const projectImages: { [key: string]: string } = {
  'Autonomous Navigation Robot': robotDog,
  'Robot Arm Kinematics Simulator': robotSim,
  'Real-time Object Detection System': aiDetection,
  'Facial Recognition Security System': faceRecognition,
  'Time-lapse Photography System': timelapseSetup,
  'Drone Cinematography': droneCinema,
  'Custom Drone Frame Design': droneCad,
  'Robotic Gripper Mechanism': gripper,
  'MIDI Controller Interface': midiController,
  'Algorithmic Composition': aiMusic,
};

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    image?: string;
    github?: string;
    demo?: string;
  }>;
  gradientColors: string;
}

const ProjectSection = ({ id, title, subtitle, description, projects, gradientColors }: ProjectSectionProps) => {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
              {title}
            </span>
          </h2>
          <h3 className="text-2xl font-semibold text-foreground mb-4">{subtitle}</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectImage = projectImages[project.title];
            return (
              <div
                key={project.title}
                className="card-tech group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                {projectImage && (
                  <div className="w-full h-48 rounded-lg mb-6 overflow-hidden border border-border">
                    <img 
                      src={projectImage} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="group/btn">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="glow" size="sm" className="group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;