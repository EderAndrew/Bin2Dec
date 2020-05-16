import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (binary === '') {
      setDecimal(0);
      setMessage('');
    }
  }, [binary]);

  const handlerJustEight = (n) => {
    if (n.length <= 8) {
      setBinary(n);
    } else {
      setMessage('Jus 8 characters only');
    }
    if (n.match(/^[0-1]+$/g) === null) {
      setMessage('Enter either 0 or 1');
    }
    return n;
  };

  const handlerResult = () => {
    let num = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
      // eslint-disable-next-line radix
      num += parseInt(binary[i]) * Math.pow(2, binary.length - 1 - i);
    }
    setDecimal(num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Binary App</Text>
      <Text style={styles.description}>
        This is a binary to decimal convertor
      </Text>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter either 0 or 1"
          value={binary}
          onChangeText={(number) => handlerJustEight(number)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonEnter} onPress={handlerResult}>
          <Text style={styles.buttonTitle}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultado}>{decimal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFA55',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#B83945',
  },
  description: {
    marginBottom: 30,
    color: '#B83945',
  },
  message: {
    fontSize: 20,
    color: '#B83945',
    fontWeight: 'bold',
  },
  inputArea: {
    alignItems: 'center',
  },
  input: {
    width: 180,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  buttonEnter: {
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B83945',
    marginVertical: 20,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  resultado: {
    color: '#B83945',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default App;
