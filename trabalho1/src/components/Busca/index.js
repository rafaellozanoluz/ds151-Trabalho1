import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import DropdownComponentMarca from "../DropdownMarca";
import DropdownComponentModelo from "../DropdownModelo";
import DropdownComponentAno from "../DropdownAno";
import api from "../api"

export default function Busca(){
    
    const [marca, setMarca] = useState ("22")
    const [modelo, setModelo] = useState ("4515")
    const [ano, setAno] = useState ("2009-1")
    const [infoFipe, setInfoFipe] = useState({})
    

    const insertDados = () => {
        getFipe();
    }
    
    const getFipe = async () => {
        try{
        const {data} = await api.get(`/brands/${marca}/models/${modelo}/years/${ano}`)
        setInfoFipe(data)
        }catch(error){
            Alert.alert("Não foi possível fazer a consulta", error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxBusca}>
                <Text style={styles.titleBusca}>MARCA</Text>               
            </View>

            <View>
                    <DropdownComponentMarca style={styles.drop}/>
            </View>

            <View style={styles.boxBusca}>
                <Text style={styles.titleBusca}>MODELO</Text>
            </View>

            <View>
                    <DropdownComponentModelo style={styles.drop}/>
            </View>

            

            <View style={styles.boxBusca}>
                <Text style={styles.titleBusca}>ANO</Text>
            </View>

            <View>
                    <DropdownComponentAno style={styles.drop}/>
            </View>



            <View>
                <TouchableOpacity style={styles.botao} onPress={insertDados}>
                    <Text style={styles.titleBotao}>CONSULTAR</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.result}>
                <Text>Código da FIPE: {infoFipe.codeFipe}</Text>
                <Text>Marca: {infoFipe.brand}</Text>
                <Text>Modelo: {infoFipe.model}</Text>
                <Text>Preço: {infoFipe.price}</Text>
                <Text>Ano: {infoFipe.modelYear}</Text>
                <Text>Mês de referência: {infoFipe.referenceMonth   }</Text>
            </View>

        </View>
        
    );

    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fafafa',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
        paddingStart: 15,
        paddingEnd: 15,
        marginTop: -24,
        marginStart: 40,
        marginEnd: 40,
        paddingBottom: 40,
        borderRadius: 4,
        justifyContent: 'space-between'
    },

    boxBusca:{
        backgroundColor:'#778899',
        width: 220,
        height: 40,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart:10,
        paddingEnd: 10,
        marginTop: 5,
        marginBottom: 5,
        marginStart: 10,
        marginEnd: 10,
        borderRadius: 4,
    },
    
    titleBusca:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'

    },

    drop:{
        width: 120,
        height: 60
    },

    botao:{
        backgroundColor: 'grey',
        width:150,
        height: 40,
        borderRadius: 4,
        elevation: 20,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart: 10,
        paddingEnd: 10,


    },

    titleBotao:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF'

    },

    result:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'left',
        width:250,
        height:100,
        paddingTop: 30,
        paddingBottom: 10,
        paddingStart:20,
        paddingEnd: 10,
    }
})