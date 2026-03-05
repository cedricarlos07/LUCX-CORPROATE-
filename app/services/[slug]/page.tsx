import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: 'Service introuvable | LUCX CORPORATE',
    };
  }

  return {
    title: `${service.title} | LUCX CORPORATE`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} - LUCX CORPORATE`,
      description: service.subtitle,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={`Illustration du service ${service.title} par LUCX CORPORATE`}
            fill
            className="object-cover opacity-20"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/80 to-slate-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/#services" className="inline-flex items-center text-brand-yellow hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux expertises
          </Link>
          
          <div className="flex justify-center mb-8">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 ${service.color} bg-white shadow-xl`}>
              <Icon className="w-10 h-10" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative -mt-10 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="prose prose-lg prose-slate max-w-none mb-12">
              {service.content.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-12">
              <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">
                Nos Prestations Détaillées
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            {service.gallery && service.gallery.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">
                  Nos Réalisations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {service.gallery.map((imgUrl, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <Image
                        src={imgUrl}
                        alt={`Réalisation ${service.title} - Projet ${index + 1} par LUCX CORPORATE`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Studies */}
            {service.caseStudies && service.caseStudies.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">
                  Études de Cas
                </h3>
                <div className="space-y-8">
                  {service.caseStudies.map((study, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col md:flex-row">
                      <div className="md:w-2/5 relative min-h-[250px] md:min-h-full">
                        <Image
                          src={study.image}
                          alt={`Étude de cas : ${study.title}`}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif">{study.title}</h4>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                            Client : {study.client}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-yellow/20 text-brand-blue">
                            Durée : {study.duration}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          {study.description}
                        </p>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900 mb-2">Résultats clés :</h5>
                          <ul className="space-y-1">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-light transition-all shadow-lg shadow-brand-blue/20"
              >
                Demander un devis pour ce service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
