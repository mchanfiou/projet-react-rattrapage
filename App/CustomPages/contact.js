import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TextInput ,ImageBackground ,StyleSheet, Text, View, Button } from 'react-native';



function Contact() {
  return (
    <View style={styles.container}>
        
            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <StatusBar style="auto" />
            <TextInput
            style={styles.input}
            placeholder="Alors la recherche ? ..."
            placeholderTextColor="black"
            value={"Votre email*"}
            />
            <TextInput
            style={styles.input}
            placeholder="Alors la recherche ? ..."
            placeholderTextColor="black"
            value={"Sujet*"}
            />
            <TextInput
            style={styles.inputMessage}
            placeholder="Alors la recherche ? ..."
            placeholderTextColor="black"
            value={"Votre message*"}
            />
            <Button title="Envoyer" style={styles.button}>Envoyer</Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      
  },
  
  input: {
    width: '75%',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(169, 169, 169, 0.8)',
    borderRadius: 5,
    marginLeft: 50,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent : 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputMessage: {
    width: '75%',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(169, 169, 169, 0.8)',
    borderRadius: 5,
    marginLeft: 50,
    padding: 50,
    marginBottom: 10,
    
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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

export default Contact;