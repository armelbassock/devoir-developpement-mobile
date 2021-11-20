import React, { useState } from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Dialog from "react-native-dialog";
import DialogContainer from "react-native-dialog/lib/Container";
import DialogInput from "react-native-dialog/lib/Input";

     class add extends React.Component (){
        render(){
            return(
                <View style={styles.container}>
        <Button title="+" onPress={Add} children={Add}/>
        <Dialog.Container visible={visible}>
            <Dialog.Title>Ajouter deux element a la liste</Dialog.Title>
            <Dialog.Description>
                que voulez vous ajouter a la liste ?
            </Dialog.Description>
            <DialogInput label='text saisi'/>
            <Dialog.Button label="Cancel" onPress={handleCancel} />
            <Dialog.Button label="OK" onPress={handleAdd} />
            </Dialog.Container>
        </View>
            )
        }
     }
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})

export default add;