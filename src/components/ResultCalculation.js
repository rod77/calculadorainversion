import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    const {capital,interest,days,total,errorMessage} = props 
    return (
        <View style={styles.content}>
            {total?
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
             
                    <DataResult title={"Cantidad Invertida:"} value={`$${capital}.-`}/>
                    <DataResult title={"Tasa de interés anual:"} value={`${interest}%`}/>
                    {days==1?<DataResult title={"Plazo:"} value={`${days} día  `}/>
                    :
                    <DataResult title={"Plazo:"} value={`${days} días  `}/>
                    }
                    <View style={{borderBottomColor: 'black',borderBottomWidth: 1, marginBottom:15}}/>
                    <DataResult title={"Ganancia diaria:"} value={`$ ${total.monthlyFee}.-`}/>
                    <DataResult title={"Ganancia Total:"} value={`$ ${total.allFee}.-`}/>
                    <DataResult title={"Al final del plazo recibís:"} value={`$ ${total.totalPayable}.-`}/>
                 
                </View>
            :
                <Text style={styles.error}>{errorMessage}</Text>
            }
        </View>
    )
}

function DataResult(props) {
    const {title, value} =props
    return(
        <View style={styles.value}>
        <Text>{title}</Text>
        <Text>{value}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    content:{
        bottom: 50,
        marginTop:0,
        marginHorizontal:40
    },
    boxResult:{
        padding:30
    },
    title:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:10
    },
    value:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20
    },
    error: {
        textAlign:"center",
        color: "#f00",
        fontWeight:"bold",
        fontSize:20,
        marginTop:50
    }
})
