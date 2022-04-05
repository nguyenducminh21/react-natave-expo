import React from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button,Linking } from "react-native";
import { Entypo, AntDesign, MaterialIcons  } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import moUser from '../Model/moUser.js';

const Stack = createNativeStackNavigator();

export default function Register({ route, navigation }) {

  const {email} = route.params;  
  const user = new moUser(User.FindUserbyEmail(email));

  return (
    <SafeAreaView>
      <View> 
        <View>
          <Image
            style={styles.tinyLogo}
            source={user.img}
          />
        </View>       
        <Text style = {{marginLeft: '32%', marginTop: 20, color: "black", fontSize: 18 }}>{user.name}</Text>
        <View style = {{marginTop: 50, backgroundColor: '#B6B8B8', height: 50, width: '100%'}}></View>
        <View>
            <View style = {styles.infoS}>                  
                <Entypo style = {{paddingTop: 32, marginLeft: 25,}} name="email" size={24} color="black" />      
                <Text style = {{marginLeft: 5, marginTop: 35, fontSize: 16, fontWeight: 'bold'}}>Email:</Text>
                <Text style = {{marginLeft: '15%', marginTop: 35, fontSize: 16, fontStyle: 'italic'}}>{user.email}</Text>
            </View>  
            <View style = {styles.infoS}>  
                <AntDesign style = {{paddingTop: 32, marginLeft: 25,}} name="phone" size={24} color="black" />                      
                <Text style = {{marginLeft: 5,marginTop: 35, fontSize: 16, fontWeight: 'bold'}}>Điện thoại:</Text>
                <Text style = {{marginLeft: '5%', marginTop: 35, fontSize: 16, fontStyle: 'italic'}}>{user.phone}</Text>
            </View>      
            <View style = {styles.infoS}>                   
                <AntDesign style = {{paddingTop: 32, marginLeft: 25,}} name="home" size={24} color="black" />                 
                <Text style = {{marginLeft: 5,marginTop: 35, fontSize: 16, fontWeight: 'bold'}}>Địa chỉ:</Text>
                <Text style = {{marginLeft: '10%', marginTop: 35, fontSize: 16, fontStyle: 'italic'}}>{user.diachi}</Text>
            </View>         
        </View>     
      </View>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoS: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#B6B8B8',
    height: 80,    
  },
  tinyLogo: {
    marginTop: 50,
    borderRadius: 80,
    width: 150,
    height: 150,
    marginLeft: '30%',
  },  
});
