import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Header from "../../Header";
import Busca from "../../Busca";

export default function Home ({navigation}) {
    return (
      <View style={styles.container}> 
        <Header/>
        <Busca/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },


  });

