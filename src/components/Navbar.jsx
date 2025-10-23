import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/50 backdrop-blur-md shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-500 text-white shadow">
                <Rocket size={18} />
              </span>
              <span className="font-semibold tracking-tight">FlowFunds</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <a className="hover:text-gray-900 transition" href="#features">Features</a>
              <a className="hover:text-gray-900 transition" href="#pricing">Pricing</a>
              <a className="hover:text-gray-900 transition" href="#about">About</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">Sign in</button>
              <button className="inline-flex rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
