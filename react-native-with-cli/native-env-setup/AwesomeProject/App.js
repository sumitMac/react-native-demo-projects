import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import * as React from 'react';
import {NativeRouter} from 'react-router-native';

export const App = () => {
  return (
    <NativeRouter>
      <ScrollView style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.hello}>Amazon MarketPlace</Text>
            <TextInput placeholder="search here" style={styles.search_input} />
          </View>
          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="Click Me"
          />
        </View>
      </ScrollView>
    </NativeRouter>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3e6e6',
  },
  mainContainer: {
    flexDirection: 'column',
  },
  header: {backgroundColor: '#131921'},
  hello: {
    fontSize: 20,
    color: 'white',
    margin: 10,
  },
  search_input: {
    backgroundColor: '#ffffff',
  },
});
