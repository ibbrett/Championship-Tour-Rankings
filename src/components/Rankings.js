import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import { getInitDataSource } from '../utils/data';
import { colors } from '../utils/colors';
import { Athlete } from '../components/Athlete';
import { ItemSeparatorView } from '../components/ItemSeparatorView';

export function Rankings() {

  const [dataSource, setDataSource] = useState(getInitDataSource());

  const renderItem = ({ item }) => (
    <Athlete 
      name={item.name} 
      rank={item.rank}
      country={item.country}
      points={item.points}
      img={item.img}
      flag={item.flag}
      addColors={addColors}
    />
  );

  const listHeaderComponent = () => null;
  const listFooterComponent = () => null;
  const listEmptyComponent = () => (
    <Text style={styles.empty}>No Items Found</Text>
  );

  const logo = <View style={styles.header}>
    <View style={styles.logo} />
    <Text style={[styles.headerLabel, styles.content]}>World Surf League</Text>
  </View>;

  return (
    <SafeAreaView style={styles.container}>
      {logo}
      <View style={[styles.body, styles.content]}>
        <Text style={styles.text}>Mens Rankings</Text>
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

const logoSize = 40;
const addColors = false;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: addColors ? colors.attention : null,
  },
  content: {
    padding: 20,
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
  },
  header: {
    backgroundColor: addColors ? colors.green : null,
    color: addColors ? colors.white : null,
    flexDirection: 'row',
    // textAlign: 'center',
    alignItems: 'center', 
    textAlignVertical: 'center'
  },
  headerLabel: {
    backgroundColor: addColors ? colors.green : null,
    color: addColors ? colors.white : null,
    fontSize: 18
  },
  logo: {
    backgroundColor: 'orange',
    // background: 'linear-gradient(#9BFF29, yellow , orange, red)',
    // transform: 'rotate(135deg)',
    // background: 'linear-gradient( orange 20%, cyan, #9BFF29 )',
    width: logoSize,
    height: logoSize,
    borderRadius: logoSize / 2,
    padding: 3,
    marginLeft: 10,
    marginRight: 10
  }

});
