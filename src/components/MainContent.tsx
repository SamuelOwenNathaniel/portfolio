import ProjectSection from '@/components/ProjectSection';

const MainContent = () => {
  // Project data for different sections
  const roboticsProjects = [
    {
      title: 'Autonomous Navigation Robot',
      description: 'A Raspberry Pi-powered robot capable of autonomous navigation using LIDAR sensors and ROS. Features SLAM mapping, path planning, and obstacle avoidance.',
      tech: ['Python', 'ROS', 'Raspberry Pi', 'LIDAR', 'OpenCV'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Robot Arm Kinematics Simulator',
      description: 'Software simulation of 6-DOF robot arm with forward and inverse kinematics. Includes collision detection and trajectory planning algorithms.',
      tech: ['Python', 'NumPy', 'Matplotlib', 'PyBullet'],
      github: '#',
      demo: '#',
    },
  ];

  const aiProjects = [
    {
      title: 'Real-time Object Detection System',
      description: 'Computer vision system for real-time object detection and tracking using YOLO and OpenCV. Optimized for embedded systems and edge computing.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'YOLO', 'CUDA'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Facial Recognition Security System',
      description: 'AI-powered security system with facial recognition capabilities. Features anti-spoofing measures and real-time alerting.',
      tech: ['Python', 'Deep Learning', 'OpenCV', 'Face Recognition', 'SQLite'],
      github: '#',
      demo: '#',
    },
  ];

  const photographyProjects = [
    {
      title: 'Time-lapse Photography System',
      description: 'Automated time-lapse photography setup with weather resistance and remote monitoring. Captures construction projects and natural phenomena.',
      tech: ['Arduino', 'Camera Control', 'Weather Sensors', 'Solar Power'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Drone Cinematography',
      description: 'Professional aerial cinematography for events and landscapes. Custom gimbal stabilization and automated flight patterns.',
      tech: ['Drone Programming', 'Gimbal Control', 'Video Processing', 'Flight Planning'],
      github: '#',
      demo: '#',
    },
  ];

  const cadProjects = [
    {
      title: 'Custom Drone Frame Design',
      description: 'Lightweight carbon fiber drone frame designed for racing applications. Optimized for aerodynamics and crash resistance.',
      tech: ['SolidWorks', 'CFD Analysis', '3D Printing', 'Carbon Fiber'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Robotic Gripper Mechanism',
      description: 'Multi-finger adaptive gripper for robot manipulation tasks. Features force feedback and object shape adaptation.',
      tech: ['CAD Design', 'Mechanism Design', 'Force Analysis', '3D Printing'],
      github: '#',
      demo: '#',
    },
  ];

  const musicProjects = [
    {
      title: 'MIDI Controller Interface',
      description: 'Custom MIDI controller built with Arduino for music production. Features customizable controls and real-time parameter mapping.',
      tech: ['Arduino', 'MIDI Protocol', 'Electronics', 'Music Production'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Algorithmic Composition',
      description: 'AI-powered music composition system that generates melodies based on input parameters and musical theory rules.',
      tech: ['Python', 'Music Theory', 'AI/ML', 'Audio Processing'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="ml-80 min-h-screen bg-background">
      {/* About Me Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">About Me</h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Hello! I'm Samuel, currently working as an Automation Engineer at System Control, Guyana Power and Light Inc.
              I have a strong passion for intelligent systems and enjoy working at the intersection of hardware and software. 
              My interests stem from a deep-rooted affinity for robotics, particularly in areas involving motion planning, control systems, and autonomous technologies. I thrive in environments where I can apply my skills to optimize automation processes, develop robust control logic, and contribute to the advancement of smart infrastructure.
            </p>
            <p>
            I hold a Bachelor of Science in Electrical Engineering from the University of Guyana and am currently pursuing a Master’s degree in Artificial Intelligence at the same institution.
            Have a look at some of my projects below!
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12">Projects</h2>
        
        <ProjectSection
          id="robotics"
          title="Robotics & Automation"
          subtitle="Intelligent Systems & Control"
          description="Exploring the intersection of mechanical engineering and software development through robotics projects that showcase autonomous systems, sensor integration, and intelligent control algorithms."
          projects={roboticsProjects}
          gradientColors="from-primary to-blue-400"

        />

        <button 

        style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease'
          }}

        >Increment</button>

        <ProjectSection
          id="ai"
          title="AI Image Recognition"
          subtitle="Computer Vision & Machine Learning"
          description="Developing cutting-edge computer vision solutions that enable machines to see and understand the world around them, from object detection to facial recognition systems."
          projects={aiProjects}
          gradientColors="from-accent to-purple-400"
        />

        <ProjectSection
          id="photography"
          title="Photography & Cinematography"
          subtitle="Visual Storytelling & Creative Technology"
          description="Combining technical expertise with artistic vision to create compelling visual content, from automated photography systems to professional cinematography."
          projects={photographyProjects}
          gradientColors="from-green-400 to-emerald-500"
        />

        <ProjectSection
          id="cad"
          title="3D Design & Manufacturing"
          subtitle="Digital Fabrication & Prototyping"
          description="Leveraging CAD software and 3D printing technology to bring innovative designs from concept to reality, with a focus on functional and optimized engineering solutions."
          projects={cadProjects}
          gradientColors="from-orange-400 to-red-500"
        />

        <ProjectSection
          id="music"
          title="Musical Engineering"
          subtitle="Audio Technology & Creative Expression"
          description="Merging engineering principles with musical creativity through custom instruments, audio processing systems, and algorithmic composition tools."
          projects={musicProjects}
          gradientColors="from-pink-400 to-rose-500"
        />
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-border bg-background/50">
        <div className="max-w-4xl">
          <p className="text-muted-foreground text-center">
            Built with passion for engineering and innovation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;