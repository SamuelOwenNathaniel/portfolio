import { Cpu, Eye, Camera, Printer, Music, Brain, Code, Zap } from 'lucide-react';

const SkillsOverview = () => {
  const skills = [
    {
      icon: Cpu,
      title: 'Robotics & Automation',
      description: 'Raspberry Pi projects, robot kinematics, and software simulation',
      gradient: 'from-primary to-blue-400',
    },
    {
      icon: Eye,
      title: 'AI Image Recognition',
      description: 'Computer vision, machine learning, and neural networks',
      gradient: 'from-accent to-purple-400',
    },
    {
      icon: Camera,
      title: 'Photography & Film',
      description: 'Visual storytelling through photography and cinematography',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Printer,
      title: '3D Design & Printing',
      description: 'CAD modeling, prototyping, and additive manufacturing',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: Music,
      title: 'Musical Instruments',
      description: 'Creative expression through various musical instruments',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Analytical thinking and innovative engineering solutions',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development and embedded programming',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Electronics Design',
      description: 'Circuit design, PCB layout, and signal processing',
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse skill set spanning hardware and software engineering, 
            creative arts, and innovative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="skill-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 pointer-events-none transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;