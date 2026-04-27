"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import Image from "next/image";
import { Globe, Zap, Mail, Phone, ChevronRight, Layout, Cpu, Database, Calendar, Facebook, Youtube, Instagram, Twitter, MessageCircle, X } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import { teamMembers, services, featuredProjects, techStack, whyChooseUs, timeline, type Service } from '../data/data';
import ClientOnly from "@/components/ui/ClientOnly";
import { motion } from "framer-motion";

export default function Home() {
  const founders = teamMembers.filter(m => m.type === 'founder');
  const coreTeam = teamMembers.filter(m => m.type === 'core');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-start overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <ClientOnly>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="px-6 py-2 rounded-full border border-[#FD853A]/30 bg-[#FD853A]/5 text-[#FD853A] font-medium text-sm"
            >
              Building the Future of Tech
            </motion.div>
          </ClientOnly>
          
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold text-[#171717] leading-[1.1]">
              We Build <span className="text-[#FD853A]">Digital Products</span>, <br className="hidden md:block" /> AI Systems & Growth Solutions
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl text-[#667085] leading-relaxed text-center">
              Startup studio founded by ambitious student builders from University of Delhi creating solutions across SaaS, AI, automation and smart governance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <OrangeButton 
              title="Explore Our Work" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
              className="shadow-[0_6px_0_#e46e24] hover:shadow-[0_4px_0_#e46e24] hover:-translate-y-[1px] active:translate-y-[4px] active:shadow-none transition-all duration-200"
            />
            <button 
              onClick={() => document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 min-w-[200px] h-[66px] rounded-full border-2 border-[#171717] text-[#171717] font-bold text-xl transition-all hover:bg-[#171717] hover:text-white active:translate-y-[4px] shadow-[0_6px_0_#171717] hover:shadow-[0_4px_0_#171717] active:shadow-none flex items-center justify-center"
            >
              Meet the Team
            </button>
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScDk4gpHnkUFH42gSSVvHgpmUOKzTbgCtcSEIl-C9zfKrSLNA/viewform', '_blank')}
              className="px-8 py-4 min-w-[200px] h-[66px] rounded-full bg-[#171717] text-white font-bold text-xl transition-all hover:bg-[#333] active:translate-y-[4px] shadow-[0_6px_0_#000] hover:shadow-[0_4px_0_#000] active:shadow-none flex items-center justify-center"
            >
              Start a Project
            </button>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FD853A]/5 rounded-full blur-[100px] -z-10" />
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-6 lg:px-[71px] bg-[#171717] rounded-[50px] text-white">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex gap-2">
                <CustomeText title="Who" className="text-4xl md:text-5xl font-bold" />
                <CustomeText title="We Are" className="text-4xl md:text-5xl font-bold text-[#FD853A]" />
              </div>
              <p className="text-[#98A2B3] text-xl leading-relaxed">
                Zorvia Digital is an emerging product and technology venture focused on transforming ideas into scalable digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {["Web Development", "SaaS Products", "AI & Automation", "Cloud Solutions"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FD853A]" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-[#FD853A] font-bold text-sm uppercase tracking-widest mb-2">Our Mission</h4>
              <p className="text-2xl font-medium">Transform ideas into scalable digital experiences.</p>
            </div>
          </div>
          
          <div className="flex-1 relative w-full aspect-[4/3] max-w-[600px] group">
             <div className="absolute inset-0 bg-[#FD853A]/20 rounded-[40px] blur-2xl opacity-50 animate-pulse" />
             <div className="relative h-full w-full rounded-[40px] overflow-hidden border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                   src="/team/group.jpg" 
                   alt="Zorvia Digital Team" 
                   fill 
                   className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <p className="text-white font-medium text-lg italic">The Founding Team at Zorvia Museum of Software</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Founders Spotlight */}
      <section id="founders" className="w-full py-24 px-6 lg:px-[71px]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="text-center space-y-4">
             <CustomeText title="Founding Team" className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D2939]" />
             <p className="text-[#667085] text-lg">The visionaries behind Zorvia Digital</p>
          </div>

          <div className="space-y-24">
            {founders.map((founder, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 aspect-square relative bg-[#F2F4F7] rounded-[40px] overflow-hidden group">
                   <Image 
                     src={founder.image} 
                     alt={founder.name} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-all duration-700"
                   />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 to-transparent z-10" />
                  {/* Big Gap for profile image as requested */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#1D2939] font-bold text-5xl uppercase tracking-tighter opacity-10 select-none z-20 group-hover:scale-110 transition-transform duration-700">
                    {founder.name}
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold text-[#1D2939]">{founder.name}</h3>
                    <p className="text-2xl text-[#FD853A] font-semibold">{founder.role}</p>
                  </div>
                  <p className="text-lg text-[#667085] leading-relaxed">{founder.bio}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-bold text-[#1D2939]">Specialties</h4>
                      <ul className="space-y-1">
                        {founder.specialties.map((s, idx) => (
                          <li key={idx} className="text-[#667085] flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FD853A]" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {founder.achievements && (
                       <div className="space-y-3">
                        <h4 className="font-bold text-[#1D2939]">Achievements</h4>
                        <ul className="space-y-1">
                          {founder.achievements.map((a, idx) => (
                            <li key={idx} className="text-[#667085] flex items-center gap-2">
                              <Zap size={14} className="text-[#FD853A]" /> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Grid */}
      <section id="team" className="w-full py-24 px-6 lg:px-[71px] bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="text-center space-y-4">
             <CustomeText title="Core Team" className="text-4xl md:text-5xl font-bold text-[#1D2939]" />
             <p className="text-[#667085] text-lg">Specialists driving engineering excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[32px] border border-[#EAECF0] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-full aspect-square bg-[#F2F4F7] rounded-2xl mb-6 relative overflow-hidden group-hover:shadow-inner transition-all">
                   <Image 
                     src={member.image} 
                     alt={member.name} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-all duration-500"
                   />
                   <span className="absolute inset-0 flex items-center justify-center text-[#1D2939] font-bold text-lg opacity-10 group-hover:opacity-20 z-10">{member.name.split(' ')[0]}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#1D2939] group-hover:text-[#FD853A] transition-colors">{member.name}</h4>
                  <p className="text-[#FD853A] font-medium text-sm uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-6 lg:px-[71px]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
               <div className="flex gap-3">
                 <CustomeText title="What" className="text-4xl md:text-5xl font-bold text-[#1D2939]" />
                 <CustomeText title="We Build" className="text-4xl md:text-5xl font-bold text-[#FD853A]" />
               </div>
               <p className="max-w-[500px] text-[#667085] text-lg">Comprehensive technology solutions for startups and enterprises.</p>
            </div>
             <OrangeButton 
              title="Get Started" 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScDk4gpHnkUFH42gSSVvHgpmUOKzTbgCtcSEIl-C9zfKrSLNA/viewform', '_blank')}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-[#171717] p-10 rounded-[40px] text-white hover:scale-105 transition-all duration-500 flex flex-col gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#FD853A] flex items-center justify-center">
                    <Icon size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-[#98A2B3]">{service.desc}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="flex items-center gap-2 text-[#FD853A] font-bold group cursor-pointer"
                  >
                    Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="w-full py-24 px-6 lg:px-[71px] bg-[#171717] rounded-[50px] text-white">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-6xl font-bold">Featured <span className="text-[#FD853A]">Projects</span></h2>
             <p className="text-[#98A2B3] text-lg max-w-[600px] mx-auto">Real-world impact through innovative engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <a 
                key={i} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-[40px] overflow-hidden hover:bg-white/10 transition-all block cursor-pointer"
              >
                <div className="aspect-video bg-white/10 relative overflow-hidden">
                   {project.image ? (
                     <Image 
                       src={project.image} 
                       alt={project.title} 
                       fill 
                       className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold group-hover:scale-110 transition-transform duration-500">
                       {project.title.toUpperCase()}
                     </div>
                   )}
                   {/* Gradient overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-60 z-10" />
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-[#FD853A]">{project.title}</h3>
                    <ChevronRight className="text-[#FD853A] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase text-[#98A2B3] tracking-widest mb-1">The Problem</p>
                      <p className="text-sm text-gray-300">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-[#98A2B3] tracking-widest mb-1">The Solution</p>
                      <p className="text-sm text-gray-300">{project.solution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-xs text-[#FD853A] border border-[#FD853A]/20">{s}</span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-[#FD853A] font-bold uppercase tracking-widest">Impact</p>
                    <p className="text-lg font-medium">{project.impact}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="w-full py-24 px-6 lg:px-[71px]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-16">
          <CustomeText title="Our Tech Stack" className="text-4xl md:text-5xl font-bold text-[#1D2939]" />
          
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Frontend", items: techStack.frontend, icon: Layout },
              { label: "Backend", items: techStack.backend, icon: Cpu },
              { label: "Cloud", items: techStack.cloud, icon: Globe },
              { label: "AI & Data", items: techStack.aiData, icon: Database }
            ].map((category, i) => (
              <div key={i} className="space-y-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#FD853A]">
                   <category.icon size={32} />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-[#1D2939] mb-4 text-xl">{category.label}</h4>
                  <div className="flex flex-col gap-2">
                    {category.items.map((item, idx) => (
                      <span key={idx} className="text-[#667085] font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zorvia */}
      <section className="w-full py-24 px-6 lg:px-[71px] bg-[#FD853A] rounded-[50px] text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-5xl md:text-7xl font-bold">{item.metric}</h3>
              <p className="text-xl font-medium text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="w-full py-24 px-6 lg:px-[71px] bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="text-center space-y-4">
             <CustomeText title="Our Journey" className="text-4xl md:text-5xl font-bold text-[#1D2939]" />
             <p className="text-[#667085] text-lg">Milestones that define our growth</p>
          </div>

          <div className="relative border-l-2 border-[#FD853A] ml-4 md:ml-8 space-y-12 pb-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#FD853A] border-4 border-white shadow-sm" />
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[#FD853A] font-bold">
                    <Calendar size={18} />
                    <span>{item.year}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-[#1D2939]">{item.event}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-32 px-6 lg:px-[71px]">
        <div className="max-w-[1200px] mx-auto bg-[#171717] rounded-[60px] p-12 lg:p-24 flex flex-col lg:flex-row gap-16 items-center text-white">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Let&apos;s Build Something <span className="text-[#FD853A]">Together</span>
            </h2>
                <div className="space-y-6">
                  <div 
                    onClick={() => copyToClipboard('contact@zorvia.digital', 'Email')}
                    className="flex items-center gap-4 justify-center lg:justify-start group cursor-pointer w-fit mx-auto lg:mx-0"
                    title="Click to copy email"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FD853A] group-hover:bg-[#FD853A] group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <span className="text-xl group-hover:text-[#FD853A] transition-colors">contact@zorvia.digital</span>
                  </div>
                  <div 
                    onClick={() => copyToClipboard('+91 8674828218', 'Phone number')}
                    className="flex items-center gap-4 justify-center lg:justify-start group cursor-pointer w-fit mx-auto lg:mx-0"
                    title="Click to copy phone number"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FD853A] group-hover:bg-[#FD853A] group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <span className="text-xl group-hover:text-[#FD853A] transition-colors">+91 8674828218</span>
                  </div>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=South+Extension,+New+Delhi,+Delhi+110049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 justify-center lg:justify-start group cursor-pointer w-fit mx-auto lg:mx-0"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FD853A] group-hover:bg-[#FD853A] group-hover:text-white transition-all">
                      <Globe size={24} />
                    </div>
                    <span className="text-xl group-hover:text-[#FD853A] transition-colors">South Extension, New Delhi, Delhi, 110049</span>
                  </a>
              
              <div className="flex gap-4 pt-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576674800299", label: "Facebook" },
                  { Icon: Youtube, href: "https://youtube.com/@zorviadigital?si=aKPmPMGG7WLsKkw3", label: "YouTube" },
                  { Icon: MessageCircle, href: "https://wa.me/qr/H7FOAUMHUV4XJ1", label: "WhatsApp" },
                  { Icon: Instagram, href: "https://www.instagram.com/zorvia02?igsh=MTA0b2EwMXA1b29vYg==", label: "Instagram" },
                  { Icon: Twitter, href: "https://x.com/zorvia02", label: "Twitter" }
                ].map(({ Icon, href, label }, idx) => (
                  <a 
                    key={idx} 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Follow us on ${label}`}
                    aria-label={`Follow us on ${label}`}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FD853A] hover:bg-[#FD853A] hover:text-white transition-all cursor-pointer"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full space-y-6">
            <div className="flex flex-col gap-6">
              <button 
                onClick={() => window.location.href = 'mailto:contact@zorvia.digital?subject=Discovery Call Request'}
                className="w-full py-6 rounded-full bg-[#FD853A] text-white font-bold text-xl transition-all hover:bg-[#e4752f] active:translate-y-[4px] shadow-[0_6px_0_#e46e24] active:shadow-none flex items-center justify-center"
              >
                Book a Discovery Call
              </button>
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScDk4gpHnkUFH42gSSVvHgpmUOKzTbgCtcSEIl-C9zfKrSLNA/viewform', '_blank')}
                className="w-full py-6 rounded-full border-2 border-white/40 text-white font-bold text-xl transition-all hover:bg-white hover:text-[#171717] active:translate-y-[4px] shadow-[0_6px_0_rgba(255,255,255,0.2)] active:shadow-none flex items-center justify-center"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setSelectedService(null)}>
          <div 
            className="relative w-full max-w-[800px] max-h-[90vh] bg-white rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-8 md:p-12 bg-[#171717] text-white flex justify-between items-start">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FD853A] flex items-center justify-center shrink-0">
                  {selectedService.icon && <selectedService.icon size={40} />}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold">{selectedService.title}</h3>
                  <p className="text-[#98A2B3] text-lg mt-2">{selectedService.desc}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-12 overflow-y-auto space-y-8">
              <div>
                <h4 className="text-xl font-bold text-[#1D2939] mb-4">Service Overview</h4>
                <p className="text-[#667085] text-lg leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#1D2939] mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.features?.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-2xl border border-[#EAECF0]">
                      <div className="w-2 h-2 rounded-full bg-[#FD853A]" />
                      <span className="text-[#344054] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-[#EAECF0] flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[#667085] text-center md:text-left font-medium">Ready to start your {selectedService.title} project?</p>
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
                  }}
                  className="px-8 py-4 bg-[#FD853A] text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_4px_0_#e46e24] active:translate-y-[2px] active:shadow-none"
                >
                  Contact Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
