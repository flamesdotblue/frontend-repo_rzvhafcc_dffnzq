import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DoctorsSection from './components/DoctorsSection';
import AppointmentCTA from './components/AppointmentCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white antialiased">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <AppointmentCTA />

      {/* Simple footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p className="text-sm">© {new Date().getFullYear()} BlueHeart Medical Center. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#team" className="hover:text-slate-900">Our Team</a>
            <a href="#appointment" className="hover:text-slate-900">Appointments</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
