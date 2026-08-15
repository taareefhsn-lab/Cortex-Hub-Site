import React from 'react';

export default function Join() {
  return (
    <main className="min-h-screen bg-void text-bone pt-32 pb-24 px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl border border-violet/40 bg-surface p-8 md:p-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wide mb-3">
            Join Cortex Hub
          </h1>
          <p className="font-data text-muted text-sm uppercase">
            Initialize your membership connection
          </p>
        </header>

        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="font-data text-sm text-muted uppercase">Full Name</label>
            <input type="text" className="bg-void border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-data text-sm text-muted uppercase">Roll Number</label>
              <input type="text" className="bg-void border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-data text-sm text-muted uppercase">Year</label>
              <select className="bg-void border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none appearance-none">
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
                <option>Alumni</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="font-data text-sm text-muted uppercase">Department</label>
            <input type="text" className="bg-void border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="font-data text-sm text-muted uppercase">Email Address</label>
            <input type="email" className="bg-void border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="font-data text-sm text-muted uppercase">Area of Interest</label>
            <input type="text" className="bg-void border border-violet/40 text-bone p-3 font-body focus:outline-none focus:border-acid rounded-none" placeholder="e.g. Web Dev, AI, Systems..." />
          </div>

          <div className="pt-6">
            <button type="button" className="w-full bg-acid text-void font-data uppercase py-4 px-8 border-none hover:bg-bone transition-colors shadow-[4px_4px_0px_0px_#7D4ECA]">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
