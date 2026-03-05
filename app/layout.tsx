import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'LUCX CORPORATE | Travaux de Second Œuvre du Bâtiment en Côte d\'Ivoire',
  description: 'LUCX CORPORATE est une entreprise experte en travaux de second œuvre du bâtiment à Abidjan. Rénovation, aménagement, électricité, plomberie, climatisation et sécurité.',
  keywords: 'second œuvre, bâtiment, rénovation, aménagement extérieur, électricité, plomberie, climatisation, sécurité électronique, ferronnerie, Abidjan, Côte d\'Ivoire, LUCX CORPORATE',
  openGraph: {
    title: 'LUCX CORPORATE | Experts en Second Œuvre',
    description: 'Solutions globales et sur mesure pour vos travaux de second œuvre, rénovation et aménagement en Côte d\'Ivoire.',
    type: 'website',
    locale: 'fr_CI',
    siteName: 'LUCX CORPORATE',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans">{children}</body>
    </html>
  );
}
