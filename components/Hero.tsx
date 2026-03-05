'use client';

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-blue">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="Travaux de second œuvre, rénovation et construction par LUCX CORPORATE en Côte d'Ivoire"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              <span className="text-sm font-medium text-white tracking-wide uppercase">
                Travaux de Second Œuvre
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              L&apos;Excellence <br />
              <span className="text-brand-yellow italic">Bâtie sur Mesure</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              LUCX CORPORATE vous accompagne dans la rénovation, l&apos;aménagement et les installations techniques de vos projets immobiliers avec une expertise de pointe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-brand-blue font-bold rounded-lg hover:bg-brand-yellow-light transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-yellow/20"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
              >
                Demander un devis
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 border-t border-white/10 pt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Expertise Multi-Pôles</h3>
                  <p className="text-sm text-slate-400 mt-1">Solutions globales adaptées</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" />
                <div>
                  <h3 className="text-white font-semibold">Qualité & Sécurité</h3>
                  <p className="text-sm text-slate-400 mt-1">Respect strict des normes</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements for the right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-[600px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

            <div className="absolute right-0 top-20 w-64 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
              <div className="text-4xl font-serif text-brand-yellow mb-2">2020</div>
              <div className="text-sm text-white font-medium uppercase tracking-wider">Année de création</div>
              <div className="mt-4 h-1 w-12 bg-brand-yellow rounded-full" />
            </div>

            <div className="absolute left-10 bottom-32 w-72 bg-brand-blue-light/80 backdrop-blur-md border border-brand-blue-light p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue font-bold text-xl">
                  LC
                </div>
                <div>
                  <div className="text-white font-bold">Faites votre choix</div>
                  <div className="text-brand-yellow text-sm italic">avec joie</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Particuliers, entreprises et collectivités nous font confiance pour leurs projets.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
