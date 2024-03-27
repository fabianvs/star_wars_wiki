import {create} from 'zustand';
// import Config from 'react-native-config';
// require('dotenv').config();

type FilmsListStore = {
  count: number;
  next?: string;
  previous?: string;
  results: Films | [];
  getAll: () => Promise<void>;
};

type FilmStore = {
  data: Film | {};
  get: (filmId: string) => Promise<void>;
};

// console.log(Config.API_ENDPOINT_URL); // true)
export const useFilmListStore = create<FilmsListStore>(set => ({
  count: 0,
  results: [],
  getAll: async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      set({
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: data.results,
      });
    } catch (err) {
      set(state => ({
        count: state.count,
        next: state.next,
        previous: state.previous,
        results: state.results,
      }));
      console.log('err', err);
    }
  },
}));

export const useFilmStore = create<FilmStore>(set => ({
  count: 0,
  data: {},
  get: async (filmId: string) => {
    try {
      const response = await fetch(
        `${process.env.API_ENDPOINT_URL}/films/${filmId}`,
      );
      const data = await response.json();
      set({
        data: data,
      });
    } catch (err) {
      set(state => ({
        data: state.data,
      }));
      console.log(err);
    }
  },
}));
