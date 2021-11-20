import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

//Ici nous declarons la fonction anonyme qui sera afficher comme resultat de notre application
//Nous l'appellerons AppTest

const AppTest = () => {
  return(
    <View style={styles.principal}>
      {/*
      Ceci est le composant principale de notre application.
      Il contiendra toutes les parties et sous parties de cette application
      son identifiant sera "principal"
      */}

      {/*/////////////////////// Debut de l'en-tête l'application////////////////////////////////*/}

      <View style={styles.header}>
        {/*
        Cette partie contiendra l'en-tête de notre application
        Cette derniere sera formée uniquement du titre de l'aplication
        "Projet SJP5"
        son identifiant sera "header"
        */}
        <Text style={styles.title}>Projet SJP5 🎉</Text>
      </View>

      {/*/////////////////////// Debut du corps de l'application/////////////////////////////////*/}

      <View style={styles.body}>
        {/*
        Cette partie contiendra tout le corps de notre application.
        Nous y trouverons plus particulierement les codes des différents blocs de l'application,
        des différentes fonctions qui s'exécuterons lorsqu'on cliquera sur tel ou tel bouton.
        Son identifiant sera "body"
        */}
        <View style={styles.left}>
          {/*Cette partie contiendra les codes des parties constituants la partie
          gauche du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'darkorchid',}]}>
            {/*Cette partie contient le code de la zone d'affichage du coté gauche de l'application*/}

          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie gauche de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={() => alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={() => alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={() => alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          {/*Cette parie contient le code des boutons du centre de l'application*/}
          <View style={styles.centerBtnView1}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={() => alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerBtnView2}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={() => alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.right}>
          {/*Cette partie contiendra les codes des parties constituants la partie
          droite du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'darkorange',}]}>
            {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}

          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie droite de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={() => alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={() => alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={() => alert(1+1)}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      {/*/////////////////////// Debut du bas de l'application/////////////////////////////////*/}

      <View style={styles.footer}>
        {/*
        Cette partie contiendra le bas de l'application.
        Elle ne contiendra que les informations de l'application et celles du developpeur
        */}
        <Text style={styles.message}>Projet SJP5 V 0.0.1</Text>
        <Text style={styles.message}>fait à Douala le 14 Novembre 2021</Text>
        <Text style={styles.message}>par Charles Nzie Nsaba </Text>
        <Text style={styles.message}>email: cnzie@univ-catho-sjd.com</Text>

      </View>
    </View>
  );
}


/*
Cette partie ne traite que de la mise en forme des différents composants de l'application
*/

const styles = StyleSheet.create({

  /* Mise en forme du composant principal */

  principal: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'whitesmoke',
    flexDirection: "column"
  },

  /* Mise en forme de l'en-tête de l'application */
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },

  /* Mise en forme du corps de l'application */

  body: {
    flex: 8,
    flexDirection: "row",
  },
  right:{
    flex: 5,
  },
  center: {
    flex: 1.5,
  },
  left: {
    flex: 5,
  },

  //Cette partie se consacre aux sous partie contenue dans les blocs gauche et 
  //droit de l'application

  textContent:{
    flex: 8,
    // borderColor: "blue",
    borderWidth: 2,
  },
  btnContent:{
    flex: 1,
    marginTop: 1,
    flexDirection: 'row'
  },
  btnView:{
    flex: 1,
    borderWidth: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView1:{
    borderWidth: 1,
    margin: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView2:{
    borderWidth: 1,
    margin: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },

  /* Mise en forme du bas de l'application */

  footer: {
    flex: 0.8,
    paddingTop: 5,
    paddingLeft: 5,
  },
  message: {
    fontSize: 10,
    color: 'darkgray',
  },

});

/* Ici nous demandons l'exportation de l'application pour l'execution dans un terminal */
export default AppTest;