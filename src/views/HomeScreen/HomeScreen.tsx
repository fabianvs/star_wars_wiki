import React from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {CustomButton} from 'components/CustomButton';
import {styles} from './HomeScreenStyles';
import {globalStyles} from 'globals/globalStyles';

function HomeScreen({navigation}: any): React.JSX.Element {
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
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export {HomeScreen};
