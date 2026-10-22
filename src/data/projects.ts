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
}
export interface ProjectPair {
  caption: L;
  before: ProjectImage;
  after: ProjectImage;
}
export interface ProjectVideo {
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
  challenge: { intro: string; points: Point[] };
  intervention: { intro: string; points: string[]; howItWorksTitle: string; howItWorks: string };
  results: { intro: string; points: Point[]; privacyTitle: string; privacyNote: string };
  gallery: { title: string; intro: string };
  beforeAfter: { title: string; intro: string; before: string; after: string };
  videos: { title: string; intro: string };
  cta: { title: string; text: string; button: string };
}
export interface Project {
  id: string;
  mediaDir: string;
  type: 'commercial' | 'residential';
  published: boolean;
  media: { hero: ProjectImage; gallery: ProjectImage[]; pairs: ProjectPair[]; videos: ProjectVideo[] };
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
      },
      gallery: [
        {
          file: 'resultat-1.jpg',
          alt: {
            fr: "Vitrage d'angle de la clinique vu du trottoir, avec reflets des arbres et du ciel dans les vitres",
            en: 'Corner glazing of the clinic seen from the sidewalk, with trees and sky reflected in the glass',
          },
        },
        {
          file: 'resultat-2.jpg',
          alt: {
            fr: "Vue en contre-plongée du vitrage d'angle : bande de vitres plus claire en haut, vitres réfléchissantes en bas",
            en: 'Upward view of the corner glazing: a lighter band of glass above and mirror-like glass below',
          },
        },
        {
          file: 'resultat-3.jpg',
          alt: {
            fr: 'Vitrage de la clinique vu de côté, avec reflets du terrain, des arbres et de la rue',
            en: 'Side view of the clinic glazing, reflecting the lawn, trees and street',
          },
        },
      ],
      pairs: [
        {
          caption: { fr: 'Vue 1', en: 'View 1' },
          before: { file: 'avant-1.jpg', alt: { fr: 'Avant la pellicule : vue 1 des fenêtres de la clinique', en: 'Before the film: view 1 of the clinic windows' } },
          after: { file: 'apres-1.jpg', alt: { fr: 'Après la pellicule : vue 1 des fenêtres de la clinique', en: 'After the film: view 1 of the clinic windows' } },
        },
        {
          caption: { fr: 'Vue 2', en: 'View 2' },
          before: { file: 'avant-2.jpg', alt: { fr: 'Avant la pellicule : vue 2 des fenêtres de la clinique', en: 'Before the film: view 2 of the clinic windows' } },
          after: { file: 'apres-2.jpg', alt: { fr: 'Après la pellicule : vue 2 des fenêtres de la clinique', en: 'After the film: view 2 of the clinic windows' } },
        },
        {
          caption: { fr: 'Vue 3', en: 'View 3' },
          before: { file: 'avant-3.jpg', alt: { fr: 'Avant la pellicule : vue 3 des fenêtres de la clinique', en: 'Before the film: view 3 of the clinic windows' } },
          after: { file: 'apres-3.jpg', alt: { fr: 'Après la pellicule : vue 3 des fenêtres de la clinique', en: 'After the film: view 3 of the clinic windows' } },
        },
      ],
      videos: [
        {
          file: 'visite-avant.mp4',
          poster: 'visite-avant-poster.jpg',
          title: { fr: "Avant l'installation", en: 'Before installation' },
          description: { fr: 'Visite des lieux avant la pose de la pellicule.', en: 'Walkthrough of the space before the film was installed.' },
        },
        {
          file: 'visite-apres.mp4',
          poster: 'visite-apres-poster.jpg',
          title: { fr: "Après l'installation", en: 'After installation' },
          description: { fr: 'Visite des lieux après la pose de la pellicule.', en: 'Walkthrough of the space after the film was installed.' },
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
      gallery: {
        title: 'Le résultat en images',
        intro: "Vues extérieures du vitrage après l'installation. En plein jour, la pellicule renvoie le ciel, les arbres et la rue.",
      },
      beforeAfter: {
        title: 'Avant et après',
        intro: 'Photos du projet, présentées côte à côte.',
        before: 'Avant',
        after: 'Après',
      },
      videos: {
        title: 'Le projet en vidéo',
        intro: "Visite des lieux avant et après l'installation. Le son ne démarre jamais automatiquement : lancez la lecture quand vous le souhaitez.",
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
      gallery: {
        title: 'The result in pictures',
        intro: 'Exterior views of the glazing after installation. In daylight, the film mirrors the sky, the trees and the street.',
      },
      beforeAfter: {
        title: 'Before and after',
        intro: 'Photos from the project, shown side by side.',
        before: 'Before',
        after: 'After',
      },
      videos: {
        title: 'The project on video',
        intro: 'A walkthrough before and after installation. Sound never starts automatically: press play when you are ready.',
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
