"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "A. Acceptance of Terms",
      content:
        "By accessing or using the Zorvia website and services, you agree to be bound by these Terms and Conditions. Our services are provided by Zorvia Digital, architected to meet enterprise standards. If you do not agree with these terms, please discontinue use of our portal immediately.",
    },
    {
      title: "B. Scope of Services",
      content:
        "Zorvia Digital provides professional digital solutions including, but not limited to:",
      list: [
        "Web Development: Custom architectural builds and frontend engineering.",
        "UI/UX Design: User-centric interface design and experience mapping.",
        "App Development: Mobile and cross-platform application deployment.",
        "Landing Page Design: High-conversion, performance-optimized digital entry-points.",
      ],
    },
    {
      title: "C. User Responsibilities",
      content: "Users must utilize our services legally and responsibly. You agree not to:",
      list: [
        "Misuse our infrastructure or reverse-engineer development artifacts.",
        "Upload harmful content or malicious code.",
        "Violate any applicable local or international laws while utilizing our digital nexus.",
      ],
    },
    {
      title: "D. Payment Terms & Refunds",
      content: "Standard financial protocols for all projects:",
      list: [
        "Advance Payment: A 50% non-refundable advance payment is required to initiate any architectural node.",
        "Refund Rules: As a strict policy, our advance payments are non-refundable. Refunds are only granted in exceptional circumstances where project work (including research and wireframing) has completely failed to commence due to our own operational delays. Once design or development cycles have initiated, the advance payment is consumed and cannot be refunded.",
        "Project Timelines: Estimated delivery schedules are provided in the specific Statement of Work (SOW). Timelines are subject to prompt client feedback.",
        "Revision Limits: All projects include up to 3 rounds of revisions. Additional revisions may incur supplemental architectural fees.",
      ],
    },
    {
      title: "E. Intellectual Property & Ownership",
      content:
        "We believe in client sovereignty. Upon final payment and project completion, the Client owns the final paid project, including all custom assets and source code developed for that specific mission. Zorvia Digital retains the right to display non-sensitive project artifacts in our professional portfolio unless a specific white-label agreement is in place.",
    },
    {
      title: "F. Cancellation Policy",
      content:
        "Either party may cancel a project with written notice. In the event of client cancellation, all work performed up to the cancellation date will be billed, and any remaining balance of the advance payment will be forfeited to cover resource allocation costs.",
    },
    {
      title: "G. Limitation of Liability",
      content:
        "Zorvia Digital shall not be liable for any indirect or consequential damages resulting from project delays or the use of delivered software. Our total liability for any claim is capped at the amount paid by the client for the specific project node.",
    },
    {
      title: "H. Changes to Terms",
      content:
        "We reserve the right to update these terms at any time. Your continued use of the platform after updates constitutes acceptance of the new framework.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#FCFCFD] selection:bg-[#FD853A] selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-[160px] pb-[80px] px-4 sm:px-8 lg:px-[100px] xl:px-[150px] max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center lg:text-left"
        >
          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold leading-tight mb-4 tracking-tight">
            Terms & <span className="text-[#FD853A]">Conditions</span>.
          </h1>
          <p className="text-[18px] sm:text-[22px] text-gray-400 font-light max-w-2xl">
            Defining the boundaries of project excellence.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {sections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#1C1C1C] rounded-2xl p-6 sm:p-10 border border-white/5 hover:border-[#FD853A]/30 transition-colors duration-300"
            >
              <h2 className="text-[24px] sm:text-[28px] font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-[#FD853A] text-xl">•</span>
                {section.title}
              </h2>
              <div className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed">
                <p className="mb-4">{section.content}</p>
                {section.list && (
                  <ul className="list-none space-y-4 mt-6">
                    {section.list.map((item, i) => {
                      const colonSplit = item.split(':');
                      if (colonSplit.length > 1) {
                         return (
                           <li key={i} className="flex items-start gap-3">
                             <div className="w-2 h-2 rounded-full bg-[#FD853A] mt-2 flex-shrink-0" />
                             <div>
                               <strong className="text-white block sm:inline mr-2">{colonSplit[0]}:</strong>
                               <span className="text-gray-400">{colonSplit.slice(1).join(':')}</span>
                             </div>
                           </li>
                         );
                      }
                      return (
                        <li key={i} className="flex items-start gap-3">
                           <div className="w-2 h-2 rounded-full bg-[#FD853A] mt-2 flex-shrink-0" />
                           <span className="text-gray-400">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default TermsAndConditions;
