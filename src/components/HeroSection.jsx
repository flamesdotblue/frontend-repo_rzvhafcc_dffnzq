import React from 'react';
import Spline from '@splinetool/react-spline';
import { Phone, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0f1a] text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1acc] to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-24 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-white backdrop-blur">
            Advanced Care • Human Touch
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Compassionate Healthcare, Powered by Technology
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            World-class clinicians, modern facilities, and real-time digital care pathways—so you and your family get the right care, right on time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600"
            >
              <Calendar className="h-5 w-5" /> Book Appointment
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" /> 24/7 Helpline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
