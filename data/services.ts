import { Hammer, Leaf, Zap, PaintRoller, Lock, Wrench } from 'lucide-react';

export const servicesData = [
  {
    slug: 'renovation-batiment',
    title: 'Rénovation Bâtiment',
    subtitle: 'L\'art de redonner vie à vos espaces',
    icon: Hammer,
    image: '/service_renovation_hero.png',
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    content: [
      "LUCX CORPORATE excelle dans la réhabilitation complète et la rénovation de tous types de bâtiments : logements résidentiels, espaces de bureaux, locaux commerciaux et installations techniques. Notre approche globale nous permet de prendre en charge l'intégralité de votre projet, de la conception à la livraison.",
      "Nous intervenons sur la rénovation intérieure (redistribution des espaces, isolation, plâtrerie) et extérieure (ravalement de façades, étanchéité, toiture). Nos équipes de maçons qualifiés réalisent également tous les travaux de gros œuvre et de reprise de structure nécessaires pour garantir la solidité et la pérennité de votre bâti.",
      "Chaque projet fait l'objet d'une étude personnalisée pour vous proposer des solutions techniques et esthétiques adaptées à vos besoins, tout en respectant les normes en vigueur et les contraintes de votre budget."
    ],
    features: [
      "Réhabilitation complète de logements, bureaux, commerces",
      "Rénovation intérieure et extérieure",
      "Ravalement de façades",
      "Travaux d'isolation thermique et phonique",
      "Travaux de maçonnerie et reprises de structure"
    ],
    gallery: [
      '/ref_renovation.png',
      '/about_vision.png',
      '/hero_bg.png'
    ],
    caseStudies: [
      {
        title: "Rénovation Complète d'un Penthouse",
        client: "Particulier (Abidjan Feh Kesseh)",
        duration: "6 mois (Avril - Septembre 2025)",
        description: "Réhabilitation totale d'un penthouse incluant la redistribution des pièces, la réfection des réseaux, l'isolation thermique et phonique, ainsi que l'aménagement complet des espaces de vie avec des finitions haut de gamme.",
        results: [
          "Optimisation de l'espace de vie et de la luminosité",
          "Mise aux normes complète des installations",
          "Livraison dans les délais impartis avec un niveau de finition premium"
        ],
        image: "/service_renovation_case.png"
      }
    ]
  },
  {
    slug: 'amenagement-exterieur-paysagisme',
    title: 'Aménagement Extérieur & Paysagisme',
    subtitle: 'Créez un environnement extérieur qui vous ressemble',
    icon: Leaf,
    image: '/service_landscaping_hero.png',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    content: [
      "L'aménagement extérieur est le prolongement naturel de votre espace de vie ou de travail. Chez LUCX CORPORATE, nous concevons et réalisons des aménagements paysagers sur mesure qui valorisent votre patrimoine et améliorent votre cadre de vie.",
      "Notre expertise couvre la conception de jardins, la sélection et la plantation de végétaux adaptés au climat local (arbres, arbustes, haies, massifs fleuris), ainsi que la pose de gazon naturel ou synthétique de haute qualité.",
      "Pour garantir la pérennité de vos espaces verts, nous installons des systèmes d'arrosage automatique performants et économes en eau. Nous réalisons également tous les travaux de maçonnerie paysagère : création d'allées, pose de bordures, construction de murets de soutènement ou décoratifs. Enfin, nous proposons des contrats d'entretien régulier (tonte, élagage, débroussaillage) pour préserver la beauté de vos extérieurs tout au long de l'année."
    ],
    features: [
      "Conception et entretien de jardins",
      "Plantation de végétaux, arbres, haies",
      "Création d'espaces verts et massifs fleuris",
      "Pose de gazon naturel ou synthétique",
      "Installation de systèmes d'arrosage automatique",
      "Maçonnerie paysagère (allées, bordures, murets)",
      "Entretien (tonte, élagage, débroussaillage)"
    ],
    gallery: [
      '/service_landscaping_case.png',
      '/hero_bg.png',
      '/about_vision.png'
    ],
    caseStudies: [
      {
        title: "Aménagement Paysager d'un Siège Social",
        client: "Entreprise Privée",
        duration: "2 mois",
        description: "Conception et réalisation des espaces verts extérieurs d'un siège social, incluant la plantation d'arbres endémiques, la création de zones de détente pour les employés et l'installation d'un système d'arrosage automatique intelligent.",
        results: [
          "Création d'un environnement de travail apaisant",
          "Réduction de 30% de la consommation d'eau grâce à l'arrosage intelligent",
          "Valorisation esthétique du bâtiment"
        ],
        image: "/service_landscaping_case.png"
      }
    ]
  },
  {
    slug: 'electricite-plomberie-climatisation',
    title: 'Électricité, Plomberie & Climatisation',
    subtitle: 'Le cœur technique de votre bâtiment',
    icon: Zap,
    image: '/service_mep_hero.png',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    content: [
      "Les lots techniques sont essentiels au confort et à la sécurité de tout bâtiment. LUCX CORPORATE dispose d'équipes spécialisées pour répondre à l'ensemble de vos besoins en électricité, plomberie et climatisation.",
      "En électricité, nous réalisons des installations complètes (courants forts et faibles), la mise aux normes de tableaux électriques, l'installation d'éclairages intérieurs et extérieurs, ainsi que l'intégration de solutions domotiques pour une gestion intelligente de vos équipements.",
      "Côté plomberie, nous prenons en charge la création et la rénovation des réseaux d'alimentation en eau et d'évacuation, l'installation d'équipements sanitaires, la pose de chauffe-eau et la recherche et réparation de fuites.",
      "Pour votre confort thermique, nos frigoristes experts assurent la pose, la mise en service et la maintenance de systèmes de climatisation (split, armoire, systèmes réversibles) adaptés aux environnements résidentiels, tertiaires et industriels."
    ],
    features: [
      "Électricité : Installation complète, éclairage, domotique",
      "Plomberie : Réseaux d'alimentation, sanitaires, chauffe-eau",
      "Climatisation : Pose de climatiseurs, maintenance, solutions réversibles"
    ],
    gallery: [
      '/ref_plumbing.png',
      '/ref_electricity.png',
      '/service_mep_case.png'
    ],
    caseStudies: [
      {
        title: "Installation CVC et Électrique - Les Résidences Green Golf",
        client: "Promoteur Immobilier (Riviera Golf)",
        duration: "1 an (2020 - 2021)",
        description: "Installation complète des réseaux de gaines, raccordement des groupes froids et cassettes de climatisation pour un ensemble résidentiel de haut standing. Déploiement du réseau électrique domestique et mise en place d'un contrat de maintenance.",
        results: [
          "Confort thermique optimal pour l'ensemble des résidents",
          "Efficacité énergétique des installations",
          "Maintenance préventive assurée avec zéro panne majeure"
        ],
        image: "/hero_bg.png"
      },
      {
        title: "Sécurisation Électrique pour l'UPC/PPRC",
        client: "Institution Publique",
        duration: "1 mois",
        description: "Audit énergétique, fourniture et installation d'un stabilisateur de 50 KVA et de 3 onduleurs haute capacité pour réguler et sécuriser l'alimentation électrique des serveurs et équipements sensibles.",
        results: [
          "Protection totale contre les fluctuations de tension",
          "Continuité de service garantie (100% d'uptime)",
          "Allongement de la durée de vie des équipements informatiques"
        ],
        image: "/service_mep_case.png"
      }
    ]
  },
  {
    slug: 'finition-carrelage-peinture',
    title: 'Finition – Carrelage & Peinture',
    subtitle: 'La touche finale qui sublime vos espaces',
    icon: PaintRoller,
    image: '/service_finishing_hero.png',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    content: [
      "Les travaux de finition requièrent minutie, précision et un sens aigu de l'esthétique. LUCX CORPORATE met à votre disposition des artisans carreleurs et peintres expérimentés pour sublimer vos intérieurs et extérieurs.",
      "Nous maîtrisons la pose de tous types de revêtements de sols et de murs : carrelage céramique, grès cérame, faïence, pierre naturelle, marbre. Nous réalisons également les travaux préparatoires indispensables (chapes maigres, ragréages, étanchéité) pour garantir un résultat impeccable et durable, y compris pour vos terrasses et espaces humides.",
      "En peinture, nous accordons une importance primordiale à la préparation des supports (enduits, ponçage, traitement anti-humidité). Nous appliquons des peintures de haute qualité (acrylique, glycéro, époxy) et réalisons des revêtements décoratifs sophistiqués (stucco, effet béton, tadelakt) pour créer des ambiances uniques qui reflètent votre identité."
    ],
    features: [
      "Carrelage : Pose sols et murs (céramique, pierre naturelle)",
      "Chapes maigres, ragréages, joints",
      "Terrasses carrelées",
      "Peinture : Préparation des supports (enduits, ponçage)",
      "Peinture intérieure/extérieure",
      "Revêtements décoratifs (stucco, effet béton)"
    ],
    gallery: [
      '/ref_painting.png',
      '/about_vision.png',
      '/hero_bg.png'
    ],
    caseStudies: [
      {
        title: "Rénovation des Finitions - Institut National de Formation Judiciaire",
        client: "Institution Publique (Yamoussoukro)",
        duration: "3 mois (Rentrée 2022-2023)",
        description: "Travaux de peinture intérieure et extérieure pour l'ensemble des logements de l'institut. Préparation minutieuse des supports, traitement anti-humidité et application de peintures haute résistance adaptées aux zones à fort passage.",
        results: [
          "Rafraîchissement complet des infrastructures d'accueil",
          "Protection durable des façades contre les intempéries",
          "Respect strict du calendrier avant la rentrée académique"
        ],
        image: "/ref_painting.png"
      }
    ]
  },
  {
    slug: 'securite-electronique',
    title: 'Sécurité Électronique',
    subtitle: 'Protégez ce qui compte le plus pour vous',
    icon: Lock,
    image: '/ref_security.png',
    color: 'bg-red-50 text-red-600 border-red-200',
    content: [
      "Face aux enjeux croissants de sécurité, LUCX CORPORATE vous accompagne dans la protection de vos biens, de vos collaborateurs et de vos proches grâce à des solutions de sécurité électronique de pointe.",
      "Nous concevons et installons des systèmes de vidéosurveillance sur mesure, intégrant des caméras IP/HD haute résolution avec vision nocturne et accès à distance via smartphone ou ordinateur. Nos systèmes d'alarme anti-intrusion, filaires ou sans fil, détectent toute tentative d'effraction et vous alertent en temps réel.",
      "Pour la protection périmétrique de vos sites (résidences, usines, entrepôts), nous installons des barbelés de haute sécurité (Concertina, barbelés électrifiés) et des piquets de sécurité robustes. Nous déployons également des solutions de contrôle d'accès performantes (digicode, lecteurs de badges, biométrie, interphones vidéo) pour gérer et tracer les flux de personnes. Nos contrats de maintenance garantissent le bon fonctionnement continu de vos installations."
    ],
    features: [
      "Installation de caméras de surveillance IP/HD",
      "Systèmes d'alarme anti-intrusion",
      "Installation de barbelés Concertina, barbelés électrifiés",
      "Contrôle d'accès (digicode, badge, interphone)",
      "Maintenance et télésurveillance"
    ],
    gallery: [
      '/ref_security.png',
      '/hero_bg.png',
      '/about_vision.png'
    ],
    caseStudies: [
      {
        title: "Sécurisation Périmétrique du Site Industriel SEAFEL",
        client: "SEAFEL SARL (Gogokro)",
        duration: "5 mois (Mai - Septembre 2025)",
        description: "Projet de sécurisation de grande envergure réalisé en deux phases : installation de barbelés Pikot sur un terrain de 10 000 m² et pose de barbelés Concertina sur 7 410 m² de clôtures existantes pour prévenir toute intrusion.",
        results: [
          "Sécurisation totale du périmètre industriel",
          "Effet dissuasif immédiat contre les tentatives d'effraction",
          "Installation robuste conçue pour résister aux conditions extrêmes"
        ],
        image: "/ref_security.png"
      }
    ]
  },
  {
    slug: 'ferronnerie-metallerie',
    title: 'Ferronnerie & Métallerie',
    subtitle: 'La robustesse du métal alliée à l\'élégance du design',
    icon: Wrench,
    image: '/ref_metalwork.png',
    color: 'bg-slate-100 text-slate-700 border-slate-300',
    content: [
      "Le pôle Ferronnerie & Métallerie de LUCX CORPORATE conçoit, fabrique et installe des ouvrages métalliques sur mesure qui allient sécurité, durabilité et esthétisme.",
      "Nos artisans métalliers travaillent l'acier, l'aluminium et l'inox pour réaliser une grande variété de structures : portails coulissants ou battants (motorisables), grilles de protection, portes blindées, garde-corps pour balcons et terrasses, rampes d'escaliers, et clôtures métalliques.",
      "Nous réalisons également des structures métalliques légères pour des extensions, des auvents ou des mezzanines. Chaque pièce est fabriquée avec précision dans nos ateliers, puis traitée contre la corrosion (galvanisation, peinture époxy, thermolaquage) pour résister aux intempéries et à l'épreuve du temps. Nous intervenons aussi pour la réparation et le renforcement de structures métalliques existantes."
    ],
    features: [
      "Fabrication sur mesure : grilles, portails, rampes, garde-corps",
      "Pose de clôtures métalliques",
      "Structures métalliques légères",
      "Réparation et renforcement",
      "Traitement anti-corrosion"
    ],
    gallery: [
      '/ref_metalwork.png',
      '/ref_maintenance.png',
      '/hero_bg.png'
    ],
    caseStudies: [
      {
        title: "Conception d'Ouvrages Métalliques pour Résidence de Luxe",
        client: "Particulier",
        duration: "2 mois",
        description: "Fabrication sur mesure et pose d'un portail coulissant motorisé, de grilles de protection stylisées pour les fenêtres du rez-de-chaussée, et de garde-corps en acier thermolaqué pour les balcons et la terrasse.",
        results: [
          "Harmonie architecturale respectée grâce au design sur mesure",
          "Niveau de sécurité maximal",
          "Finitions durables avec traitement anti-corrosion garanti"
        ],
        image: "/ref_metalwork.png"
      }
    ]
  }
];
