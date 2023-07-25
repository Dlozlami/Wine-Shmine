import { StyleSheet, Text, Pressable } from 'react-native';
import React, { useState } from 'react';

const FilterBTN = ({ title }) => {
  const [active, setActive] = useState(false);

  const toggleState = () => {
    setActive(!active);
  };

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: active ? '#09331d' : 'white',
          borderColor: active ? 'white' : '#09331d',
        },
      ]}
      onPress={toggleState}
    >
      <Text style={{ color: active ? 'white' : '#09331d' }}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal:5
  },
});

export default FilterBTN;
