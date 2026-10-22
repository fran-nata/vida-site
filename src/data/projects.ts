/**
 * Project case studies ("Projets et résultats").
 *
 * To add a project: copy the object below, give it a new id + mediaDir, fill in the copy
 * for BOTH languages, and drop the photos/videos into public/<mediaDir>/ using the file names
 * listed in `media`. Pages, cards, the homepage feature and the sitemap pick it up automatically.
 * Missing files render as clearly labelled placeholders (and log a warning at build time).
 */
export type L = { fr: string; en: string };

export interface ProjectImage {
  /** File name inside the project's mediaDir. */
  file: string;
  alt: L;
  /** Short visible label shown under the image. */
  caption: L;
}
export interface ProjectVideo {
  /** File name inside the project's mediaDir, or a full https:// URL for externally hosted video. */
  file: string;
  /** Optional poster image file name (same folder). */
  poster?: string;
  title: L;
  description: L;
}
export interface Point {
  title: string;
  text: string;
}
export interface ProjectCopy {
  slug: string;
  title: string;
  intro: string;
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  overview: { label: string; value: string }[];
  challenge: { title: string; intro: string; points: Point[] };
  intervention: { title: string; intro: string; points: string[]; howItWorksTitle: string; howItWorks: string };
  results: { title: string; intro: string; points: Point[]; privacyTitle: string; privacyNote: string };
  /** Matched before/after pairs shown side by side. */
  pairs?: { title: string; intro: string; beforeTag: string; afterTag: string };
  /** One featured window: before/after plus an optional exterior view. */
  highlight?: { eyebrow: string; title: string; intro: string; bullets: string[]; beforeTag: string; afterTag: string; exteriorTag: string };
  beforeAfter?: { title: string; intro: string; beforeTitle: string; afterTitle: string; beforeTag: string; afterTag: string };
  insideOut?: { title: string; intro: string; insideTag: string; outsideTag: string };
  sideBySide?: { title: string; intro: string; tag: string };
  videos?: { title: string; intro: string };
  cta: { title: string; text: string; button: string };
}
export interface Project {
  id: string;
  mediaDir: string;
  type: 'commercial' | 'residential';
  published: boolean;
  media: {
    hero: ProjectImage;
    pairs?: { before: ProjectImage; after: ProjectImage }[];
    highlight?: { before: ProjectImage; after: ProjectImage; exterior?: ProjectImage };
    before?: ProjectImage[];
    after?: ProjectImage[];
    insideOut?: { inside: ProjectImage; outside: ProjectImage };
    sideBySide?: ProjectImage[];
    videos?: ProjectVideo[];
  };
  fr: ProjectCopy;
  en: ProjectCopy;
}

