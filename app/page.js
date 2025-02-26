import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Code, Brush, Globe } from "lucide-react";

const About = () => (
  <section className="p-6 bg-gradient-to-r from-indigo-500 to-purple-700 text-white rounded-2xl shadow-lg">
    <h2 className="text-4xl font-bold text-center">About Me</h2>
    <div className="flex flex-col items-center text-center mt-6">
      <Image src="/profile.jpg" width={120} height={120} className="rounded-full border-4 border-white shadow-lg" alt="Profile" />
      <div className="mt-4">
        <p className="text-2xl font-semibold">Vinka Aleyka Derina</p>
        <p className="text-sm">Mahasiswa Sistem Informasi</p>
        <p className="text-sm">Ma'Soem University, semester 4</p>
        <p className="text-md">Tertarik pada pengembangan web, UI/UX design, dan analisis data.</p>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="p-6 bg-gray-100 rounded-2xl shadow-lg">
    <h2 className="text-4xl font-bold text-center">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
      <div className="p-4 bg-white rounded-xl shadow-md">
        <Code className="text-blue-500 mx-auto" size={32} />
        <p>Next.js & React</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md">
        <Code className="text-blue-500 mx-auto" size={32} />
        <p>JavaScript & TypeScript</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md">
        <Brush className="text-blue-500 mx-auto" size={32} />
        <p>Tailwind CSS</p>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md">
        <Globe className="text-blue-500 mx-auto" size={32} />
        <p>Node.js & Express</p>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="p-6 bg-white rounded-2xl shadow-lg">
    <h2 className="text-4xl font-bold text-center">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="p-4 bg-gray-100 rounded-xl shadow-md text-center">
        <p className="text-lg font-semibold">Website Development</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-xl shadow-md text-center">
        <p className="text-lg font-semibold">UI/UX Design</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-xl shadow-md text-center">
        <p className="text-lg font-semibold">Performance Optimization</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-xl shadow-md text-center">
        <p className="text-lg font-semibold">SEO & Digital Marketing</p>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="p-6 bg-gray-100 rounded-2xl shadow-lg">
    <h2 className="text-4xl font-bold text-center">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Project 1</h3>
        <p className="text-sm">A modern web app using Next.js and Tailwind.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Project 2</h3>
        <p className="text-sm">E-commerce platform built with React.</p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="p-6 bg-white rounded-2xl shadow-lg">
    <h2 className="text-4xl font-bold text-center">Contact</h2>
    <div className="flex flex-col items-center gap-3 mt-6 text-gray-700">
      <div className="flex items-center gap-3">
        <Mail size={24} className="text-blue-500" /> <span>email@example.com</span>
      </div>
      <div className="flex items-center gap-3">
        <Phone size={24} className="text-blue-500" /> <span>+123 456 7890</span>
      </div>
      <div className="flex items-center gap-3">
        <MapPin size={24} className="text-blue-500" /> <span>Jakarta, Indonesia</span>
      </div>
    </div>
  </section>
);

export default function CV() {
  return (
    <div className="container mx-auto p-8 space-y-8 bg-gray-50 min-h-screen">
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
