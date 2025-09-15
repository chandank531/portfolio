"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Next.js: Creating and Hosting a Full-Stack Site",
      issuer: "Linkedin Learning",
      year: "2025",
      link: "https://www.linkedin.com/learning/certificates/37faad67874cb9e32ca1a4692a1807f984311748f6c99d264a78a793dd6794b6?trk=share_certificate",
    },
    {
      title: "NestJS Microservices: Build & Deploy a Scalable Backend",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-80d9cf86-83d7-4381-a545-ded56588d853/",
    }
  ];

  return (
    <section className="py-20 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8 px-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {cert.issuer} · {cert.year}
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certificate →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
