'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Hammer, Leaf, Zap, Droplets, PaintRoller, Lock, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Rénovation Bâtiment',
    slug: 'renovation-batiment',
    icon: Hammer,
    description: 'Réhabilitation complète de logements, bureaux, commerces, locaux techniques. Rénovation intérieure et extérieure, ravalement de façades, isolation, maçonnerie.',
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    hover: 'hover:bg-orange-600 hover:text-white',
  },
  {
    title: 'Aménagement Extérieur & Paysagisme',
    slug: 'amenagement-exterieur-paysagisme',
    icon: Leaf,
    description: 'Conception et entretien de jardins, plantation, création d’espaces verts, pose de gazon, arrosage automatique, maçonnerie paysagère.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    hover: 'hover:bg-emerald-600 hover:text-white',
  },
  {
    title: 'Électricité, Plomberie & Climatisation',
    slug: 'electricite-plomberie-climatisation',
    icon: Zap,
    description: 'Installation complète, éclairage, domotique. Réseaux d’alimentation, sanitaires. Pose de climatiseurs, maintenance, solutions réversibles.',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    hover: 'hover:bg-blue-600 hover:text-white',
  },
  {
    title: 'Finition – Carrelage & Peinture',
    slug: 'finition-carrelage-peinture',
    icon: PaintRoller,
    description: 'Pose sols et murs (céramique, pierre), chapes, terrasses. Préparation des supports, peinture intérieure/extérieure, revêtements décoratifs.',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    hover: 'hover:bg-purple-600 hover:text-white',
  },
  {
    title: 'Sécurité Électronique',
    slug: 'securite-electronique',
    icon: Lock,
    description: 'Installation de caméras IP/HD, systèmes d’alarme, barbelés (Concertina, électrifiés), contrôle d’accès, maintenance et télésurveillance.',
    color: 'bg-red-50 text-red-600 border-red-200',
    hover: 'hover:bg-red-600 hover:text-white',
  },
  {
    title: 'Ferronnerie & Métallerie',
    slug: 'ferronnerie-metallerie',
    icon: Wrench,
    description: 'Fabrication sur mesure (grilles, portails, rampes), pose de clôtures, structures métalliques, réparation, traitement anti-corrosion.',
    color: 'bg-slate-100 text-slate-700 border-slate-300',
    hover: 'hover:bg-slate-700 hover:text-white',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3"
          >
            Domaines de Compétence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif font-bold text-slate-900 sm:text-5xl mb-6"
          >
            Nos Pôles d&apos;Expertise
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Les prestations sont organisées par pôles métiers pour une meilleure lisibilité et une efficacité optimale sur le terrain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110`} />

              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 border ${service.color} transition-colors duration-300 ${service.hover}`}>
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              <Link href={`/services/${service.slug}`} className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-brand-blue group-hover:text-brand-yellow transition-colors">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Methodology Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-brand-blue rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url(/service_pattern.png)] opacity-10 mix-blend-overlay" />

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
              Notre Méthodologie d&apos;Intervention
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-medium text-brand-yellow">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-blue flex items-center justify-center text-xs font-bold">1</span>
                Visite technique
              </span>
              <ArrowRight className="w-5 h-5 text-white/50 hidden md:block" />
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-blue flex items-center justify-center text-xs font-bold">2</span>
                Analyse & Devis
              </span>
              <ArrowRight className="w-5 h-5 text-white/50 hidden md:block" />
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-blue flex items-center justify-center text-xs font-bold">3</span>
                Planification
              </span>
              <ArrowRight className="w-5 h-5 text-white/50 hidden md:block" />
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-blue flex items-center justify-center text-xs font-bold">4</span>
                Réalisation
              </span>
              <ArrowRight className="w-5 h-5 text-white/50 hidden md:block" />
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-blue flex items-center justify-center text-xs font-bold">5</span>
                Réception
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
