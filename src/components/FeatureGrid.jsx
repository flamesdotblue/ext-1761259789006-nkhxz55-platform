import { Rocket, Shield, Zap, Wallet } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch in minutes',
    desc: 'Connect wallets and banks with one click. Your money hub goes live instantly.'
  },
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'Multi-sig, device approvals, and on-chain proofs keep your funds safe.'
  },
  {
    icon: Zap,
    title: 'Automated yields',
    desc: 'Smart allocations route idle funds to low-risk strategies automatically.'
  },
  {
    icon: Wallet,
    title: 'Unified wallet',
    desc: 'Track crypto and fiat together with real-time PnL and tax-ready exports.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to make money move</h2>
          <p className="mt-3 text-gray-600">Tools designed for speed, safety, and delightful everyday finance.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-500 text-white shadow">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
