T"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Mail,
  Phone,
  ExternalLink,
  Cpu,
  Building,
  Briefcase,
  Mic,
  Download,
  GraduationCap,
  BookOpen,
  School,
  ChevronRight,
  Code,
  Linkedin,
  Calendar,
  Database,
  GitBranch,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const educationRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projects = [
    {
      title: "Online eVisa Processing System",
      description:
        "Developed an E-Visa system with user login, document upload, and status tracking. Gained knowledge on file upload and retrieval of files from cloud.",
      tags: ["MERN Stack", "Cloud", "Authentication"],
      icon: <Building size={24} />,
      link: "https://github.com/himateja28/react-evisa",
      date: "Dec 2024",
    },
    {
      title: "Politician-Citizen Interactive System",
      description:
        "Built a platform for citizens to report issues and politicians to provide solutions. Implemented JWT-based authentication for secure user login and role-based access control.",
      tags: ["React", "Spring Boot", "MongoDB"],
      icon: <Briefcase size={24} />,
      link: "https://github.com/himateja28/politician-citizen",
      date: "July 2024",
    },
    {
      title: "Online Banking Application",
      description:
        "Created an online banking system with account creation, transaction management, and user authentication.",
      tags: ["Spring Boot", "MySQL", "Spring Security"],
      icon: <Cpu size={24} />,
      link: "https://github.com/himateja28/online-banking-application",
      date: "May 2024",
    },
    {
      title: "Voice Assistant",
      description: "A Python-based voice assistant with basic features for voice commands and responses.",
      tags: ["Python", "AI", "Voice Recognition"],
      icon: <Mic size={24} />,
      link: "http://github.com/himateja28/voiceassistant",
      date: "",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "KL University",
      period: "July 2022 - May 2026",
      description:
        "GPA: 9.45/10 | Expected Graduation: May 2026\nRelevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, DBMS, Web Development",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "Intermediate Education",
      institution: "Sri Chaitanya",
      period: "Completed",
      description: "Completed intermediate education with focus on Mathematics, Physics and Computer Science",
      icon: <BookOpen size={24} />,
    },
    {
      degree: "School Education",
      institution: "Bhashyam",
      period: "Completed",
      description: "Completed school education with distinction",
      icon: <School size={24} />,
    },
  ]

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "C++", "Python", "SQL"],
      icon: <Code size={24} />,
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      icon: <Server size={24} />,
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
      icon: <Database size={24} />,
    },
    {
      category: "Tools & Frameworks",
      items: ["Git", "Spring Boot", "Docker"],
      icon: <GitBranch size={24} />,
    },
    {
      category: "Concepts",
      items: ["OOP", "Data Structures", "Algorithms", "Cloud Computing"],
      icon: <Cpu size={24} />,
    },
  ]

  const certifications = [
    {
      title: "RedHat Enterprise Programmer EX-183",
      description: "Certified in enterprise application development",
      link: "https://www.credly.com/badges/db72f2f2-54d7-471a-a47d-b35f8793f8bb/public_url",
    },
    {
      title: "Automation Anywhere RPA",
      description: "Proficiency in Robotic Process Automation using Automation Anywhere",
      link: "https://certificates.automationanywhere.com/8b0e6c38-7810-4e6a-b99a-1cb07c343e12#acc.oxLKr1NT",
    },
    {
      title: "Salesforce AI Associate",
      description: "Skills in implementing AI solutions within the Salesforce ecosystem",
      link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=o7/cNN84/p48SNIvI1u5fKLODlp+nqcnBPIwuq56aov+1UaioLfQS/H7N/wX3r+v",
    },
    {
      title: "Frontend Developer (React)",
      description: "Advanced React development skills certified by HackerRank",
      link: "https://www.hackerrank.com/certificates/ddf4b46e8407",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-900/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Himateja
          </motion.h2>
          <div className="hidden md:flex gap-4">
            <NavButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} label="Home" delay={0.3} />
            <NavButton onClick={() => scrollToSection(educationRef)} label="Education" delay={0.35} />
            <NavButton onClick={() => scrollToSection(skillsRef)} label="Skills" delay={0.38} />
            <NavButton onClick={() => scrollToSection(experienceRef)} label="Experience" delay={0.41} />
            <NavButton onClick={() => scrollToSection(projectsRef)} label="Projects" delay={0.44} />
            <NavButton onClick={() => scrollToSection(certificationsRef)} label="Certifications" delay={0.47} />
            <NavButton onClick={() => scrollToSection(contactRef)} label="Contact" delay={0.5} />
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-block mb-2 px-3 py-1 bg-purple-900/30 rounded-full text-purple-400 text-sm font-medium">
                Computer Science Engineer
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Musunuri Himateja
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl text-purple-400 font-semibold mb-6">
                Building digital experiences that matter
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              A highly motivated Computer Science and Engineering student at KL University with a GPA of 9.45/10.
              Experienced in full-stack web development and cloud computing. Strong analytical and problem-solving
              skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection(projectsRef)}
                className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-base px-6 py-6"
              >
                <span>View My Projects</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="https://github.com/himateja28" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-base px-6 py-6 border-gray-700"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </Button>
              </a>
              <a href="/Musunuri_Himateja_Resume.pdf" download className="inline-block">
                <Button
                  variant="secondary"
                  className="transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 flex items-center gap-2 text-base px-6 py-6"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="https://www.linkedin.com/in/himateja-musunuri-28a6621b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={16} />
                <span>linkedin.com/in/himateja-musunuri</span>
              </a>
              <a
                href="mailto:2200030397cseh@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={16} />
                <span>2200030397cseh@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code size={16} className="text-purple-400" />
                      <span className="text-purple-400 font-mono text-sm">Developer</span>
                    </div>
                    <div className="font-mono text-sm text-gray-300">
                      <div>const skills = [</div>
                      <div className="pl-6">'Java',</div>
                      <div className="pl-6">'React',</div>
                      <div className="pl-6">'Spring Boot',</div>
                      <div className="pl-6">'Cloud Computing'</div>
                      <div>];</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={16} className="text-purple-400" />
                      <span className="text-purple-400 font-mono text-sm">Education</span>
                    </div>
                    <div className="font-mono text-sm text-gray-300">
                      <div>const education = {`{`}</div>
                      <div className="pl-6">university: 'KL University',</div>
                      <div className="pl-6">degree: 'B.Tech in CSE',</div>
                      <div className="pl-6">gpa: 9.45</div>
                      <div>{`}`};</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-center">
              Education
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              My academic journey and educational background
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <EducationCard
                    degree={item.degree}
                    institution={item.institution}
                    period={item.period}
                    description={item.description}
                    icon={item.icon}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative z-10 bg-gray-900/50 py-20 border-t border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-center">
              Skills
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Technical expertise and competencies
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <SkillCard category={skill.category} items={skill.items} icon={skill.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-center">
              Experience
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Professional work experience and internships
            </motion.p>

            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700/50 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="bg-purple-600/20 p-2 rounded-md text-purple-400">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Web Development Intern</CardTitle>
                      <CardDescription className="text-gray-300">Eduskills Foundation, Remote</CardDescription>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>AUG 2024 – SEP 2024</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Developed responsive web pages using HTML, CSS, and React.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Integrated APIs for scalable web applications.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Collaborated with UI/UX designers on user-friendly interfaces.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="relative z-10 bg-gray-900/50 py-20 border-t border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-center">
              Projects
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Showcasing my technical skills and problem-solving abilities
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    icon={project.icon}
                    link={project.link}
                    date={project.date}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certificationsRef} className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-center">
              Certifications
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Professional certifications that validate my expertise
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <CertificationCard title={cert.title} description={cert.description} link={cert.link} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative z-10 bg-gray-900/50 py-20 border-t border-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-center">
              Contact Me
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Let's connect and discuss potential opportunities
            </motion.p>

            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-purple-600 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-300">2200030397cseh@gmail.com</p>
                </div>
              </motion.div>


              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-purple-600 p-3 rounded-full">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                  <p className="text-gray-300">linkedin.com/in/himateja-musunuri</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a href="https://github.com/himateja28" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                      <Github size={20} />
                      <span>GitHub Profile</span>
                    </Button>
                  </motion.div>
                </a>
                <a href="/Musunuri_Himateja_Resume.pdf" download>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 w-full sm:w-auto">
                      <Download size={20} />
                      <span>Download Resume</span>
                    </Button>
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-950 py-8 border-t border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-400"
          >
            &copy; {new Date().getFullYear()} Musunuri Himateja. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

