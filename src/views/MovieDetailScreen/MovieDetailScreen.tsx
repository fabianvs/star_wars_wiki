import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {globalStyles} from 'globals/globalStyles';
import {styles} from './MovieDetailScreenStyles';
function MoviesDetailScreen(props: any): React.JSX.Element {
  const charactersRef = useRef<any>();
  const planetsRef = useRef<any>();
  const speciesRef = useRef<any>();
  const starshipsRef = useRef<any>();

  const [characters, setCharacters] = useState<[People]>();
  const [planets, setPlanets] = useState<[Planet]>();
  const [species, setSpecies] = useState<[Specie]>();
  const [starships, setStarships] = useState<[Starship]>();

  const {movie} = props.route.params;

  useEffect(() => {
    charactersRef.current = [];
    planetsRef.current = [];
    speciesRef.current = [];
    starshipsRef.current = [];

    movie.characters.forEach(
      async (characterUrl: string, idx: number, array: [string]) => {
        const fetchData = await fetch(characterUrl);
        const res: any = await fetchData.json();
        charactersRef.current?.push(res);
        if (idx === array.length - 1) {
          setCharacters(charactersRef.current);
        }
      },
    );

    movie.planets.forEach(
      async (planetUrl: string, idx: number, array: [string]) => {
        const fetchData = await fetch(planetUrl);
        const res: any = await fetchData.json();
        planetsRef.current?.push(res);
        if (idx === array.length - 1) {
          setPlanets(planetsRef.current);
        }
      },
    );

    movie.species.forEach(
      async (specieUrl: string, idx: number, array: [string]) => {
        const fetchData = await fetch(specieUrl);
        const res: any = await fetchData.json();
        speciesRef.current?.push(res);
        if (idx === array.length - 1) {
          setSpecies(speciesRef.current);
        }
      },
    );

    movie.starships.forEach(
      async (starshipUrl: string, idx: number, array: [string]) => {
        const fetchData = await fetch(starshipUrl);
        const res: any = await fetchData.json();
        starshipsRef.current?.push(res);
        if (idx === array.length - 1) {
          setStarships(starshipsRef.current);
        }
      },
    );
  }, []);

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={require('assets/backgroundApp.jpg')}
        resizeMode="repeat"
        style={globalStyles.image}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>
                {`${movie.title} \n Episodio ${movie.episode_id}`}
              </Text>
            </View>
            <View style={styles.descriptionRow}>
              <Text style={styles.text}>
                Fecha de estreno:{movie.release_date}
              </Text>
              <Text style={styles.text}>Director/es: {movie.director}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Resumen:</Text>
              <Text style={styles.text}>{movie.opening_crawl}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Personajes:</Text>
              {characters?.map((character: People, index: number) => {
                return (
                  <Text key={`${character.name}-${index}`} style={styles.text}>
                    {character.name}
                  </Text>
                );
              })}
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Planetas:</Text>
              {planets?.map((planet: Planet, index: number) => {
                return (
                  <Text key={`${planet.name}-${index}`} style={styles.text}>
                    {planet.name}
                  </Text>
                );
              })}
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Especies:</Text>
              {species?.map((specie: Specie, index: number) => {
                return (
                  <Text key={`${specie.name}-${index}`} style={styles.text}>
                    {specie.name}
                  </Text>
                );
              })}
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Naves:</Text>
              {starships?.map((starship: Starship, index: number) => {
                return (
                  <Text key={`${starship.name}-${index}`} style={styles.text}>
                    {starship.name}
                  </Text>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export {MoviesDetailScreen};
