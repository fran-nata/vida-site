// English version of cities.ts's regionProfiles, keyed by the same French
// region name (used as the join key against City.region).
export interface RegionProfileEn {
  buildingContext: string;
  exposureNote: string;
  propertyTypes: string;
}

export const regionProfilesEn: Record<string, RegionProfileEn> = {
  "l'Île de Montréal": {
    buildingContext: 'a dense mix of condos, plexes, and townhouses, often with large street-facing windows',
    exposureNote: 'screen glare and privacy from neighboring units are among the most frequent requests',
    propertyTypes: 'condominiums, plexes, and neighborhood businesses',
  },
  Laval: {
    buildingContext: 'suburban single-family homes and newer condo buildings with large double-pane windows',
    exposureNote: 'afternoon heat on south- or west-facing facades is a common issue',
    propertyTypes: 'single-family homes, condos, and local businesses',
  },
  'la Montérégie': {
    buildingContext: 'a mix of established residential neighborhoods and commercial areas near the river',
    exposureNote: 'both residential heat reduction and commercial storefront reinforcement are in demand',
    propertyTypes: 'homes, condos, and businesses',
  },
  Lanaudière: {
    buildingContext: 'expanding suburbs with new homes featuring large south-facing picture windows',
    exposureNote: 'afternoon overheating in living spaces and floor fading are frequent reasons for calls',
    propertyTypes: 'new homes and single-family properties',
  },
  'les Laurentides': {
    buildingContext: 'newer residential developments and properties with sunrooms or solariums heavily exposed to the sun',
    exposureNote: 'sunrooms and solariums that become hard to use in summer come up often in requests',
    propertyTypes: 'single-family homes, sunrooms, and solariums',
  },
  "l'Ouest-de-l'Île de Montréal": {
    buildingContext: 'large, mature single-family properties with extensive glazing on both the yard and street sides',
    exposureNote: 'privacy from neighbors and protecting furniture from fading are common priorities',
    propertyTypes: 'large single-family homes and offices',
  },
  'Vaudreuil-Soulanges': {
    buildingContext: 'a fast-growing area with many new builds and large modern windows',
    exposureNote: 'ground-floor glass reinforcement and heat reduction are frequent requests on newer construction',
    propertyTypes: 'new homes, condos, and local businesses',
  },
};
