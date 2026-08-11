// Unique per-city copy for the /vitres-teintees/[city]/ pages. Written as a
// distinct angle from comboIntros/locationIntros (terminology bridge +
// window-type focus) so this isn't near-duplicate content of the existing
// pellicule-solaire/[city] combo pages, even though it's the same service.
export interface VitresTeinteesIntro {
  paragraph1: string;
  paragraph2: string;
  windowType: string;
}

export const vitresTeinteesIntros: Record<string, VitresTeinteesIntro> = {
  montreal: {
    paragraph1:
      "À Montréal, « vitres teintées » est souvent le premier terme qu'on tape dans Google — pas « pellicule solaire ». C'est la même solution : un film mince appliqué directement sur le verre existant de vos fenêtres, qui leur donne une teinte légère tout en bloquant la chaleur et les UV. Des condos du centre-ville aux triplex du Plateau, c'est l'option la plus rapide pour rendre une maison ou un appartement vivable en après-midi, sans remplacer une seule fenêtre.",
      paragraph2:
      "Nos techniciens se déplacent directement chez vous à Montréal pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres à guillotine et baies vitrées de condo',
  },
  laval: {
    paragraph1:
      "Beaucoup de propriétaires à Laval cherchent des « vitres teintées pour maison » sans savoir que la solution s'appelle une pellicule solaire — c'est exactement la même chose. Appliquée sur le verre existant, elle donne à vos fenêtres une teinte discrète tout en coupant une bonne partie de la chaleur qui entre par les grandes baies vitrées arrière, très communes dans les maisons de banlieue lavalloises.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Laval pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'baies vitrées arrière orientées ouest',
  },
  longueuil: {
    paragraph1:
      "À Longueuil, la demande pour des vitres teintées vient autant des tours à condos près du métro que des bungalows plus anciens de l'autre côté du fleuve. Dans les deux cas, la solution est la même pellicule solaire résidentielle : elle teinte légèrement le verre existant et bloque la chaleur, sans les délais ni le coût d'un remplacement de fenêtres.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Longueuil pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres panoramiques avec vue sur le fleuve',
  },
  repentigny: {
    paragraph1:
      "Les résidences de Repentigny le long du fleuve Saint-Laurent misent beaucoup sur de grandes fenêtres et des portes-terrasses face à l'eau — exactement le genre de vitrage où des vitres teintées font une différence immédiate. La pellicule solaire s'applique directement sur le verre existant et réduit la chaleur sans bloquer la vue que ces maisons ont été conçues pour offrir.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Repentigny pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'portes-terrasses et fenêtres donnant sur le fleuve',
  },
  terrebonne: {
    paragraph1:
      "Que votre maison à Terrebonne date du secteur historique de l'Île-des-Moulins ou d'un développement plus récent, le problème est souvent le même : une baie vitrée qui transforme le salon en four l'après-midi. Des vitres teintées — en fait une pellicule solaire posée sur le verre existant — réglent ça sans changer l'apparence de vos fenêtres.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Terrebonne pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'baies vitrées de salon orientées sud',
  },
  'saint-eustache': {
    paragraph1:
      "Entre le centre historique de Saint-Eustache et les quartiers résidentiels plus récents en bordure de la rivière des Mille Îles, on installe régulièrement des vitres teintées sur des maisons de tous âges. La pellicule solaire fonctionne aussi bien sur un vitrage simple plus ancien que sur du double vitrage récent.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Saint-Eustache pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres de maisons unifamiliales à vitrage simple ou double',
  },
  blainville: {
    paragraph1:
      "Les maisons plus récentes de Blainville ont typiquement de grandes fenêtres à l'avant comme à l'arrière, avec encore peu d'arbres matures pour faire de l'ombre. Des vitres teintées résidentielles — la pellicule solaire — compensent ce que le paysage n'offre pas encore, en bloquant la chaleur directement au niveau du verre.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Blainville pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'grandes fenêtres avant et arrière sans ombrage naturel',
  },
  mirabel: {
    paragraph1:
      "Mirabel est plus rurale et étendue que ses voisines, avec de grandes propriétés et des fenêtres généreuses en plein soleil, sans obstacle pour freiner la chaleur. C'est un candidat idéal pour des vitres teintées maison : la pellicule solaire couvre de grandes surfaces vitrées efficacement et à une fraction du prix d'un remplacement de fenêtres.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Mirabel pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'grandes fenêtres de propriétés rurales en plein soleil',
  },
  boisbriand: {
    paragraph1:
      "Boisbriand, près de la rivière des Mille Îles, compte beaucoup de maisons unifamiliales avec de grandes fenêtres arrière donnant sur la cour. Des vitres teintées sur ce type de baie vitrée gardent la pièce lumineuse tout en coupant la chaleur qui s'accumule en fin de journée.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Boisbriand pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'baies vitrées arrière donnant sur la cour',
  },
  beaconsfield: {
    paragraph1:
      "Les grandes propriétés arborées de Beaconsfield ont souvent un vitrage plus ancien, simple, qui laisse passer beaucoup plus de chaleur et d'UV qu'on ne le pense. Des vitres teintées — la pellicule solaire — s'appliquent directement sur ce verre existant, sans travaux de rénovation ni remplacement.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Beaconsfield pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres à vitrage simple de maisons plus anciennes',
  },
  'pointe-claire': {
    paragraph1:
      "Entre le vieux village au bord du lac Saint-Louis et le boulevard Saint-Jean, Pointe-Claire mélange résidences et commerces à grandes vitrines. Les vitres teintées résidentielles y sont aussi demandées que le vitrage commercial teinté pour les devantures orientées sud.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Pointe-Claire pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres résidentielles et vitrines commerciales',
  },
  'dollard-des-ormeaux': {
    paragraph1:
      "Les bungalows et split-level des années 60-70 de Dollard-Des Ormeaux ont typiquement de grandes fenêtres avant donnant directement sur la rue. Des vitres teintées y règlent deux problèmes à la fois : la chaleur en après-midi et le vis-à-vis avec les voisins d'en face.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Dollard-Des Ormeaux pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres avant de bungalows donnant sur rue',
  },
  kirkland: {
    paragraph1:
      "Kirkland partage le profil résidentiel calme du reste de l'Ouest-de-l'Île — rues bordées d'arbres, bungalows à grandes fenêtres. Des vitres teintées maison y sont une solution simple pour le confort thermique, souvent combinées avec un renforcement de sécurité sur les portes-fenêtres arrière.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Kirkland pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres de bungalows et portes-fenêtres arrière',
  },
  'vaudreuil-dorion': {
    paragraph1:
      "Vaudreuil-Dorion, à la rencontre de la rivière des Outaouais et du fleuve Saint-Laurent, est en forte croissance résidentielle. Les constructions neuves ont de grandes fenêtres modernes — parfaites pour la lumière, moins pour garder la maison fraîche sans vitres teintées.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Vaudreuil-Dorion pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'grandes fenêtres de constructions neuves',
  },
  'saint-lazare': {
    paragraph1:
      "Saint-Lazare est plus semi-rural, avec de grands terrains boisés et un vitrage généreux exposé au soleil une bonne partie de la journée. Des vitres teintées résidentielles y font une différence notable sur la facture de climatisation, sans changer l'apparence extérieure de la maison.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Saint-Lazare pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'grandes fenêtres de propriétés boisées',
  },
  'ile-perrot': {
    paragraph1:
      "L'Île-Perrot est entourée d'eau, et une bonne partie des résidences riveraines ont de grandes baies vitrées et portes-patio côté eau — exactement le type de vitrage où le prix d'une baie vitrée teintée se rentabilise vite en confort. La pellicule solaire coupe la chaleur sans sacrifier la vue sur l'eau.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à L'Île-Perrot pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'baies vitrées et portes-patio en bord de l\'eau',
  },
  pincourt: {
    paragraph1:
      "Pincourt borde le lac Saint-Louis, avec plusieurs résidences riveraines à forte exposition sud. Des vitres teintées y sont souvent installées avec la pellicule d'intimité, pour profiter de la vue sur l'eau sans en payer le prix en chaleur ou en vis-à-vis.",
    paragraph2:
      "Nos techniciens se déplacent directement chez vous à Pincourt pour évaluer vos fenêtres et vous proposer la bonne teinte selon votre exposition — estimation gratuite, sans pression.",
    windowType: 'fenêtres riveraines à forte exposition sud',
  },
};
