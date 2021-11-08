
import React, { useState } from "react";

import { StyleSheet, TextInput, View } from "react-native"
import colors from "../utils/colors"
import { Picker } from '@react-native-picker/picker';

export default function Form(props) { 
    const {setCapital, setInterest, setDays} = props 


    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad a invertir"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setCapital(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Tasa de interés anual"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={e => setInterest(e.nativeEvent.text)}
                />

            </View>
            <TextInput 
                    placeholder="Días"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputDays]}
                    onChange={e => setDays(e.nativeEvent.text)}
                />

            {/* <Picker
                style={picketSelectStyles.inputAndroid}
                selectedValue={selectedMonth}
                mode="dialog"
                onValueChange={(itemValue, itemIndex) =>{
                    setSelectedMonth(itemValue)
                    setMonths(itemValue)}
                }> 
                <Picker.Item label="Cantidad de Meses" value={null} />
                <Picker.Item label="1 meses" value="1" />
                <Picker.Item label="2 meses" value="2" />
                <Picker.Item label="3 meses" value="3" />
                <Picker.Item label="4 meses" value="4" />
                <Picker.Item label="5 meses" value="5" />
                <Picker.Item label="6 meses" value="6" />
                <Picker.Item label="7 meses" value="7" />
                <Picker.Item label="12 meses" value="12" />
                <Picker.Item label="24 meses" value="24" />
                
            </Picker> */}

        </View>
    )
}


const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 30,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 200,
        justifyContent: "center",
        
    },
    viewInputs: {
        flexDirection: "column",
        
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "100%",
        marginTop: 5,
        marginBottom: 5,
        color: "#000",
        paddingHorizontal: 10,
        
    },
    inputPercentage: {
        width: "100%",
    },
    inputDays: {
        width: "100%",
    }
   
})

const picketSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize:16,
        paddingVertical:12,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color:"black",
        paddingRight: 30,
        backgroundColor: "#fff",
        marginLeft:-5,
        marginRight:-5
    },
    inputAndroid: {
        fontSize:16,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color:"black",
        paddingRight: 30,
        backgroundColor: "#fff",
        marginLeft:-5,
        marginRight:-5
    }

})