'use client';

import { motion } from 'motion/react';
import { Users2, Wrench, Truck, ShieldAlert } from 'lucide-react';

const team = [
  'Ingénieur',
  'Conducteur de travaux',
  'Chefs de chantier',
  'Maçons',
  'Électriciens / Plombiers / Climaticiens',
  'Peintres / Carreleurs',
  'Jardiniers / Paysagistes',
  'Soudeurs / Métalliers',
  'Techniciens sécurité',
];

const equipment = [
  'Véhicules utilitaires',
  'Débroussailleuses',
  'Tondeuses à gazon',
  'Outillage électroportatif professionnel',
  'Échafaudages, échelles',
  'Postes à souder, groupes électrogènes',
  'Équipements de protection individuelle (EPI)',
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3"
          >
            Moyens Matériels & Humains
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif font-bold text-slate-900 sm:text-5xl mb-6"
          >
            Notre Force d&apos;Intervention
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Human Resources */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Users2 className="w-32 h-32 text-brand-blue" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue text-brand-yellow mb-8 shadow-lg">
                <Users2 className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Équipe Technique
              </h3>
              
              <ul className="space-y-4">
                {team.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow mt-2 shrink-0" />
                    <span className="text-slate-700 font-medium">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Material Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-blue rounded-3xl p-8 md:p-12 border border-brand-blue-light shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Wrench className="w-32 h-32 text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-brand-yellow mb-8 border border-white/20 backdrop-blur-sm shadow-lg">
                <Truck className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Matériel Principal
              </h3>
              
              <ul className="space-y-4">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow mt-2 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Commitments Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-yellow rounded-3xl p-8 shadow-lg border border-brand-yellow-light"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldAlert className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-2">Engagements Qualité & Sécurité</h3>
                <p className="text-brand-blue/80 font-medium">Respect des normes en vigueur, équipe formée aux règles de sécurité chantier, engagement sur les délais et le budget.</p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col gap-2 text-sm font-bold text-brand-blue bg-white/50 px-6 py-4 rounded-xl border border-white/60">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue" /> Nettoyage de fin de chantier systématique
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue" /> Suivi post-travaux & SAV
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
