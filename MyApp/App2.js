import { StatusBar } from "expo-status-bar";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button,Linking } from "react-native";
import { FontAwesome,AntDesign, MaterialIcons  } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="registered" size={24} color="black" />
          <Text style={{ color: "black", fontSize: 28 }}>Register</Text>
        </View>
        <View>
            <View style = {styles.inputTextGroup}>  
                <AntDesign style = {{paddingTop: 10, marginLeft: 5,}} name="user" size={32} color="#91F2F2" />         
                <TextInput        
                    style={styles.inputText1}      
                    placeholder="User name"
                    keyboardType="default" 
                    inlineImageLeft="username"
                />            
            </View>  
        </View>
        <View>
            <View style = {styles.inputTextGroup}>  
                <MaterialIcons style = {{paddingTop: 10, marginLeft: 5,}} name="email" size={32} color="#91F2F2" />         
                <TextInput        
                    style={styles.inputText1}      
                    placeholder="Email"
                    keyboardType="default" 
                    inlineImageLeft="username"
                />            
            </View>  
        </View>
        <View>
            <View style = {styles.inputTextGroup}>  
                <AntDesign style = {{paddingTop: 10, marginLeft: 5,}} name="mobile1" size={32} color="#91F2F2" />         
                <TextInput        
                    style={styles.inputText1}      
                    placeholder="Mobile"
                    keyboardType="default" 
                    inlineImageLeft="username"
                />            
            </View>  
        </View>
        <View>
            <View style = {styles.inputTextGroup}>  
                <AntDesign style = {{paddingTop: 10, marginLeft: 5,}} name="lock" size={32} color="#91F2F2" />         
                <TextInput        
                    style={styles.inputText1}      
                    placeholder="Password"
                    keyboardType="default" 
                    inlineImageLeft="username"
                />            
            </View>  
        </View>
        <View style = {styles.buttonText}>
           <Button 
               title="Sigup"    
           />
        </View>
        <View style = {{paddingTop: 20,flexDirection: 'row'}}>
            <Text style={{color: 'blue'}}>Already have an acount?</Text>
            <Text 
                style={{color: 'blue',marginLeft:20, textDecorationLine: true}}
                onPress={() => Linking.openURL('http://google.com')}>            
                Sign in
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    marginLeft: 'auto',
    marginRight: 'auto',    
  },
  inputTextGroup:{
    paddingTop: 30,
    flexDirection: 'row',
  },
  inputText1: {
    padding: 15,  
    width: 250,
    height: 50,
    borderBottomWidth: 1,
  },
  buttonText:{
    marginTop: 50,
    backgroundColor: '#91F2F2',
    width: 300,
    height: 40,
    borderRadius: 10,
  },
});
