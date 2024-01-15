import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  function calculate() {
    if (age && age >= 0 && age <= 220) {
      const a = age.replace(',', '.');
      setMin((220 - a) * 0.65);
      setMax((220 - a) * 0.85);
    }
    else {
      setMin(0);
      setMax(0);
    }
  }

  useEffect(() => {
    calculate();
  }, [age]);

  const txt = age && age >= 0 && age <= 220
    ? `${min.toFixed(0)}-${max.toFixed(0)}`
    : 'Please enter a number between 0 and 220.';

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)} keyboardType='decimal-pad' />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{age ? txt : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10
  },
  field: {
    marginBottom: 10
  }
});
