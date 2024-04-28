import React from 'react';

import {  TextInput,StyleSheet, Text, View, Button } from 'react-native';



function Contact() {
  return (
    <View style={styles.container}>
            <Text style={styles.titreGrand}>Legends of XEFI</Text>
            <Text style={styles.titre}>Formulaire de contact</Text>
            <TextInput
            style={styles.input}
            placeholder="Votre email*"
            
            />
            <TextInput
            style={styles.input}        
            placeholder="Sujet*"
            />
            <TextInput
            style={styles.inputMessage}
            placeholder="Votre message*"
            />
            <Button title="Envoyer" style={styles.button}>Envoyer</Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      
  },
  titreGrand: {
    color: '#3B5998',
    fontSize: 24,
    lineHeight: 84,
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 30

  },
  titre: {
    color: '#3B5998',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingBottom: 30
  },
  input: {
    width: '95%',
    marginLeft: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3B5998',
    padding: 20,
    justifyContent: 'center',
    alignContent : 'center',
    fontSize: 16,
    color:'gray',
    
  },
  inputMessage: {
    width: '95%',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#3B5998',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 200,
    marginBottom: 20,
    fontSize: 16,
  },
  
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    width: '60%',
    marginLeft: '20%',
    padding: 10,
    alignItems: 'right',
    borderColor: 'gray', 
    backgroundColor: '#3B5998'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default Contact;