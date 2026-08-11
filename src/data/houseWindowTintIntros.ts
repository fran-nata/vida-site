// Unique per-city copy for the /en/house-window-tint/[city]/ pages. Adapted
// from vitresTeinteesIntros.ts's facts (same terminology-bridge + window-type
// angle) but written fresh in English, not translated line for line.
export interface HouseWindowTintIntro {
  paragraph1: string;
  paragraph2: string;
  windowType: string;
}

export const houseWindowTintIntros: Record<string, HouseWindowTintIntro> = {
  montreal: {
    paragraph1:
      '"House window tint" is usually the first phrase people search in Montreal — not "heat control film." It\'s the same solution: a thin film applied directly to your existing glass, giving it a light tint while blocking heat and UV. From downtown condos to Plateau triplexes, it\'s the fastest way to make a home or apartment livable in the afternoon, without replacing a single window.',
    paragraph2:
      "Our technicians come directly to you in Montreal to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'guillotine windows and condo picture windows',
  },
  laval: {
    paragraph1:
      "Many Laval homeowners search for \"house window tint\" without realizing the product is called heat control film — it's exactly the same thing. Applied to your existing glass, it gives your windows a subtle tint while cutting a good share of the heat coming through the large rear picture windows common in Laval's suburban homes.",
    paragraph2:
      "Our technicians come directly to you in Laval to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'west-facing rear picture windows',
  },
  longueuil: {
    paragraph1:
      "In Longueuil, demand for house window tint comes as much from condo towers near the metro as from older bungalows on the other side of the river. Either way, the solution is the same residential heat control film: it lightly tints the existing glass and blocks heat, without the wait or cost of a window replacement.",
    paragraph2:
      "Our technicians come directly to you in Longueuil to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'panoramic windows with river views',
  },
  repentigny: {
    paragraph1:
      "Repentigny homes along the St. Lawrence River lean heavily on large windows and patio doors facing the water — exactly the kind of glazing where house window tint makes an immediate difference. Heat control film applies directly to the existing glass and cuts heat without blocking the view these homes were built for.",
    paragraph2:
      "Our technicians come directly to you in Repentigny to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'patio doors and windows facing the river',
  },
  terrebonne: {
    paragraph1:
      "Whether your Terrebonne home is in the historic Île-des-Moulins area or a newer development, the problem is often the same: a picture window that turns the living room into an oven every afternoon. House window tint — really a heat control film applied to your existing glass — fixes that without changing how your windows look.",
    paragraph2:
      "Our technicians come directly to you in Terrebonne to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'south-facing living room picture windows',
  },
  'saint-eustache': {
    paragraph1:
      "Between Saint-Eustache's historic center and the newer residential areas along the Rivière des Mille Îles, we regularly tint windows on homes of every age. Heat control film works just as well on older single-pane glass as it does on newer double-pane windows.",
    paragraph2:
      "Our technicians come directly to you in Saint-Eustache to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'single- and double-pane home windows',
  },
  blainville: {
    paragraph1:
      "Newer Blainville homes typically have large windows front and back, with still-young trees offering little shade yet. House window tint compensates for what the landscaping doesn't provide yet, blocking heat right at the glass.",
    paragraph2:
      "Our technicians come directly to you in Blainville to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'large front and rear windows with no natural shade',
  },
  mirabel: {
    paragraph1:
      "Mirabel is more rural and spread out than its neighbors, with large properties and generous windows in full sun and nothing to slow the heat down. It's an ideal candidate for house window tint: heat control film covers large glass areas efficiently, at a fraction of the cost of replacing windows.",
    paragraph2:
      "Our technicians come directly to you in Mirabel to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'large windows on rural properties in full sun',
  },
  boisbriand: {
    paragraph1:
      "Boisbriand, near the Rivière des Mille Îles, has many single-family homes with large rear windows facing the yard. House window tint on that kind of picture window keeps the room bright while cutting the heat that builds up by late afternoon.",
    paragraph2:
      "Our technicians come directly to you in Boisbriand to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'rear picture windows facing the backyard',
  },
  beaconsfield: {
    paragraph1:
      "Beaconsfield's large, treed properties often have older, single-pane glass that lets in far more heat and UV than most people realize. House window tint — heat control film — applies directly to that existing glass, with no renovation or replacement needed.",
    paragraph2:
      "Our technicians come directly to you in Beaconsfield to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'single-pane windows on older homes',
  },
  'pointe-claire': {
    paragraph1:
      "Between the old village on Lac Saint-Louis and the Saint-Jean Boulevard shopping strip, Pointe-Claire mixes homes with large-window storefronts. Residential house window tint is in as much demand here as tinted commercial glass for south-facing shopfronts.",
    paragraph2:
      "Our technicians come directly to you in Pointe-Claire to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'residential windows and commercial storefronts',
  },
  'dollard-des-ormeaux': {
    paragraph1:
      "Dollard-Des Ormeaux's 1960s-70s bungalows and split-levels typically have large front windows facing directly onto the street. House window tint solves two problems at once here: afternoon heat and the view straight in from neighbors across the street.",
    paragraph2:
      "Our technicians come directly to you in Dollard-Des Ormeaux to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'street-facing bungalow front windows',
  },
  kirkland: {
    paragraph1:
      "Kirkland shares the quiet residential feel of the rest of the West Island — tree-lined streets, bungalows with big windows. House window tint here is a simple fix for thermal comfort, often paired with security reinforcement on the rear patio doors.",
    paragraph2:
      "Our technicians come directly to you in Kirkland to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'bungalow windows and rear patio doors',
  },
  'vaudreuil-dorion': {
    paragraph1:
      "Vaudreuil-Dorion, where the Ottawa River meets the St. Lawrence, is in strong residential growth. New builds have large modern windows — great for light, less great for keeping the house cool without house window tint.",
    paragraph2:
      "Our technicians come directly to you in Vaudreuil-Dorion to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'large windows on new-construction homes',
  },
  'saint-lazare': {
    paragraph1:
      "Saint-Lazare is more semi-rural, with large wooded lots and generous glazing exposed to the sun most of the day. House window tint makes a noticeable difference on the cooling bill here, without changing how the home looks from outside.",
    paragraph2:
      "Our technicians come directly to you in Saint-Lazare to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'large windows on wooded properties',
  },
  'ile-perrot': {
    paragraph1:
      "L'Île-Perrot is surrounded by water, and many waterfront homes have large picture windows and patio doors facing it — exactly the kind of glazing where the price of a tinted picture window pays for itself quickly in comfort. Heat control film cuts the heat without sacrificing the water view.",
    paragraph2:
      "Our technicians come directly to you in L'Île-Perrot to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'waterfront picture windows and patio doors',
  },
  pincourt: {
    paragraph1:
      "Pincourt borders Lac Saint-Louis, with several waterfront homes facing strong southern exposure. House window tint here is often installed alongside privacy film, so homeowners can enjoy the water view without paying for it in heat or in visibility from outside.",
    paragraph2:
      "Our technicians come directly to you in Pincourt to assess your windows and recommend the right tint for your exposure — free estimate, no pressure.",
    windowType: 'south-facing waterfront windows',
  },
};
