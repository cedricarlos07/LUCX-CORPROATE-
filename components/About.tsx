'use client';

import { motion } from 'motion/react';
import { Building2, Users, Target, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    name: 'Polyvalence',
    description: 'Une structure polyvalente s’appuyant sur la complémentarité de ses pôles techniques.',
    icon: Building2,
  },
  {
    name: 'Expertise',
    description: 'Une équipe confirmée mettant à disposition son savoir-faire dans de multiples domaines.',
    icon: Users,
  },
  {
    name: 'Solutions Globales',
    description: 'Des propositions adaptées aux besoins spécifiques de chaque projet, clé en main.',
    icon: Target,
  },
  {
    name: 'Confiance',
    description: 'Interventions auprès des particuliers, entreprises et collectivités avec rigueur.',
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/blueprint/1920/1080')] opacity-5 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
              À Propos de Nous
            </h2>
            <p className="mt-2 text-4xl font-serif font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              LUCX CORPORATE
            </p>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                Créée en 2020 et dirigée par <strong className="text-brand-blue">KEITA Hamed Luc</strong>, LUCX CORPORATE est une SARL spécialisée dans les travaux de second œuvre du bâtiment.
              </p>
              <p>
                Notre équipe met à disposition son savoir-faire dans les domaines de la rénovation, des aménagements intérieurs et extérieurs, des installations techniques (électricité, plomberie, climatisation), ainsi que des systèmes de sécurité et autres prestations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-12">
                  <dt>
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-brand-yellow">
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="font-semibold text-slate-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.description}</dd>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group">
              <Image
                src="https://picsum.photos/seed/architecture/800/1000"
                alt="Bâtiment moderne rénové par les experts de LUCX CORPORATE"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-brand-yellow">
                  <p className="text-brand-blue font-serif font-bold text-2xl mb-2">Notre Vision</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Devenir le partenaire de référence pour tous vos travaux de second œuvre, en alliant innovation technique et respect des traditions artisanales.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-blue rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
