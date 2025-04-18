'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaGraduationCap, FaTrophy, FaAward } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="relative">
        <div className="gradient-circle gradient-circle-1" />
        <div className="gradient-circle gradient-circle-2" />
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-emerald-900/90" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-200 shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mayank Khare"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-slate-200">
                Mayank Khare
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8">
                Full Stack Developer & Designer
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-slate-600 text-white rounded-full hover:from-emerald-700 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-emerald-200 text-emerald-100 rounded-full hover:bg-emerald-200/10 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex justify-center gap-6 mt-8">
                <a href={portfolioData.contact.social.github} className="text-emerald-200 hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href={portfolioData.contact.social.linkedin} className="text-emerald-200 hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href={portfolioData.contact.social.twitter} className="text-emerald-200 hover:text-white transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{portfolioData.about.title}</h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="w-48 h-48 relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mayank Khare"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 leading-relaxed">
                    {portfolioData.about.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-slate-100 text-slate-700 rounded-full border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Work Experience</h2>
            <div className="max-w-4xl mx-auto">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 p-6 bg-white rounded-lg shadow-lg border border-slate-200 hover:border-emerald-200 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{exp.position}</h3>
                  <p className="text-emerald-600 font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-slate-700">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Achievements Section */}
        <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Education & Achievements</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-emerald-600" /> Education
                </h3>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium text-emerald-700">{edu.degree}</h4>
                    <p className="text-slate-600">{edu.institution}</p>
                    <p className="text-slate-500 text-sm">{edu.year}</p>
                  </div>
                ))}
              </div>

              {/* Achievements & Certifications */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <FaTrophy className="text-emerald-600" /> Achievements & Certifications
                </h3>
                <div className="space-y-4">
                  {portfolioData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <FaAward className="text-emerald-500 mt-1" />
                      <p className="text-slate-700">{achievement}</p>
                    </div>
                  ))}
                  {portfolioData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <FaAward className="text-emerald-500 mt-1" />
                      <p className="text-slate-700">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Get in Touch</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 hover:border-emerald-200 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email</p>
                      <a href={`mailto:${portfolioData.contact.email}`} 
                         className="text-slate-700 hover:text-emerald-600 transition-colors">
                        {portfolioData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Phone</p>
                      <a href={`tel:${portfolioData.contact.phone}`} 
                         className="text-slate-700 hover:text-emerald-600 transition-colors">
                        {portfolioData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">WhatsApp</p>
                      <a href={`https://wa.me/${portfolioData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                         className="text-slate-700 hover:text-emerald-600 transition-colors"
                         target="_blank"
                         rel="noopener noreferrer">
                        {portfolioData.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Address</p>
                      <p className="text-slate-700">
                        {portfolioData.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="bg-white p-6 rounded-lg shadow-lg border border-slate-200" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message')
                };

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });

                  const result = await response.json();

                  if (response.ok) {
                    alert('Message sent successfully!');
                    // Clear the form
                    e.currentTarget.reset();
                  } else {
                    alert(result.error || 'Failed to send message');
                  }
                } catch  {
                  alert('An error occurred. Please try again later.');
                }
              }}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-slate-600 text-white rounded-lg hover:from-emerald-700 hover:to-slate-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-slate-300">
                © {new Date().getFullYear()} All Rights Reserved - Mayank Khare
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Developed by <span className="text-emerald-400">Mayank Khare</span> 
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
