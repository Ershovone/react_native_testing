import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps'

export default class App extends React.Component {
  showLocation() {
    console.warn(navigator.geolocation)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={{
            latitude: 55.8492200,
            longitude: 37.3469600,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 55.8492200,
              longitude: 37.3469600
            }}
            title={'Home... sweet home..'}
            description={'Center'}
          />

        </MapView>
        <Button
          onPress={this.showLocation}
          title='Show location'
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 100,
    left: 0,
    bottom: 100,
    right: 0
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 200,
    right: 0
  }
});
