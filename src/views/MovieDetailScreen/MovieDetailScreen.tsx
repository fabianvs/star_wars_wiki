import React from 'react';
import {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useFilmListStore} from 'store/FilmsStore';

function MoviesDetailScreen(): React.JSX.Element {
  const getAllFilms = useFilmListStore(state => state.getAll);
  const films = useFilmListStore(state => state.results);

  useEffect(() => {
    getAllFilms();
  }, [getAllFilms]);

  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {films.map(film => {
          return (
            <View>
              <Text>{film.title}</Text>
              <Text>{film.release_date}</Text>
              <Text>{film.director}</Text>
              <Text>{film.episode_id}</Text>
              <Text>{film.opening_crawl}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export {MoviesDetailScreen};
