import React from 'react';

export default function TakeTheFloor() {
  return (
    <main className="min-h-screen bg-void text-bone pt-24 pb-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-display font-bold uppercase tracking-wide mb-4">
            Take The Floor
          </h1>
          <p className="text-xl font-body text-muted">
            Propose a session for Cortex Hub. Broadcast your knowledge.
          </p>
        </header>

        <form className="space-y-12">
          {/* Personal Information */}
          <section className="space-y-6">
            <h2 className="text-2xl font-display uppercase border-b border-violet/40 pb-2 text-violet">
              01. Transmitter Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Full Name</label>
                <input type="text" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">I am a...</label>
                <select className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none appearance-none">
                  <option>Student</option>
                  <option>Alumnus</option>
                  <option>Faculty</option>
                  <option>Industry</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Institution/Organisation</label>
                <input type="text" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Email</label>
                <input type="email" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Phone</label>
                <input type="tel" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
            </div>
          </section>

          {/* Session Details */}
          <section className="space-y-6">
            <h2 className="text-2xl font-display uppercase border-b border-violet/40 pb-2 text-violet">
              02. Signal Content
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Session Title (Max 80 chars)</label>
                <input type="text" maxLength={80} className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Abstract (100-300 words)</label>
                <textarea rows={5} className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none resize-none"></textarea>
              </div>
              <div className="flex flex-col space-y-2 p-4 border border-vermilion/40 bg-vermilion/5">
                <label className="font-data text-sm text-vermilion uppercase font-bold">What will attendees walk away able to do? [CRITICAL]</label>
                <textarea rows={3} className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none resize-none mt-2"></textarea>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Format / Duration</label>
                <select className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none appearance-none">
                  <option>Talk (30 min)</option>
                  <option>Talk (45 min)</option>
                  <option>Workshop (60 min)</option>
                  <option>Workshop (90 min)</option>
                  <option>Demo (30 min)</option>
                  <option>Panel (60 min)</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Prerequisites</label>
                <input type="text" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" placeholder="e.g. Basic JS knowledge" />
              </div>
            </div>
          </section>

          {/* Logistics */}
          <section className="space-y-6">
            <h2 className="text-2xl font-display uppercase border-b border-violet/40 pb-2 text-violet">
              03. Logistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-3">
                <label className="font-data text-sm text-muted uppercase">Requirements</label>
                <div className="space-y-2">
                  {['Projector', 'Lab systems', 'Internet', 'Whiteboard', 'Mic'].map(req => (
                    <label key={req} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded-none appearance-none border border-violet/40 checked:bg-acid checked:border-acid" />
                      <span className="font-body text-bone">{req}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Preferred Dates</label>
                <select className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none appearance-none">
                  <option>Next Wednesday</option>
                  <option>In 2 Weeks</option>
                  <option>In 3 Weeks</option>
                  <option>In 4 Weeks</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>
          </section>

          {/* Links & Attachments */}
          <section className="space-y-6">
            <h2 className="text-2xl font-display uppercase border-b border-violet/40 pb-2 text-violet">
              04. Extracurriculars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">LinkedIn</label>
                <input type="url" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">GitHub</label>
                <input type="url" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Portfolio/Website</label>
                <input type="url" className="bg-surface border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-data text-sm text-muted uppercase">Photo Upload</label>
                <input type="file" className="text-bone font-body file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:bg-violet/20 file:text-violet hover:file:bg-violet/30 cursor-pointer" />
              </div>
            </div>
          </section>

          {/* Consent & Submit */}
          <section className="space-y-6 pt-6 border-t border-violet/40">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 mt-1 rounded-none appearance-none border border-violet/40 checked:bg-acid checked:border-acid flex-shrink-0" />
              <span className="font-body text-muted text-sm leading-relaxed">
                I consent to Cortex Hub publishing my profile and session details on their platform. I understand the session may be recorded and archived.
              </span>
            </label>

            <button type="button" className="inline-block bg-acid text-void font-data uppercase py-4 px-8 border-none hover:bg-bone transition-colors shadow-[4px_4px_0px_0px_#7D4ECA]">
              Transmit Proposal
            </button>
          </section>
        </form>
      </div>
    </main>
  );
}
