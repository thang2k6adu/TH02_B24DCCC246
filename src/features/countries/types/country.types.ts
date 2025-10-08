export interface Country {
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  currencies?: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: {
    [langCode: string]: string;
  };
  borders?: string[];
  area?: number;
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  population: number;
}
