import React from 'react';
import { Stethoscope, HeartPulse, Ambulance, Activity, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Primary Care',
    desc: 'Comprehensive checkups, preventative screenings, and personalized care plans for all ages.',
  },
  {
    icon: HeartPulse,
    title: 'Cardiology',
    desc: 'Advanced heart care including diagnostics, interventions, and long-term condition management.',
  },
  {
    icon: Ambulance,
    title: 'Emergency',
    desc: 'Round-the-clock emergency services with rapid triage and coordinated critical care.',
  },
  {
    icon: Activity,
    title: 'Diagnostics',
    desc: 'State-of-the-art imaging, lab services, and remote monitoring for accurate results fast.',
  },
  {
    icon: ShieldCheck,
    title: 'Surgery',
    desc: 'Minimally invasive procedures performed by experienced surgeons in modern theatres.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Our Medical Services</h2>
          <p className="mt-3 text-slate-600">
            From routine wellness to complex procedures, our multidisciplinary teams deliver evidence-based care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600 ring-1 ring-inset ring-blue-100">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