function NavButton({ onClick, label, delay = 0 }: { onClick: () => void; label: string; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <Button variant="ghost" onClick={onClick} className="relative overflow-hidden group">
        <span>{label}</span>
        <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
      </Button>
    </motion.div>
  )
}

function EducationCard({
  degree,
  institution,
  period,
  description,
  icon,
}: {
  degree: string
  institution: string
  period: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 h-full hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="bg-purple-600/20 p-2 rounded-md text-purple-400">{icon}</div>
        <div>
          <CardTitle className="text-xl">{institution}</CardTitle>
          <CardDescription className="text-gray-300">{period}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg mb-2">{degree}</h3>
        <CardDescription className="text-gray-300 text-base whitespace-pre-line">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function SkillCard({
  category,
  items,
  icon,
}: {
  category: string
  items: string[]
  icon: React.ReactNode
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 h-full hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="bg-purple-600/20 p-2 rounded-md text-purple-400">{icon}</div>
        <div>
          <CardTitle className="text-xl">{category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700/70 hover:bg-gray-700">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  icon,
  link,
  date,
}: {
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  link: string
  date: string
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 h-full hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="bg-purple-600/20 p-2 rounded-md text-purple-400">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        {date && (
          <div className="ml-auto flex items-center gap-2 text-gray-400">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 text-base mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700/70 hover:bg-gray-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 group border-gray-700 hover:border-purple-500"
          >
            <span>View Project</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}

function CertificationCard({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 group border-gray-700 hover:border-purple-500"
          >
            <span>View Credentials</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
