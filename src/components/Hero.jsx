import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient vignettes that do not block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
        <div className="absolute -inset-x-20 -bottom-24 h-64 rounded-[100%] bg-gradient-to-t from-white to-transparent blur-2xl" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-300/30 via-cyan-300/30 to-violet-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-md">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Modern Fintech Experiences
        </span>
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Make your money fly further
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          Manage, grow, and automate your crypto and cash in one sleek dashboard. Fast, secure, and beautifully simple.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition hover:bg-gray-800">
            Start free
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            See features
          </a>
        </div>

        {/* Flying money accents */}
        <div className="pointer-events-none absolute inset-0">
          <FloatingBill className="left-[8%] top-[18%] rotate-12" delay={0} />
          <FloatingBill className="left-[80%] top-[22%] -rotate-6" delay={0.2} />
          <FloatingBill className="left-[20%] top-[65%] rotate-3" delay={0.4} />
          <FloatingBill className="left-[72%] top-[70%] -rotate-12" delay={0.6} />
        </div>
      </div>
    </section>
  );
}

function FloatingBill({ className = '', delay = 0 }) {
  return (
    <div
      className={`absolute select-none text-3xl sm:text-4xl md:text-5xl ${className}`}
      style={{
        animation: `floatY 6s ease-in-out ${delay}s infinite`,
        filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.15))',
      }}
    >
      💸
      <style>
        {`@keyframes floatY { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-16px) } }`}
      </style>
    </div>
  );
}
