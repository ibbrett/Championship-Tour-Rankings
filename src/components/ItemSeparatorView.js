import React, {useState} from 'react';
import { View } from 'react-native';

  // const itemSeparatorComponent = () => <Text>This is a separator</Text>;
  export const ItemSeparatorView = () => {
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