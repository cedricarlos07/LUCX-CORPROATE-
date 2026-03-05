'use client';

import { motion } from 'motion/react';
import { Building, Droplets, Zap, Paintbrush, Lock, Hammer, FileText } from 'lucide-react';
import Image from 'next/image';

type ReferenceItem = {
  title: string;
  location?: string;
  date?: string;
  image?: string;
  description?: string;
};

type ReferenceCategory = {
  category: string;
  icon: any;
  items: ReferenceItem[];
};

const references: ReferenceCategory[] = [
  {
    category: 'Rénovation',
    icon: Building,
    items: [
      {
        title: 'Rénovation Complète d’un penthouse',
        location: 'Abidjan Feh Kesseh',
        date: 'Avril à Septembre 2025',
        image: '/ref_renovation.png',
      },
      {
        title: 'Les Résidences Green Golf',
        description: 'Installation de réseaux de gaines, raccordement groupes froids et cassettes. Maintenance assurée jusqu’en fin 2023 (sous-traité avec KKD Services)',
        location: 'Abidjan Riviera Golf (derrière l’Ambassade des USA)',
        date: '2020 à 2021',
        image: '/hero_bg.png',
      },
    ],
  },
  {
    category: 'Plomberie',
    icon: Droplets,
    items: [
      {
        title: 'Installation complète des réseaux d’alimentation et d’évacuation',
        description: 'Pose de tuyauterie multicouche, robinetterie, chauffe-eau, sanitaires',
        image: '/ref_plumbing.png',
      },
    ],
  },
  {
    category: 'Électricité',
    icon: Zap,
    items: [
      {
        title: 'Installation complète d’un réseau électrique domestique',
        description: 'de 7 chambres',
        location: 'Yamoussoukro',
        image: '/ref_electricity.png',
      },
      {
        title: 'Audit, Achat et installation d’un stabilisateur 50 KVA et de 03 Onduleurs',
        description: 'pour UPC/PPRC a titre de régulation',
        image: '/ref_electricity.png',
      },
    ],
  },
  {
    category: 'Peinture',
    icon: Paintbrush,
    items: [
      {
        title: 'Peinture intérieure et extérieure des logements',
        location: 'Institut National de Formation Judiciaire',
        date: 'Rentrée 2022-2023',
        image: '/ref_painting.png',
      },
    ],
  },
  {
    category: 'Sécurité',
    icon: Lock,
    items: [
      {
        title: 'Installation de barbelés Pikot et Concertina',
        description: 'Installation de barbelés Pikot sur un terrain de 10 000 m². Pose de barbelés Concertina sur les clôtures de 7 410 m².',
        location: 'Site industriel SEAFEL SARL à Gogokro, région de Yamoussoukro',
        date: 'Mai à Septembre 2025 (en deux phases)',
        image: '/ref_security.png',
      },
    ],
  },
  {
    category: 'Ferronnerie',
    icon: Hammer,
    items: [
      {
        title: 'Conception et pose de portails métalliques',
        description: 'Fabrication de grilles de protection, fenêtres métalliques. Réalisation de garde-corps et rampes d’escaliers.',
        image: '/ref_metalwork.png',
      },
    ],
  },
  {
    category: 'Contrats de Maintenance',
    icon: FileText,
    items: [
      {
        title: 'Maintenance annuelle et Installation ci besoin (2024)',
        location: 'Siège de la Programme Pays de Renforcement des Capacités en Côte d’Ivoire (PPRC)',
        description: 'Climatisation, électricité, plomberie, vidéosurveillance',
        image: '/ref_maintenance.png',
      },
      {
        title: 'Contrat d’entretien et d’aménagement Annuel des espaces verts',
        location: 'Institut National de Formation Judiciaire (Yamoussoukro et Abidjan)',
        date: 'depuis Fevrier 2025 a ce jour',
      },
      {
        title: 'Attestations des travaux',
        location: 'KKD Services',
      },
    ],
  },
];

export default function References() {
  return (
    <section id="references" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3"
          >
            Références & Réalisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif font-bold text-slate-900 sm:text-5xl mb-6"
          >
            Nos Projets Marquants
          </motion.p>
        </div>

        <div className="space-y-24">
          {references.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-4 border-b border-slate-200 pb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-brand-yellow flex items-center justify-center shadow-md">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
                    {item.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`Réalisation LUCX CORPORATE : ${item.title}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-slate-900 mb-2 font-serif leading-tight">{item.title}</h4>
                      {item.description && <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.description}</p>}

                      <div className="mt-auto space-y-2">
                        {item.location && (
                          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                            {item.location}
                          </div>
                        )}
                        {item.date && (
                          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                            {item.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
