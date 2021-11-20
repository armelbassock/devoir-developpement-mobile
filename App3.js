// import React, {useState} from 'react';
// import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, TextInput} from 'react-native';
// import FlatListBasics from './assets/classes/FlatListBasics'

import React, { useState } from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity, FlatList} from "react-native";
import Dialog from "react-native-dialog";
import DialogContainer from "react-native-dialog/lib/Container";
import DialogInput from "react-native-dialog/lib/Input";

// //Ici nous declarons la fonction anonyme qui sera afficher comme resultat de notre application
// //Nous l'appellerons AppTeste

// const AppTest = () => {
//    /* Ici le modifications*/
//   const [data, setData] = useState([]);

//   const addListElement = () => {
//     Alert.alert(
//       'test prompt',
//       'entrez votre nom',
//       // // (text) => {
//       // //   setData( list => [ ...list, text]);
//       // }
//     );
//   }
//    ////////////////////////////////////////////////////////////////////////////////////////
//    ///////////////////////////////////////////////////////////////////////////////////////////
//   return(
//     <View style={styles.principal}>
//       {/*
//       Ceci est le composant principale de notre application.
//       Il contiendra toutes les parties et sous parties de cette application
//       son identifiant sera "principal"
//       */}

//       {/*/////////////////////// Debut de l'en-tête l'application////////////////////////////////*/}

//       <View style={styles.header}>
//         {/*
//         Cette partie contiendra l'en-tête de notre application
//         Cette derniere sera formée uniquement du titre de l'aplication
//         "Projet SJP5"
//         son identifiant sera "header"
//         */}
//         <Text style={styles.title}>Projet SJP5 🎉</Text>
//       </View>

//       {/*/////////////////////// Debut du corps de l'application/////////////////////////////////*/}

//       <View style={styles.body}>
//         {/*
//         Cette partie contiendra tout le corps de notre application.
//         Nous y trouverons plus particulierement les codes des différents blocs de l'application,
//         des différentes fonctions qui s'exécuterons lorsqu'on cliquera sur tel ou tel bouton.
//         Son identifiant sera "body"
//         */}
//         <View style={styles.left}>
//            {/*Cette partie contiendra les codes des parties constituants la partie
//            gauche du corps de l'application*/}
//            <View style={[styles.textContent, {borderColor: 'darkorchid',}]}>
//              {/*Cette partie contient le code de la zone d'affichage du coté gauche de l'application*/}
//              <Text style={styles.list}>By Armel BASSOCK</Text>
//            </View>

//            <View style={styles.btnContent}>
//              {/*Cette partie contient le code des boutons de la partie gauche de l'application*/}

//              <View style={styles.btnView}>
//                {/*le boutton ajouter*/}
//                <TouchableOpacity onPress={() => addListElement()}>
//                  <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
//                </TouchableOpacity>
//              </View>
//              <View style={styles.btnView}>
//                {/*le boutton modifier*/}
//                <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
//                  <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
//                </TouchableOpacity>
//               </View>
//              <View style={styles.btnView}>
//                {/*le boutton retirer*/}
//                <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
//                  <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
//                </TouchableOpacity>
//               </View>
//           </View>
//         </View>

//         <View style={styles.center}>
//           {/*Cette parie contient le code des boutons du centre de l'application*/}
//           <View style={styles.centerBtnView1}>
//               {/*le boutton ajouter*/}
//               <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
//                 <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.centerBtnView2}>
//               {/*le boutton modifier*/}
//               <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
//                 <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
//               </TouchableOpacity>
//             </View>

//         </View>

//         <View style={styles.right}>
//           {/*Cette partie contiendra les codes des parties constituants la partie
//           droite du corps de l'application*/}
//           <View style={[styles.textContent, {borderColor: 'darkorange',}]}>
//             {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}
//             <FlatListBasics donnee={data == null ? ['ffff'] : data}/>
//           </View>

//           <View style={styles.btnContent}>
//             {/*Cette parie contient le code des boutons de la partie droite de l'application*/}

//             <View style={styles.btnView}>
//               {/*le boutton ajouter*/}
//               <TouchableOpacity onPress={() => addListElement()}>
//                 <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.btnView}>
//               {/*le boutton modifier*/}
//               <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
//                 <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.btnView}>
//               {/*le boutton retirer*/}
//               <TouchableOpacity onPress={() => Alert.alert("123")}>
//                 <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//         </View>
//       </View>

