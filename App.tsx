/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  FlatList,
  Dimensions,
  Platform,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const data = [
  {
    id: 0,
    text: '0',
    color: 'red',
  },
  {
    id: 1,
    text: '1',
    color: 'blue',
  },
  {
    id: 2,
    text: '2',
    color: 'green',
  },
  {
    id: 3,
    text: '3',
    color: 'yellow',
  },
  {
    id: 4,
    text: '4',
    color: 'pink',
  },
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <RenderComponent item={item} />}
            keyExtractor={({id}) => `${id}`}
            pagingEnabled
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const RenderComponent = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: item?.color,
        height:
          Platform.OS === 'android'
            ? Dimensions.get('window').height - (StatusBar?.currentHeight || 20)
            : Dimensions.get('window').height - 20,
        // height: Dimensions.get('window').height,
      }}>
      <Text>{item.text}</Text>
    </View>
  );
};

export default App;
