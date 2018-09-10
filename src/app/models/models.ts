interface RootObject {
  companies: Company[];
  epoche: Epoche[];
  lokType: LokType[];
  hersteller: Hersteller[];
  loks: Lok[];
  vehicles: Vehicle[];
}

interface Vehicle {
  vehicleType: string;
  companyCode: string;
  epoche: string;
  bezeichnung: string;
  farbe: string;
  nummer: string;
  hersteller: string;
  preis: string;
  anzahl: number;
  bemerkung: string;
}

interface Lok {
  lokType: string;
  companyCode: string;
  epoche: string;
  bezeichnung: string;
  nummer: string;
  hersteller: string;
  preis: string;
  bemerkung: string;
}

interface Hersteller {
  roco: string;
  liliput: string;
  jouef: string;
}

interface LokType {
  dampf?: string;
  diesel?: string;
  elektro?: string;
}

interface Epoche {
  I: string;
  II: string;
  III: string;
  IV: string;
  V: string;
  VI: string;
  VII: string;
}

interface Company {
  code: string;
  desc: string;
}
