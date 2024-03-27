type Planet = {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: [string];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  films: [string];
  created: Date;
  edited: Date;
  url: string;
};

type Planets = {
  [Planet];
};
