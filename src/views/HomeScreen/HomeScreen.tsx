import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native';
import {CustomButton} from 'components/CustomButton';
import {styles} from './HomeScreenStyles';
import {globalStyles} from 'globals/globalStyles';
import {LineChart} from 'react-native-chart-kit';
import {useFilmListStore} from 'store/FilmsStore';

function HomeScreen({navigation}: any): React.JSX.Element {
  const [distributionState, setDistributionState] = useState([]);
  const getAllFilms = useFilmListStore(state => state.getAll);
  const films = useFilmListStore(state => state.results);

  useEffect(() => {
    getAllFilms();
  }, []);

  useEffect(() => {
    if (films.length > 0) {
      setDistributionState(getDistributionByDirector(films));
    }
  }, [films]);

  function getDistributionByDirector(_films: Films | []) {
    const distribution: any = {};

    _films.forEach((film: Film) => {
      const director = film.director;
      if (distribution[director]) {
        distribution[director]++;
      } else {
        distribution[director] = 1;
      }
    });

    return distribution;
  }

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={require('assets/backgroundApp.jpg')}
        resizeMode="repeat"
        style={globalStyles.image}>
        <ScrollView>
          <View style={styles.buttonContainer}>
            <CustomButton
              title={'Ver listado de peliculas'}
              onPress={() => navigation.navigate('MoviesListScreen')}
            />
          </View>
          <View>
            <View style={styles.containerTitleChart}>
              <Text style={styles.titleChart}>
                Distribución de películas por director
              </Text>
            </View>
            <LineChart
              data={{
                labels:
                  Object.keys(distributionState).length > 0
                    ? Object.keys(distributionState)
                    : ['empty'],
                datasets: [
                  {
                    data:
                      Object.values(distributionState).length > 0
                        ? Object.values(distributionState)
                        : [0],
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#000000',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={styles.chart}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export {HomeScreen};
