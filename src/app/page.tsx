"use client";

import {
  ChevronDown,
  Mail,
  Phone,
  Linkedin,
  Code,
  User,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const personalInfo = {
  name: "DARSHAKKUMAR KAKANI",
  title: "Frontend Developer",
  email: "darshakkakani111@gmail.com",
  phone: "+91 9601959133",
  linkedin: "https://linkedin.com/in/darshak-kakani-24a685177",
  location: "Ahmedabad, Gujarat",
  initials: "DK",
};

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "Angular", "HTML & CSS"],
    testing: ["Cypress", "Jest", "Storybook Testing"],
    other: ["Polymer", "Git", "Agile"],
  };

  const experiences = [
    {
      company: "Splunk Observability",
      role: "Frontend Developer",
      duration: "2022 - Present",
      technologies: ["React", "TypeScript"],
      achievements: [
        "Contributed to enterprise-level observability tool development",
        "Collaborated with team of 5 to design and implement key features",
        "Enhanced user interface focusing on performance and usability",
        "Participated in code reviews and maintained high code quality standards",
      ],
    },
    {
      company: "Google Chronical UI",
      role: "Frontend Developer",
      duration: "2022",
      technologies: ["Angular", "Polymer"],
      achievements: [
        "Solely responsible for migrating Parser Management module from Polymer to Angular",
        "Designed and developed new UI components with enhanced functionality",
      ],
    },
    {
      company: "Crest Data Systems",
      role: "Software Engineer Intern",
      duration: "Jan 2022 - Jun 2022",
      technologies: ["Python", "Splunk Enterprise"],
      achievements: [
        "Enhanced Splunk Add-on for Unix and Linux network interface data collection",
        "Worked with data ingestion pipelines and Splunk's add-on development framework",
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.initials}
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-blue-200">
              {personalInfo.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              3+ years of experience building responsive and scalable UIs using
              React. Passionate about creating exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection("about")}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Learn More{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate Frontend Developer with over 3 years of
                experience in building responsive and scalable user interfaces.
                I specialize in React and have worked on enterprise-level
                applications at companies like Splunk and Google.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise lies in creating clean, efficient code while
                collaborating with cross-functional teams to deliver exceptional
                user experiences. I&apos;m constantly learning new technologies
                and best practices to stay at the forefront of web development.
              </p>
              <div className="flex items-center gap-4 text-blue-400">
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      G H Patel College of Engineering & Technology
                    </h4>
                    <p className="text-gray-400">Information Technology</p>
                    <p className="text-sm text-blue-300">
                      CGPA: 8.51 | 2018 - 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      {exp.company}
                    </h3>
                    <h4 className="text-xl text-purple-300 mb-2">{exp.role}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <ArrowRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <Code className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Frontend
              </h3>
              <div className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <Award className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Testing
              </h3>
              <div className="space-y-3">
                {skills.testing.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300">
              <User className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-pink-400">Other</h3>
              <div className="space-y-3">
                {skills.other.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-12"></div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:darshakkakani111@gmail.com"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400 break-all">{personalInfo.email}</p>
            </a>

            <a
              href="tel:+919601959133"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">{personalInfo.phone}</p>
            </a>

            <a
              href="https://linkedin.com/in/darshak-kakani-24a685177"
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Linkedin className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
