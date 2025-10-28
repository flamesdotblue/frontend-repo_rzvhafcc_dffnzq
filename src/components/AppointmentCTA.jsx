import React from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';

const AppointmentCTA = () => {
  return (
    <section id="appointment" className="relative w-full bg-[#0b1220] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Book an Appointment</h2>
            <p className="mt-3 text-white/80">
              Choose a date that works for you and our team will confirm your visit. For urgent cases,
              please call our 24/7 helpline.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Emergency</p>
                  <p className="text-sm font-semibold">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-300">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Working Hours</p>
                  <p className="text-sm font-semibold">Mon–Sat, 8am–8pm</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="rounded-lg bg-blue-500/20 p-2 text-blue-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Location</p>
                  <p className="text-sm font-semibold">Downtown Medical District</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl ring-1 ring-slate-200"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="(123) 456-7890"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Department</label>
                <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500">
                  <option>Primary Care</option>
                  <option>Cardiology</option>
                  <option>Radiology</option>
                  <option>Pediatrics</option>
                  <option>Emergency</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Date</label>
                <input
                  type="date"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Notes</label>
                <textarea
                  rows={4}
                  placeholder="Short description about your visit"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Request Appointment
            </button>
            <p className="mt-3 text-center text-sm text-slate-500">
              We will get back to you via phone to confirm your slot.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
