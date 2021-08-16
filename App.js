import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import { getInitDataSource } from './src/utils/data';
import { colors } from './src/utils/colors';
import { Athlete } from './src/components/Athlete';

export default function App() {

  const [dataSource, setDataSource] = useState(getInitDataSource());

  const renderItem = ({ item }) => (
    <Athlete 
      id={item.id}
      name={item.name} 
      rank={item.rank}
      country={item.country}
      points={item.points}
      img={item.img}
      flag={item.flag}
      addColors={addColors}
    />
  );

  // const itemSeparatorComponent = () => <Text>This is a separator</Text>;
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const listHeaderComponent = () => <Text style={styles.listHeaderFooter}>Mens</Text>;
  const listFooterComponent = () => (
    <Text style={styles.listHeaderFooter}>[rankings footer]</Text>
  );
  const listEmptyComponent = () => (
    <Text style={styles.empty}>No Items Found</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.content]}>World Surf League</Text>
      <View style={[styles.body, styles.content]}>
        <Text style={styles.text}>Rankings</Text>
        <FlatList
          style={{ backgroundColor: 'white' }}
          data={dataSource}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          ItemSeparatorComponent={ItemSeparatorView}
          ListHeaderComponent={listHeaderComponent}
          ListFooterComponent={listFooterComponent}
          ListEmptyComponent={listEmptyComponent}
        />
      </View>
    </SafeAreaView>
  );
}

const addColors = false;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    backgroundColor: addColors ? colors.green : null,
    color: addColors ? colors.white : null,
  },
  body: {
    backgroundColor: addColors ? colors.blue : null,
    //color: addColors ? colors.white : null,
    flex: 1,
    padding: 5,
  },
  text: {
    color: addColors ? colors.white : null,
  },
  listHeaderFooter: {
    backgroundColor: addColors ? colors.attention : null,
  },
  empty: {
    backgroundColor: addColors ? colors.highlight : null,
  }

});
