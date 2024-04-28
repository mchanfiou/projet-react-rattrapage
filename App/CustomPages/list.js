import React, { useState} from 'react';
import {View, Text, ScrollView, StyleSheet } from 'react-native';

function List ({navigation}) {
  const [results, setResults] = useState([]);
  const URL = `https://api-fantasygame.eu-4.evennode.com/get-characters/`
  
  async function getId () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    setResults(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
  getId();

  return (
    <View style={styles.container}>
         <Text style={styles.titreGrand}>Legends of XEFI</Text>
          <ScrollView style={styles.results}>
            {results.map((result) => (
              <View style={styles.containerList}>
                    <Text key={result.id}
              source={{ uri: result.previewURL }}
              style={styles.text} >{result.name}{"\n"}{"\n"}{result.description}{"\n"}{"\n"}Rarity:{"\n"}{result.rarity}/5</Text>
              </View>
              
            ))}
          </ScrollView>
          
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  containerList: {
    flex: 1,
    backgroundColor: 'white'
  },
  titreGrand: {
    color: '#3B5998',
    fontSize: 24,
    lineHeight: 84,
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 30    

  },
  input: {
    width: '75%',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(169, 169, 169, 0.8)',
    borderRadius: 5,
    margin: 50,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent : 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  results: {
    
    
  },
  text: {
    padding: 30,
    color: 'white',
    height: 200,
    marginBottom: 25,
    
    alignContent: 'center',
    backgroundColor: '#3B5998'
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    width: '50%',
    marginLeft: '25%',
    padding: 10,
    alignItems: 'center',
    borderColor: 'gray', 
    backgroundColor: 'gray',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default List;