import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const _timeInDay = 16;

const _categories = [
  {
    title: 'Professional Carreer',
    percentage: '10',
    timePercentage: '5',
  },
  {
    title: 'Family',
    percentage: '15',
    timePercentage: '10',
  },
  {
    title: 'Income',
    percentage: '30',
    timePercentage: '50',
  },
  {
    title: 'Financial wealth',
    percentage: '20',
    timePercentage: '10',
  },
  {
    title: 'Phisical life',
    percentage: '15',
    timePercentage: '5',
  },
  {
    title: 'Spiritual life',
    percentage: '10',
    timePercentage: '10',
  },
  {
    title: 'Recreational life',
    percentage: '10',
    timePercentage: '10',
  },
];

export const Home = () => {
  const [income, setIncome] = useState();
  const [categories, setCategories] = useState(_categories);

  const calculateSum = ({percentage}) => {
    return ((parseInt(percentage) / 100) * parseInt(income)).toString();
  };

  const calculateTime = ({percentage}) => {
    return ((parseInt(percentage) / 100) * _timeInDay).toString();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{`Time in day ${_timeInDay}`}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Declare your montly income: </Text>
        <TextInput value={income} onChangeText={setIncome} placeholder="0" />
        <Text> lei</Text>
      </View>
      <View style={{marginTop: 16}}>
        <Text>Categories: </Text>
        {categories.map(category => (
          <Text>
            {' - ' +
              category.title +
              ' ' +
              calculateSum({percentage: category.percentage}) +
              ' lei' +
              '\n and time: ' +
              calculateTime({percentage: category.timePercentage}) +
              ' daily hours'}
          </Text>
        ))}
      </View>
      <TouchableOpacity
        style={{
          marginTop: 16,
          backgroundColor: 'red',
          width: 100,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};