//       {/*/////////////////////// Debut du bas de l'application/////////////////////////////////*/}

//       <View style={styles.footer}>
//         {/*
//         Cette partie contiendra le bas de l'application.
//         Elle ne contiendra que les informations de l'application et celles du developpeur
//         */}
//         <Text style={styles.message}>By Armel BASSOCK</Text>
        

//       </View>
//     </View>
//   );
// }


// /*
// Cette partie ne traite que de la mise en forme des différents composants de l'application
// */

// const styles = StyleSheet.create({

//   /* Mise en forme du composant principal */

//   principal: {
//     flex: 1,
//     paddingTop: 30,
//     backgroundColor: 'whitesmoke',
//     flexDirection: "column"
//   },

//   /* Mise en forme de l'en-tête de l'application */
//   header: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//     borderWidth: 3,
//     paddingLeft: 20,
//     paddingRight: 20,
//   },

//   /* Mise en forme du corps de l'application */

//   body: {
//     flex: 8,
//     flexDirection: "row",
//   },
//   right:{
//     flex: 5,
//   },
//   center: {
//     flex: 1.5,
//   },
//   left: {
//     flex: 5,
//   },

//   //Cette partie se consacre aux sous partie contenue dans les blocs gauche et 
//   //droit de l'application

//   textContent:{
//     flex: 8,
//     // borderColor: "blue",
//     borderWidth: 2,
//   },
//   btnContent:{
//     flex: 1,
//     marginTop: 1,
//     flexDirection: 'row'
//   },
//   btnView:{
//     flex: 1,
//     borderWidth: 1,
//     margin: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: -10,
//   },
//   centerBtnView1:{
//     borderWidth: 1,
//     margin: 1,
//     marginTop: 200,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: -10,
//   },
//   centerBtnView2:{
//     borderWidth: 1,
//     margin: 1,
//     marginTop: 5,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: -10,
//   },

//   /* Mise en forme du bas de l'application */

//   footer: {
//     flex: 0.8,
//     paddingTop: 5,
//     paddingLeft: 5,
//   },
//   message: {
//     fontSize: 10,
//     color: 'darkgray',
//   },
//   list: {
//     fontSize: 15,
//     color: 'black',
//   },
// });

// /* Ici nous demandons l'exportation de l'application pour l'execution dans un terminal */
// export default AppTest;


export default function App (){

// --------------------------------MODIFICATON------------------------------
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item.text}</Text>
  </TouchableOpacity>
);
const [choice, setChoice] = useState(null);
const [modText, ChangeModText] = useState("d");
const [selectedId, setSelectedId] = useState(null);
const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#696969" : "lightsteelblue";
  const color = item.id === selectedId ? 'white' : 'black';

  return (
    
    <Item
      item={item}
      onPress={() => {
        setSelectedId(item.id);
        setChoice(item.id);
        ChangeModText(appTasks1[item.id].text);
      }}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  );
};

