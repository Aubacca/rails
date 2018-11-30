export interface RootObject {
  companies: Company[];
  epoche: Epoche[];
  lokType: LokType[];
  hersteller: Hersteller[];
  loks: Lok[];
  vehicles: Vehicle[];
}

export type VehicleKindType = 'LOK' | 'GW' | 'PW;';

export interface Vehicle {
  id: number;
  vehicleKind: string;
  // vehicleKind: VehicleKindType;
  vehicleType: string;
  companyCode: string;
  epoche: string;
  bezeichnung: string;
  farbe: string;
  nummer: string;
  hersteller: string;
  preis: string;
  anzahl: number;
  bemerkung?: string;
}

interface Lok {
  lokType: string;
  companyCode: string;
  epoche: string;
  bezeichnung: string;
  nummer: string;
  hersteller: string;
  preis: string;
  bemerkung?: string;
}

export interface Hersteller {
  roco: string;
  liliput: string;
  jouef: string;
}

export interface LokType {
  dampf?: string;
  diesel?: string;
  elektro?: string;
}

export interface Epoche {
  I: string;
  II: string;
  III: string;
  IV: string;
  V: string;
  VI: string;
  VII: string;
}

export interface Company {
  code: string;
  desc: string;
}
