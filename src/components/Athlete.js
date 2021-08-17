import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../utils/colors';
export const Athlete = ({ id, name, rank, country, points, img, flag }) => {

  return (
   <View style={styles.item} key={id}>
    <View style={styles.left}>

    { rank <= 5 ?
      <View style={[styles.athleteRankBorder, styles.top5]}>
          <Text style={[styles.athletes, styles.athleteRank]}>{rank}</Text>
      </View>
    :
    <View style={[styles.athleteRankBorder]}>
          <Text style={[styles.athletes, styles.athleteRank]}>{rank}</Text>
      </View>
      }
</View>

    <View style={styles.middle}>
      <Text style={[styles.athletes, styles.athleteName]}>{name}</Text>
      <Text style={[styles.athletes, styles.athletePoints]}>{points}</Text>
    </View>

    <View style={[styles.right]}>
      <View style={[styles.imageWrapper]}>
        <Image
          style={styles.headerShot}
          source={{
            uri: img,
          }}
        />
      </View>

      <View style={[styles.flagWrapper]}>
        <Image
          style={styles.countryMap}
          source={{
            uri: flag,
          }}
        />
      </View>
    </View>
  </View>
  )
};

const rankSize = 28;
// const rankBG = 'linear-gradient(red, orange)';
const addColors = false;
const styles = StyleSheet.create({
  item: {
    backgroundColor: addColors ? colors.silver : null,
    paddingRight: 10,
    marginTop: 2,
    flexDirection: 'row',
  },
  athletes: {
    color: addColors ? colors.white : null,
  },
  athleteRankBorder: {
    backgroundColor: colors.rankBG,
    // background: addColors ? 'cyan' : rankBG,
    width: rankSize,
    height: rankSize,
    borderRadius: rankSize / 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  athleteRank: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  top5: {
    backgroundColor: colors.top5
  },
  athleteName: {
    fontSize: 20,
  },
  athletePoints: {},
  countryMap: {
    width: 35,
    height: 35,
  },

  headerShot: {
    width: 55,
    height: 60,
  },

  left: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  middle: {
    flexDirection: 'column',
    // width: 150,
    flex: 1,
    justifyContent: 'center',
  },

  right: {
    backgroundColor: addColors ? 'purple' : null,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },

  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: addColors ? 'green' : 'rgb(64,64,64)',
    overflow: 'hidden',
  },

  flagWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 8,
  },
});