// --------------------------------AJOUT---------------------------------
  const [newTask1, setnewTask1] = useState('');
  const [appTasks1, appTask1] = useState([]);
  const taskInputHandler1 = (enteredText1) => {
    setnewTask1(enteredText1);
  };
  const addTaskHandler1 = () =>{
    appTask1(currentTask => [...currentTask, {id: appTasks1.length.toString(), text: newTask1}]);
    console.log(newTask1);
    };
    

    const [newTask2, setnewTask2] = useState('');
    const [appTasks2, appTask2] = useState([]);
    const taskInputHandler2 = (enteredText2) => {
      setnewTask2(enteredText2);
    };
    const addTaskHandler2 = () =>{
      appTask2(currentTask => [...currentTask, newTask2]);
      console.log(newTask2);
      };

  const [visiblear, setVisiblear] = useState(false);
  const [visibleal, setVisibleal] = useState(false);
  const [visiblemr, setVisiblemr] = useState(false);
  const [visibleml, setVisibleml] = useState(false);
  // const [visiblesr, setVisiblesr] = useState(false);
  // const [visiblesl, setVisiblesl] = useState(false);
  const Addleft = () => {
    setVisibleal(true);   
  };
  const Addright = () => {
    setVisiblear(true);   
  };

  const Modifiedleft = () => {
    setVisibleml(true);
  };
  const Modifiedright = () => {
    setVisiblemr(true);
  };

  const handleCancel = () => {
    setVisibleal(false);
    setVisiblear(false);
    setVisibleml(false);
    setVisiblemr(false);
  };

  const handleAddleft = () => {
    setVisibleal(false);
    addTaskHandler1();
  };
  const handleAddright = () => {
    // The user has pressed the "OK" button, so here you can do your own logic.
    // ...Your logic
    setVisiblear(false);
    addTaskHandler2();
  };

  const handleModifiedleft = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    appTasks1[choice].text = modText;
    appTask1(appTasks1);
    setVisibleml(false);
  };
  const handleModifiedright = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisiblemr(false);
  };
  return (
    <View style={styles.main}> 
     
     <View style={styles.header}>
      <Text style={styles.title}>Projet SJP5 🎉</Text>
     </View>

     <View style={styles.body}>
        
        <View style={styles.left}>
          
          <View style={[styles.textContent, {borderColor: 'orange'}]}>
            {/* {appTasks1.map((task1) => <TouchableOpacity><Text>{task1}</Text></TouchableOpacity>)} */}
            <FlatList
              task1={appTasks1.map((task1) => <TouchableOpacity><Text>{task1}</Text></TouchableOpacity>)}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.btnContent}>
            
            <View style={styles.container}>
              <Button title="+" onPress={()=> Addleft()}/>
              <Dialog.Container visible={visibleal}>
                <Dialog.Title>Ajouter a la liste gauche</Dialog.Title>
                <Dialog.Description>
                    que voulez vous ajouter a la liste ?
                </Dialog.Description>
                <DialogInput placeholder = "Task List" onChangeText = {taskInputHandler1} value = {null}/>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="OK" onPress={handleAddleft} />
              </Dialog.Container>
            </View>

            <View style={styles.container}>
              <Button title="m" onPress={Modifiedleft} />  
              <DialogContainer visible={visibleml}>
                <Dialog.Title>Modifier a partir de la liste gauche</Dialog.Title>
                <DialogInput onChangeText = {ChangeModText} value = {handleModifiedleft}/>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="OK" onPress={handleModifiedleft} />
              </DialogContainer>
            </View>

            <View style={styles.container}>
              <Button title="-" onPress={Modifiedleft} /> 
            </View>

          </View>
          
        </View>

        <View style={styles.center}>
          <View style={styles.container}>
              <Button title=">>" onPress={Modifiedleft}/> 
          </View>
          <View style={styles.container}>
              <Button title="<<" onPress={Modifiedleft}/> 
          </View>
        </View>

        <View style={styles.right}>
          
          <View style={[styles.textContent, {borderColor: 'orange',}]}>
          {appTasks2.map((task2) => <TouchableOpacity><Text>{task2}</Text></TouchableOpacity>)}
          
          </View>
          <View style={styles.btnContent}>
            
            <View style={styles.container}>
              <Button title="+" onPress={Addright} />
              <Dialog.Container visible={visiblear}>
                <Dialog.Title>Ajouter a la liste droite</Dialog.Title>
                <Dialog.Description>
                    que voulez vous ajouter a la liste ?
                </Dialog.Description>
                <DialogInput placeholder = "Task List" onChangeText = {taskInputHandler2} value = {null}/>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="OK" onPress={handleAddright} />
              </Dialog.Container>
            </View>

            <View style={styles.container}>
              <Button title="m" onPress={Modifiedright} />  
              <DialogContainer visible={visiblemr}>
                <Dialog.Title>Modifier a partir de la liste droite</Dialog.Title>
                <DialogInput label='text saisi'/>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="OK" onPress={handleModifiedright} />
              </DialogContainer>
            </View>

            <View style={styles.container}>
              <Button title="-" onPress={Modifiedright} /> 
            </View>

          </View>
          
        </View>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'whitesmoke',
    flexDirection: "column"
  },
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 8,
    flexDirection: "row",
  },
  left: {
        flex: 5,
      },
  textContent:{
    flex: 8,
    // borderColor: "blue",
    borderWidth: 2,
  },
  center: {
    flex: 1.5,
  },
  right:{
    flex: 5,
  },
  input :{
    borderColor:"black",
    borderWidth:1 ,
    padding :20,
    },
    item: {
      marginVertical: 1,
      marginHorizontal: 1,
    },
    flatListItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  
});
