import React from 'react';

import { StyleSheet, Text, View} from 'react-native';



function Home() {
  return (
    <View style={styles.container}>
         
          <Text style={styles.titreGrand}>Legends of XEFI</Text>
          <Text style={styles.titre}>Bienvenue dans les Terres de Xefi</Text>
          <Text style={styles.p1}>Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. </Text>
          <Text style={styles.p2}>Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.</Text>
          <View style={styles.container2}>
                <Text style={styles.titre2}>Rencontrez des Personnages Inoubliables</Text>
                <Text style={styles.p12}>Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations.</Text>
                <Text style={styles.p12}>Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être.</Text>
                <Text style={styles.p22}>Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.</Text>
          </View>
          
          

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  container2: {
    flex: 1,
    backgroundColor: '#3B5998',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  titreGrand: {
    color: '#3B5998',
    fontSize: 24,
    lineHeight: 84,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 60
    

  },
  titre: {
    color: '#3B5998',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30
  },
  p1: {
    color: '#3B5998',
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 10,
    textAlign: 'center'
  },
  p2: {
    color: '#3B5998',
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 100,
    textAlign: 'center'
  },
  titre2: {
    color: 'white',
    
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    borderTopRightRadius: 100
  },
  p12: {
    color: 'white',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 10,
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 10,
  },
  p22: {
    color: 'white',
    
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 10,
    paddingBottom: 165,
    textAlign: 'center'
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    width: '60%',
    marginLeft: '20%',
    padding: 10,
    alignItems: 'center',
    borderColor: '#c0c0c0', 
    backgroundColor: '#3B5998',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c0c0c0', 
  },
});

export default Home;