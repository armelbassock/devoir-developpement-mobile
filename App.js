import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog/lib/Input';
// import FlatListBasics from './assets/classes/FlatListBasics'

//Ici nous declarons la fonction anonyme qui sera afficher comme resultat de notre application
//Nous l'appellerons AppTest
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item.text}</Text>
  </TouchableOpacity>
);

const Item2 = ({ item2, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item2.text}</Text>
  </TouchableOpacity>
);


const AppTest = () => {
   /* Ici le modifications*/
   const [choice, setchoice] = useState(null);
   const [alterText, onChangealterText] = useState(" ")

   const [choicel, setchoicel] = useState(null);
   const [alterTextl, onChangealterTextl] = useState(" ")
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////enter un mot right/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
  const [visible, setVisible] = useState(false);
  const [newTaskr, setnewTaskr] = useState('');
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const touche = () => {
    setVisible(true);
  };

  const cancel = () => {
    setVisible(false);
  };

  const add = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
    setData(listActuelle => [...listActuelle, {id: data.length.toString(), text: newTaskr}]);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "orange" : "beige";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setchoice(item.id);
          onChangealterText(data[item.id].text);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////enter un mot left/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const [visiblel, setVisiblel] = useState(false);
const [newTaskl, setnewTaskl] = useState('');
const [datal, setDatal] = useState([]);
const [selectedIdl, setSelectedIdl] = useState(null);

const touchel = () => {
  setVisiblel(true);
};

const cancell = () => {
  setVisiblel(false);
};

const addl = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  setVisiblel(false);
  setDatal(listActuelle => [...listActuelle, {id: datal.length.toString(), text: newTaskl}]);
};

const renderItem2 = ({ item }) => {
  const backgroundColor = item.id === selectedIdl ? "purple" : "lightsteelblue";
  const color = item.id === selectedIdl ? 'white' : 'black';

  return (
    
    <Item2
      item2={item}
      onPress={() => {
        setSelectedIdl(item.id);
        setchoicel(item.id);
        onChangealterTextl(datal[item.id].text);
      }}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////modifier un mot right//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const [visibleM, setVisibleM] = useState(false);

const toucheM = () => {
  setVisibleM(true);
};

const cancelM = () => {
  setVisibleM(false);
};

const modify = () => {
  data[choice].text = alterText;
  setData(data);
  setVisibleM(false);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////modifier un mot left//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const [visibleMl, setVisibleMl] = useState(false);

const toucheMl = () => {
  setVisibleMl(true);
};

const cancelMl = () => {
  setVisibleMl(false);
};

const modifyl = () => {

  datal[choicel].text = alterTextl;
  setDatal(datal);
  setVisibleMl(false);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////retirer un mot right//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const [visibleR, setVisibleR] = useState(false);

const toucheR = () => {
  setVisibleR(true);
};

const cancelR = () => {
  setVisibleR(false);
};

const remove = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  data[choice].text =null;
  setData(data);
  setVisibleR(false);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////retirer un mot droite//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const [visibleRl, setVisibleRl] = useState(false);

const toucheRl = () => {
  setVisibleRl(true);
};

const cancelRl = () => {
  setVisibleRl(false);
};

const removel = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  datal[choicel].text =null;
  setDatal(datal);
  setVisibleRl(false);
};

// Deplacer////////////////////
const deplacel = () => {
  var temp1 = data[choice].text;
  setDatal(listActuelle => [...listActuelle, {id: data.length.toString(), text: temp1}]);
  data[choice].text =null;
  temp1=null;
  setData(data);
};

const deplace = () => {
  var temp2 = datal[choicel].text;
  setData(listActuelle => [...listActuelle, {id: datal.length.toString(), text: temp2}]);
  datal[choicel].text =null; 
  temp2=null;
  setDatal(datal);
};

   ////////////////////////////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////////////////////////////
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
            <FlatList
              data={datal}
              renderItem={renderItem2}
            />
          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie gauche de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={touchel}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={toucheMl}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={toucheRl}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          {/*Cette parie contient le code des boutons du centre de l'application*/}
          <View style={styles.centerBtnView1}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={deplace}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerBtnView2}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={deplacel}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.right}>
          {/*Cette partie contiendra les codes des parties constituants la partie
          droite du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'darkorange',}, styles.flatListContainer]}>
            {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}

            {/* ici est le code de la flatlist */}
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie droite de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={touche}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={toucheM}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={toucheR}>
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

      </View>

      {/*Boite de dialogue */}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Ajouter un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setnewTaskr}
        />
        <Dialog.Button label="Annuler" onPress={cancel} />
        <Dialog.Button label="Ajouter" onPress={add} />
      </Dialog.Container>

      {/*Boite de dialogue */}
      <Dialog.Container visible={visiblel}>
        <Dialog.Title>Ajouter un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setnewTaskl}
        />
        <Dialog.Button label="Annuler" onPress={cancell} />
        <Dialog.Button label="Ajouter" onPress={addl} />
      </Dialog.Container>

      

      {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue */}
    <Dialog.Container visible={visibleM}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangealterText}
          value={alterText}
        />
        <Dialog.Button label="Annuler" onPress={cancelM} />
        <Dialog.Button label="Modifier" onPress={modify} />
    </Dialog.Container>

    <Dialog.Container visible={visibleMl}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangealterTextl}
          value={alterTextl}
        />
        <Dialog.Button label="Annuler" onPress={cancelMl} />
        <Dialog.Button label="Modifier" onPress={modifyl} />
    </Dialog.Container>

     {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue */}
    <Dialog.Container visible={visibleR}>
        <Dialog.Title>Supprimer un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment supprimer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={cancelR} />
        <Dialog.Button label="OUi" onPress={remove} />
    </Dialog.Container>

        {/*Boite de dialogue */}
        <Dialog.Container visible={visibleRl}>
        <Dialog.Title>Supprimer un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment supprimer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={cancelRl} />
        <Dialog.Button label="OUi" onPress={removel} />
    </Dialog.Container>
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
  flatListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
    borderWidth: 2,
    backgroundColor: "#fefbf1",
    borderRadius: 10,
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
  item: {
    marginVertical: 1,
    marginHorizontal: 1,
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