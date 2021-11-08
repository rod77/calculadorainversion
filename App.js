import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, YellowBox, Button } from 'react-native';

import colors from  './src/utils/colors'
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';



export default function App() {
  
  const [capital, setCapital] = useState(null)
  const [interest, setInterest] = useState(null)
  const [days, setDays] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage,  setErrorMessage] = useState(null)

  useEffect(() => {
    if (capital && interest && days) 
      calculate()
    else reset() 
    
  }, [capital, interest, days])


  const calculate =() => {
    reset();
    if(!capital){
      setErrorMessage("Añade la cantidad que quieres invertir")
    } else if(!interest){
      setErrorMessage("Añade el interés anual")
    }  else if(!days){
      setErrorMessage("Añade los días a invertir")
    } else {
      const i =(interest /100)/365
      setTotal({
        monthlyFee: (i*capital).toFixed(2).replace('.',','),
        allFee: (i*capital*days).toFixed(2).replace('.',','),
        totalPayable: (parseFloat(capital)+parseFloat(i*capital*days)).toFixed(2).replace('.',','),
      })
      
      console.log("total:",total) 
  }
  }

  const reset = () =>{
    setErrorMessage("")
    setTotal(null)
  }

  return (
    <>
    <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Calculadora de Inversión</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setDays={setDays}
        />
      </SafeAreaView>
      
      <ResultCalculation 
        capital={capital}
        interest={interest}
        days={days}
        total={total}
        errorMessage={errorMessage}/>
      <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    height: 290,

    alignItems:"center"
  },
  background:{
    backgroundColor:colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position:"absolute",
    zIndex:-1
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop:15
  }
});
