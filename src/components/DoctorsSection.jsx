import React from 'react';
import { Star, User } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Amelia Carter',
    role: 'Cardiothoracic Surgeon',
    rating: 4.9,
    bio: '20+ years of experience in minimally invasive cardiac surgery and valve repair.',
  },
  {
    name: 'Dr. Noah Patel',
    role: 'Consultant Radiologist',
    rating: 4.8,
    bio: 'Expert in MRI, CT, and interventional radiology with a focus on rapid diagnostics.',
  },
  {
    name: 'Dr. Sofia Martins',
    role: 'Pediatrician',
    rating: 5.0,
    bio: 'Family-centered care for children and adolescents, preventive and developmental health.',
  },
];

const DoctorsSection = () => {
  return (
    <section id="team" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Meet Our Specialists</h2>
          <p className="mt-3 text-slate-600">
            Highly qualified, deeply compassionate, and committed to outcomes that matter to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <div key={doc.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <User className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{doc.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-yellow-400" />
                      <span className="text-sm font-medium text-slate-700">{doc.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-blue-600">{doc.role}</p>
                  <p className="mt-2 text-sm text-slate-600">{doc.bio}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#appointment" className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
                  Book with {doc.name.split(' ')[1]}
                </a>
                <a href="#" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