export const projects: Project[] = [
  {
    id: 'clinique-dentaire',
    mediaDir: '/projets/clinique-dentaire',
    type: 'commercial',
    published: true,
    media: {
      hero: {
        file: 'hero.jpg',
        alt: {
          fr: "Vitrage d'angle de la clinique vu de l'extérieur : la pellicule réfléchissante renvoie le ciel, les arbres et les immeubles voisins",
          en: 'Corner glazing of the clinic seen from outside: the reflective film mirrors the sky, trees and neighbouring buildings',
        },
        caption: { fr: "Vitrage d'angle de la clinique, après l'installation", en: 'Corner glazing of the clinic, after installation' },
      },
      before: [
        {
          file: 'avant-1.jpg',
          alt: {
            fr: "Vitrage d'angle de la clinique vu de l'extérieur avant la pellicule, avec des stores qui masquent les vitres du bas",
            en: 'Corner glazing of the clinic seen from outside before the film, with shades covering the lower panes',
          },
          caption: { fr: "Vitrage d'angle vu de l'extérieur, avant la pellicule", en: 'Corner glazing seen from outside, before the film' },
        },
        {
          file: 'avant-2.jpg',
          alt: {
            fr: "Salle de traitement vue depuis la porte : stores enroulables baissés devant de grandes fenêtres d'angle, fauteuil dentaire vide",
            en: 'Treatment room seen from the doorway: roller shades pulled down over large corner windows, empty dental chair',
          },
          caption: { fr: 'Salle de traitement, avant : stores baissés devant les grandes fenêtres', en: 'Treatment room, before: shades down over the large windows' },
        },
        {
          file: 'avant-3.jpg',
          alt: {
            fr: "Grande fenêtre d'un espace de travail de la clinique, vue de l'intérieur, avec store partiellement relevé",
            en: 'Large window in a work area of the clinic, seen from inside, with the shade partly raised',
          },
          caption: { fr: "Fenêtre d'un espace de travail, avant la pellicule", en: 'Window in a work area, before the film' },
        },
      ],
      after: [
        {
          file: 'resultat-1.jpg',
          alt: {
            fr: "Vitrage d'angle de la clinique vu du trottoir, avec reflets des arbres et du ciel dans les vitres",
            en: 'Corner glazing of the clinic seen from the sidewalk, with trees and sky reflected in the glass',
          },
          caption: { fr: "Vitrage d'angle vu du trottoir, après", en: 'Corner glazing seen from the sidewalk, after' },
        },
        {
          file: 'resultat-2.jpg',
          alt: {
            fr: "Vue en contre-plongée du vitrage d'angle : bande de vitres plus claire en haut, vitres réfléchissantes en bas",
            en: 'Upward view of the corner glazing: a lighter band of glass above and mirror-like glass below',
          },
          caption: { fr: "Vue en contre-plongée du vitrage d'angle, après", en: 'Upward view of the corner glazing, after' },
        },
        {
          file: 'resultat-3.jpg',
          alt: {
            fr: 'Vitrage de la clinique vu de côté, avec reflets du terrain, des arbres et de la rue',
            en: 'Side view of the clinic glazing, reflecting the lawn, trees and street',
          },
          caption: { fr: 'Vitrage vu de côté, après', en: 'Glazing seen from the side, after' },
        },
      ],
      insideOut: {
        inside: {
          file: 'fenetre-interieur.jpg',
          alt: {
            fr: "Vue depuis l'intérieur d'une salle de traitement : la grande fenêtre laisse voir la rue, le terrain et les arbres",
            en: 'View from inside a treatment room: the large window shows the street, the lawn and the trees',
          },
          caption: { fr: "De l'intérieur : la vue reste dégagée", en: 'From inside: the view stays clear' },
        },
        outside: {
          file: 'fenetre-exterieur.jpg',
          alt: {
            fr: "La même fenêtre vue de l'extérieur : les vitres renvoient la rue, les arbres et le ciel",
            en: 'The same window seen from outside: the glass mirrors the street, trees and sky',
          },
          caption: { fr: "De l'extérieur : la vitre renvoie la rue et les arbres", en: 'From outside: the glass mirrors the street and trees' },
        },
      },
      sideBySide: [
        {
          file: 'comparaison-1.jpg',
          alt: {
            fr: "Vue de l'intérieur d'une grande fenêtre à plusieurs vitres : des vitres avec pellicule et des vitres sans pellicule côte à côte, avec une flèche blanche ajoutée sur la photo",
            en: 'View from inside a large multi-pane window: panes with film and panes without film side by side, with a white arrow added to the photo',
          },
          caption: { fr: "Vitres avec et sans pellicule, côte à côte, vues de l'intérieur", en: 'Panes with and without film, side by side, seen from inside' },
        },
        {
          file: 'comparaison-2.jpg',
          alt: {
            fr: "Salle de traitement : dans le coin de fenêtres, une vitre sans pellicule laisse voir la rue nettement tandis que la vitre voisine, avec pellicule, renvoie un reflet",
            en: 'Treatment room: in the corner of windows, one pane without film shows the street clearly while the neighbouring pane, with film, shows a reflection',
          },
          caption: { fr: 'Salle de traitement : vitres avec et sans pellicule, côte à côte', en: 'Treatment room: panes with and without film, side by side' },
        },
      ],
      videos: [
        {
          file: 'https://assets.cdn.filesafe.space/Ca6Eop6IEwpdDw9Nce2y/media/6ada407d4a3f84ab597d9bad.mp4',
          title: { fr: 'Le choix de la pellicule', en: 'Choosing the film' },
          description: { fr: 'Explication du choix de la pellicule installée sur ce projet.', en: 'An explanation of the choice of film installed on this project.' },
        },
        {
          file: 'https://assets.cdn.filesafe.space/Ca6Eop6IEwpdDw9Nce2y/media/6ada405b4a6b87d2790a565f.mp4',
          title: { fr: 'Visite avant et après', en: 'Before-and-after walkthrough' },
          description: { fr: "Visite des lieux avant et après l'installation de la pellicule.", en: 'Walkthrough of the space before and after the film was installed.' },
        },
      ],
    },
    fr: {
      slug: 'clinique-dentaire',
      title: "Clinique dentaire : plus d'intimité et de confort, sans garder les rideaux fermés",
      intro:
        "De grandes fenêtres, des fauteuils de traitement visibles de l'extérieur et des pièces trop chaudes l'été. Une pellicule réfléchissante a permis à cette clinique de la région de Montréal de rouvrir ses rideaux le jour.",
      cardSummary:
        "Les fauteuils de traitement étaient visibles de l'extérieur et les rideaux restaient fermés. Avec la pellicule réfléchissante, la clinique peut les ouvrir le jour, dans des pièces plus confortables.",
      metaTitle: 'Clinique dentaire à Montréal : pellicule réfléchissante, intimité et confort | Vida Vitres',
      metaDescription:
        "Comment une pellicule réfléchissante a apporté plus d'intimité de jour et plus de confort à une clinique dentaire de la région de Montréal, rideaux ouverts. Photos et vidéos avant-après.",
      overview: [
        { label: 'Type de projet', value: 'Commercial' },
        { label: 'Secteur', value: 'Clinique dentaire' },
        { label: 'Lieu', value: 'Région de Montréal' },
        { label: 'Solution', value: 'Pellicule réfléchissante pour fenêtres' },
      ],
      challenge: {
        title: 'Des locaux lumineux, mais trop exposés et trop chauds',
        intro: 'Les locaux de la clinique sont récents et lumineux, avec de grandes fenêtres. Ces mêmes fenêtres créaient pourtant trois problèmes au quotidien.',
        points: [
          {
            title: "Des fauteuils visibles de l'extérieur",
            text: "Depuis l'extérieur, on pouvait voir les fauteuils de traitement : les patients se retrouvaient exposés aux regards. Pour compenser, la clinique gardait des rideaux fermés dans les espaces concernés.",
          },
          {
            title: 'Des écrans aperçus de dehors',
            text: "Certains écrans d'ordinateur fixés aux murs étaient visibles de l'extérieur, ce qui soulevait des préoccupations quant à la visibilité de renseignements sur les patients.",
          },
          {
            title: "Des pièces trop chaudes l'été",
            text: "Les pièces dotées de grandes fenêtres devenaient inconfortablement chaudes en été.",
          },
        ],
      },
      intervention: {
        title: 'Une pellicule réfléchissante, à l’intérieur ou à l’extérieur du verre',
        intro: "Vida Vitres a installé une pellicule réfléchissante sur les fenêtres du projet. Selon les vitres, la pellicule a été posée à l'intérieur ou à l'extérieur du verre.",
        points: [
          'Pellicule réfléchissante sur les fenêtres du projet',
          "Pose à l'intérieur pour certaines vitres, à l'extérieur pour d'autres",
          'Installation sur place par nos techniciens',
        ],
        howItWorksTitle: 'En termes simples',
        howItWorks:
          "Le jour, la pellicule réfléchit la lumière comme un miroir discret. Quand il fait plus clair dehors que dedans, il devient difficile de voir à l'intérieur, alors que la vue vers l'extérieur reste dégagée.",
      },
      results: {
        title: 'Ce que la clinique constate au quotidien',
        intro: "Observations rapportées par la clinique après l'installation. Ce sont des constats d'usage, pas des mesures prises avec des instruments.",
        points: [
          {
            title: 'Des températures plus constantes',
            text: "D'une pièce à l'autre, les températures sont plus constantes et le confort général est meilleur.",
          },
          {
            title: "Moins d'éblouissement pour l'équipe",
            text: "L'éblouissement réduit rend le poste de travail plus confortable pour le personnel. C'était un avantage inattendu, que l'équipe a particulièrement apprécié.",
          },
          {
            title: 'Des rideaux ouverts le jour',
            text: "La clinique peut maintenant ouvrir ses rideaux pendant la journée tout en profitant de l'intimité de jour qu'offre la pellicule.",
          },
        ],
        privacyTitle: "À savoir sur l'intimité",
        privacyNote:
          "L'effet réfléchissant dépend de l'éclairage : il fonctionne lorsqu'il fait plus clair à l'extérieur qu'à l'intérieur et ne garantit pas l'intimité en soirée ou la nuit. Une pellicule seule ne garantit pas non plus la confidentialité des renseignements des patients ni la conformité à la réglementation : elle s'ajoute aux autres mesures de la clinique.",
      },
      beforeAfter: {
        title: 'Avant et après',
        intro: "Photos du projet. Les angles de prise de vue diffèrent d'une image à l'autre : chaque photo est présentée séparément, avec son étiquette.",
        beforeTitle: "Avant l'installation",
        afterTitle: "Après l'installation",
        beforeTag: 'Avant',
        afterTag: 'Après',
      },
      insideOut: {
        title: "Même fenêtre, vue de l'intérieur et de l'extérieur",
        intro: "Deux photos prises à la même position, de part et d'autre de la vitre, en plein jour. L'effet réfléchissant dépend de l'éclairage.",
        insideTag: 'Intérieur',
        outsideTag: 'Extérieur',
      },
      sideBySide: {
        title: 'Avec et sans pellicule, côte à côte',
        intro: "Dans ces deux vues prises de l'intérieur, certaines vitres sont couvertes de pellicule et d'autres non : la différence se voit d'un seul coup d'œil.",
        tag: 'Comparaison',
      },
      videos: {
        title: 'Le projet en vidéo',
        intro: "Deux vidéos : le choix de la pellicule, puis une visite des lieux avant et après l'installation. Le son ne démarre jamais automatiquement : lancez la lecture quand vous le souhaitez.",
      },
      cta: {
        title: 'De grandes fenêtres, ça devrait être un avantage.',
        text: 'Parlons de votre projet.',
        button: 'Demander une estimation',
      },
    },
    en: {
      slug: 'dental-clinic',
      title: 'Dental clinic: more privacy and comfort, without keeping the curtains closed',
      intro:
        'Large windows, treatment chairs visible from outside and rooms that overheated in summer. Reflective window film let this Montreal-area clinic open its curtains again during the day.',
      cardSummary:
        'The treatment chairs could be seen from outside, so the curtains stayed closed. With reflective film, the clinic can open them during the day, in more comfortable rooms.',
      metaTitle: 'Dental Clinic, Montreal Area: Reflective Window Film for Privacy & Comfort | Vida Vitres',
      metaDescription:
        'How reflective window film brought more daytime privacy and comfort to a Montreal-area dental clinic, with the curtains open. Before-and-after photos and videos.',
      overview: [
        { label: 'Project type', value: 'Commercial' },
        { label: 'Sector', value: 'Dental clinic' },
        { label: 'Location', value: 'Montreal area' },
        { label: 'Solution', value: 'Reflective window film' },
      ],
      challenge: {
        title: 'Bright premises, but too exposed and too warm',
        intro: 'The clinic’s premises are new and bright, with large windows. Those same windows created three everyday problems.',
        points: [
          {
            title: 'Chairs visible from outside',
            text: 'People outside could see the treatment chairs, leaving patients exposed to outside views. To compensate, the clinic kept curtains closed in the affected spaces.',
          },
          {
            title: 'Screens seen from outside',
            text: 'Some wall-mounted computer screens were visible from outside, which raised concerns about the visibility of patient information.',
          },
          {
            title: 'Rooms too hot in summer',
            text: 'Rooms with large windows became uncomfortably hot during summer.',
          },
        ],
      },
      intervention: {
        title: 'Reflective film, inside or outside the glass',
        intro: 'Vida Vitres installed reflective window film across the project’s windows. Depending on the pane, the film went on the inside or the outside of the glass.',
        points: [
          'Reflective film across the project’s windows',
          'Interior installation on some panes, exterior on others',
          'Installed on site by our technicians',
        ],
        howItWorksTitle: 'In plain terms',
        howItWorks:
          'In daylight, the film reflects light like a discreet mirror. When it is brighter outside than inside, it becomes hard to see in, while the view out stays clear.',
      },
      results: {
        title: 'What the clinic notices every day',
        intro: 'Observations reported by the clinic after installation. These are everyday experiences, not instrument-measured results.',
        points: [
          {
            title: 'More consistent temperatures',
            text: 'Temperatures are more consistent from room to room, and overall comfort is better.',
          },
          {
            title: 'Less glare for the team',
            text: 'Reduced glare makes the workspace more comfortable for staff. It was an unexpected benefit that the team particularly appreciated.',
          },
          {
            title: 'Curtains open during the day',
            text: 'The clinic can now open its curtains during the day while benefiting from the film’s daytime privacy.',
          },
        ],
        privacyTitle: 'Good to know about privacy',
        privacyNote:
          'The reflective effect depends on lighting: it works when it is brighter outside than inside, and it does not guarantee privacy in the evening or at night. Film alone also does not guarantee the confidentiality of patient information or regulatory compliance: it complements the clinic’s other measures.',
      },
      beforeAfter: {
        title: 'Before and after',
        intro: 'Photos from the project. Camera angles differ from one image to the next, so each photo is shown on its own with its label.',
        beforeTitle: 'Before installation',
        afterTitle: 'After installation',
        beforeTag: 'Before',
        afterTag: 'After',
      },
      insideOut: {
        title: 'Same window, seen from inside and outside',
        intro: 'Two photos taken from the same position on either side of the glass, in daylight. The reflective effect depends on lighting.',
        insideTag: 'Inside',
        outsideTag: 'Outside',
      },
      sideBySide: {
        title: 'With and without film, side by side',
        intro: 'In these two views from inside, some panes are covered with film and others are not, so the difference is visible at a glance.',
        tag: 'Comparison',
      },
      videos: {
        title: 'The project on video',
        intro: 'Two videos: the choice of film, then a walkthrough of the space before and after installation. Sound never starts automatically: press play when you are ready.',
      },
      cta: {
        title: 'Large windows should be an advantage.',
        text: 'Let’s talk about your project.',
        button: 'Request an estimate',
      },
    },
  },
  {
    id: 'maison-coin-de-rue',
    mediaDir: '/projets/maison-coin-de-rue',
    type: 'residential',
    published: true,
    media: {
      hero: {
        file: 'hero.jpg',
        alt: {
          fr: 'Façade de la maison au coucher du soleil : la pellicule réfléchissante renvoie le ciel dans les grandes fenêtres',
          en: 'Front of the house at sunset: the reflective film mirrors the sky in the large windows',
        },
        caption: { fr: 'La maison après l’installation, au coucher du soleil', en: 'The house after installation, at sunset' },
      },
      pairs: [
        {
          before: {
            file: 'avant-exterieur.jpg',
            alt: {
              fr: 'Façade de la maison vue de l’extérieur avant la pellicule, avec les grandes fenêtres d’angle',
              en: 'Front of the house seen from outside before the film, with the large corner windows',
            },
            caption: { fr: 'Façade vue de l’extérieur, avant', en: 'Front of the house from outside, before' },
          },
          after: {
            file: 'apres-exterieur.jpg',
            alt: {
              fr: 'Façade de la maison vue de l’extérieur après la pellicule : les vitres renvoient la haie et la rue',
              en: 'Front of the house seen from outside after the film: the glass mirrors the hedge and the street',
            },
            caption: { fr: 'Façade vue de l’extérieur, après', en: 'Front of the house from outside, after' },
          },
        },
        {
          before: {
            file: 'avant-salon.jpg',
            alt: {
              fr: 'Coin salon vu de l’intérieur avant la pellicule : grandes fenêtres donnant sur la rue et le passage piéton',
              en: 'Living-room corner seen from inside before the film: large windows facing the street and the crosswalk',
            },
            caption: { fr: 'Salon vu de l’intérieur, avant', en: 'Living room from inside, before' },
          },
          after: {
            file: 'apres-salon.jpg',
            alt: {
              fr: 'Coin salon vu de l’intérieur après la pellicule : la vue sur la rue reste dégagée, rideau ouvert',
              en: 'Living-room corner seen from inside after the film: the view of the street stays clear, curtain open',
            },
            caption: { fr: 'Salon vu de l’intérieur, après : rideau ouvert, vue dégagée', en: 'Living room from inside, after: curtain open, clear view' },
          },
        },
      ],
      highlight: {
        before: {
          file: 'avant-triangle.jpg',
          alt: {
            fr: 'Grande fenêtre à sommet triangulaire de la cuisine, vue de l’intérieur, avant la pellicule',
            en: 'Tall triangular-topped kitchen window seen from inside, before the film',
          },
          caption: { fr: 'De l’intérieur, avant', en: 'From inside, before' },
        },
        after: {
          file: 'apres-triangle.jpg',
          alt: {
            fr: 'La même fenêtre à sommet triangulaire vue de l’intérieur après la pellicule, avec une vue dégagée sur la rue',
            en: 'The same triangular-topped window seen from inside after the film, with a clear view of the street',
          },
          caption: { fr: 'De l’intérieur, après : la vue reste dégagée', en: 'From inside, after: the view stays clear' },
        },
        exterior: {
          file: 'triangle-exterieur.jpg',
          alt: {
            fr: 'La fenêtre à sommet triangulaire vue de l’extérieur : la vitre renvoie le ciel et la rue',
            en: 'The triangular-topped window seen from outside: the glass mirrors the sky and the street',
          },
          caption: { fr: 'De l’extérieur, après : la vitre renvoie le ciel', en: 'From outside, after: the glass mirrors the sky' },
        },
      },
    },
    fr: {
      slug: 'maison-coin-de-rue',
      title: 'Maison de coin de rue : de grandes fenêtres, enfin libérées des rideaux',
      intro:
        "Des fenêtres neuves, cachées derrière de grands rideaux parce que la maison est au coin d'une rue passante. Une pellicule réfléchissante a redonné à la famille la lumière, la vue et plus d'intimité le jour.",
      cardSummary:
        "Sur un terrain de coin très exposé, de grands rideaux bloquaient des fenêtres neuves. Avec la pellicule réfléchissante, la lumière et la vue sont revenues, avec plus d'intimité le jour.",
      metaTitle: 'Maison de coin de rue : pellicule réfléchissante pour plus d’intimité et de confort | Vida Vitres',
      metaDescription:
        "Comment une pellicule réfléchissante a redonné intimité, lumière et confort à une maison de coin de rue de la région de Montréal, sans rideaux pour bloquer les fenêtres. Photos avant et après.",
      overview: [
        { label: 'Type de projet', value: 'Résidentiel' },
        { label: 'Secteur', value: 'Maison' },
        { label: 'Lieu', value: 'Région de Montréal' },
        { label: 'Solution', value: 'Pellicule réfléchissante pour fenêtres' },
      ],
      challenge: {
        title: 'De belles fenêtres neuves, cachées derrière de grands rideaux',
        intro: 'Ces propriétaires avaient de grandes fenêtres toutes neuves. Mais leur maison est située à un coin de rue très fréquenté.',
        points: [
          {
            title: 'Une maison vue de partout',
            text: "Le terrain est au coin d'une rue passante, près d'une piste cyclable et d'une école : de l'extérieur, tout le monde pouvait voir à l'intérieur.",
          },
          {
            title: 'De grands rideaux en permanence',
            text: "Pour retrouver de l'intimité, la famille utilisait de grands rideaux, qui bloquaient leurs nouvelles fenêtres.",
          },
          {
            title: 'Une fenêtre qui surchauffait la maison',
            text: 'La grande fenêtre à sommet triangulaire laissait passer beaucoup de soleil, ce qui rendait la maison très chaude.',
          },
        ],
      },
      intervention: {
        title: 'Une pellicule réfléchissante sur les fenêtres exposées',
        intro: 'Vida Vitres a installé une pellicule réfléchissante sur les fenêtres exposées de la maison, sans rien remplacer.',
        points: [
          'Pellicule réfléchissante sur les fenêtres exposées de la maison',
          'Fenêtre à sommet triangulaire incluse',
          'Installation sur place par nos techniciens',
        ],
        howItWorksTitle: 'En termes simples',
        howItWorks:
          "Le jour, la pellicule réfléchit la lumière comme un miroir discret. Quand il fait plus clair dehors que dedans, il devient difficile de voir à l'intérieur, alors que la vue vers l'extérieur reste dégagée.",
      },
      results: {
        title: 'Ce que la famille constate',
        intro: "Observations rapportées après l'installation. Ce sont des constats d'usage, pas des mesures prises avec des instruments.",
        points: [
          {
            title: 'Des fenêtres enfin dégagées',
            text: 'Les rideaux restent ouverts : la lumière et la vue sur l’extérieur sont revenues.',
          },
          {
            title: 'Plus d’intimité le jour',
            text: "De l'extérieur, les vitres renvoient la rue et le ciel : en plein jour, on ne voit plus à l'intérieur.",
          },
          {
            title: 'Une fenêtre qu’on peut enfin apprécier',
            text: "Le soleil qui surchauffait la maison par la fenêtre à sommet triangulaire n'est plus un problème : les propriétaires en profitent maintenant.",
          },
        ],
        privacyTitle: "À savoir sur l'intimité",
        privacyNote:
          "L'effet réfléchissant dépend de l'éclairage : il fonctionne lorsqu'il fait plus clair à l'extérieur qu'à l'intérieur et ne garantit pas l'intimité en soirée ou la nuit, lorsque l'intérieur est éclairé.",
      },
      pairs: {
        title: 'Avant et après, côte à côte',
        intro: "Des vues similaires de la maison, avant et après la pellicule. Les angles de prise de vue ne sont pas toujours identiques.",
        beforeTag: 'Avant',
        afterTag: 'Après',
      },
      highlight: {
        eyebrow: 'La fenêtre à sommet triangulaire',
        title: 'Une magnifique fenêtre, enfin agréable à vivre',
        intro:
          "Cette grande fenêtre laissait passer beaucoup de soleil et rendait la maison très chaude. Avec la pellicule, le problème est réglé et les propriétaires peuvent maintenant profiter de leur fenêtre et de la vue.",
        bullets: [
          'Avant : beaucoup de soleil direct et une maison très chaude',
          'Après : le problème est réglé, selon les propriétaires',
          "De l'extérieur, la vitre renvoie le ciel et la rue en plein jour",
        ],
        beforeTag: 'Avant',
        afterTag: 'Après',
        exteriorTag: 'Extérieur',
      },
      cta: {
        title: 'De grandes fenêtres, ça devrait être un avantage.',
        text: 'Parlons de votre projet.',
        button: 'Demander une estimation',
      },
    },
    en: {
      slug: 'corner-lot-home',
      title: 'Corner-lot home: large windows, finally free of curtains',
      intro:
        'New windows hidden behind big curtains because the house sits on a busy street corner. Reflective window film gave the family their light, their view and more daytime privacy back.',
      cardSummary:
        'On a very exposed corner lot, big curtains were blocking brand-new windows. With reflective film, the light and the view are back, with more privacy during the day.',
      metaTitle: 'Corner-Lot Home: Reflective Window Film for Privacy & Comfort | Vida Vitres',
      metaDescription:
        'How reflective window film restored privacy, light and comfort to a corner-lot home in the Montreal area, without curtains blocking the windows. Before-and-after photos.',
      overview: [
        { label: 'Project type', value: 'Residential' },
        { label: 'Sector', value: 'Home' },
        { label: 'Location', value: 'Montreal area' },
        { label: 'Solution', value: 'Reflective window film' },
      ],
      challenge: {
        title: 'Beautiful new windows, hidden behind big curtains',
        intro: 'These homeowners had large, brand-new windows. But their house sits on a very busy street corner.',
        points: [
          {
            title: 'A house seen from everywhere',
            text: 'The lot is on a busy street corner, near a bike path and a school: from outside, everyone could see inside.',
          },
          {
            title: 'Big curtains, all the time',
            text: 'To get their privacy back, the family used big curtains, which blocked their new windows.',
          },
          {
            title: 'A window that overheated the house',
            text: 'The large triangular-topped window let in a lot of sun, which made the house very hot.',
          },
        ],
      },
      intervention: {
        title: 'Reflective film on the exposed windows',
        intro: 'Vida Vitres installed reflective window film on the home’s exposed windows, without replacing anything.',
        points: [
          'Reflective film on the home’s exposed windows',
          'Triangular-topped window included',
          'Installed on site by our technicians',
        ],
        howItWorksTitle: 'In plain terms',
        howItWorks:
          'In daylight, the film reflects light like a discreet mirror. When it is brighter outside than inside, it becomes hard to see in, while the view out stays clear.',
      },
      results: {
        title: 'What the family notices',
        intro: 'Observations reported after installation. These are everyday experiences, not instrument-measured results.',
        points: [
          {
            title: 'Windows finally uncovered',
            text: 'The curtains stay open: the light and the view of the outdoors are back.',
          },
          {
            title: 'More privacy in daylight',
            text: 'From outside, the glass mirrors the street and the sky: in full daylight, you can no longer see in.',
          },
          {
            title: 'A window they can finally enjoy',
            text: 'The sun that used to overheat the house through the triangular-topped window is no longer a problem: the owners now enjoy it.',
          },
        ],
        privacyTitle: 'Good to know about privacy',
        privacyNote:
          'The reflective effect depends on lighting: it works when it is brighter outside than inside, and it does not guarantee privacy in the evening or at night, when the interior is lit.',
      },
      pairs: {
        title: 'Before and after, side by side',
        intro: 'Similar views of the house before and after the film. Camera angles are not always identical.',
        beforeTag: 'Before',
        afterTag: 'After',
      },
      highlight: {
        eyebrow: 'The triangular-topped window',
        title: 'A beautiful window, finally comfortable to live with',
        intro:
          'This large window let in a lot of sun and made the house very hot. With the film, the problem is solved and the owners can now enjoy their window and the view.',
        bullets: [
          'Before: a lot of direct sun and a very hot house',
          'After: the problem is solved, according to the owners',
          'From outside, the glass mirrors the sky and the street in daylight',
        ],
        beforeTag: 'Before',
        afterTag: 'After',
        exteriorTag: 'Outside',
      },
      cta: {
        title: 'Large windows should be an advantage.',
        text: 'Let’s talk about your project.',
        button: 'Request an estimate',
      },
    },
  },
];

export const publishedProjects = projects.filter((p) => p.published);
