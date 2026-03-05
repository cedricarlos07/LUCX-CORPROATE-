'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Rénovation Bâtiment',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Demande de devis - ${formData.service} - ${formData.firstName} ${formData.lastName}`;
    const body = `
Nom : ${formData.lastName}
Prénom : ${formData.firstName}
E-mail : ${formData.email}
Service concerné : ${formData.service}

Message :
${formData.message}
    `.trim();

    const mailtoLink = `mailto:infos@lucx-corporate.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
              Contactez-Nous
            </h2>
            <p className="mt-2 text-4xl font-serif font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Prêt à Démarrer Votre Projet ?
            </p>
            <p className="text-lg text-slate-600 mb-12">
              Notre équipe est à votre disposition pour étudier vos besoins et vous proposer des solutions sur mesure.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Adresse</h3>
                  <p className="text-slate-600">Cocody, Cité Sir</p>
                  <p className="text-slate-600">Abidjan, Côte d&apos;Ivoire</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Téléphone</h3>
                  <a href="tel:0799704714" className="text-brand-blue font-semibold hover:underline text-lg">
                    07 99 70 47 14
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">E-mail</h3>
                  <a href="mailto:infos@lucx-corporate.co" className="text-brand-blue font-semibold hover:underline">
                    infos@lucx-corporate.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Site Web</h3>
                  <a href="https://www.lucx-corporate.co" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:underline">
                    www.lucx-corporate.co
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
          >
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Demander un Devis</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service concerné</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white"
                >
                  <option value="Rénovation Bâtiment">Rénovation Bâtiment</option>
                  <option value="Aménagement Extérieur & Paysagisme">Aménagement Extérieur & Paysagisme</option>
                  <option value="Électricité, Plomberie & Climatisation">Électricité, Plomberie & Climatisation</option>
                  <option value="Finition – Carrelage & Peinture">Finition – Carrelage & Peinture</option>
                  <option value="Sécurité Électronique">Sécurité Électronique</option>
                  <option value="Ferronnerie & Métallerie">Ferronnerie & Métallerie</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl hover:bg-brand-blue-light transition-colors shadow-lg shadow-brand-blue/20"
              >
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
