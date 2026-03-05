'use client';

import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/#home" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-blue text-brand-yellow font-serif font-bold text-xl rounded-sm">
                LC
              </div>
              <div className="flex flex-col text-white">
                <span className="font-serif font-bold text-xl leading-none tracking-wider">LUCX</span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-brand-yellow">CORPORATE</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Entreprise spécialisée dans les travaux de second œuvre du bâtiment. Rénovation, aménagements, installations techniques, sécurité.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liens Rapides</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#about" className="hover:text-brand-yellow transition-colors">À Propos</a></li>
              <li><a href="/#services" className="hover:text-brand-yellow transition-colors">Nos Expertises</a></li>
              <li><a href="/#resources" className="hover:text-brand-yellow transition-colors">Moyens & Ressources</a></li>
              <li><a href="/#references" className="hover:text-brand-yellow transition-colors">Réalisations</a></li>
              <li><a href="/#contact" className="hover:text-brand-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Nos Pôles</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/services/renovation-batiment" className="hover:text-brand-yellow transition-colors">Rénovation Bâtiment</a></li>
              <li><a href="/services/amenagement-exterieur-paysagisme" className="hover:text-brand-yellow transition-colors">Aménagement Extérieur</a></li>
              <li><a href="/services/electricite-plomberie-climatisation" className="hover:text-brand-yellow transition-colors">Électricité & Plomberie</a></li>
              <li><a href="/services/finition-carrelage-peinture" className="hover:text-brand-yellow transition-colors">Finition & Peinture</a></li>
              <li><a href="/services/securite-electronique" className="hover:text-brand-yellow transition-colors">Sécurité Électronique</a></li>
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Documents Administratifs</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Registre de Commerce</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Déclaration Fiscale d’Existence</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Attestation de Régularité Fiscale</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Attestation CNPS</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Quitus de non Redevance ANRMP</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} LUCX CORPORATE. Tous droits réservés.</p>
          <p>Faites votre choix avec joie.</p>
        </div>
      </div>
    </footer>
  );
}
