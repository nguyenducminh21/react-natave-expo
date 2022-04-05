import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import moUser from '../Model/moUser.js';

const Stack = createNativeStackNavigator();
export default function HomeScreen({ navigation }) {
  const [txtUserName, onChangeUserName] = React.useState();
  const [txtPassWord, onChangePassWord] = React.useState();  
  function Validate(){    
    const user = new moUser(User.FindUserbyEmail(txtUserName));
    if(txtUserName == user.email && txtPassWord == user.password)
      navigation.navigate('UserInfo',{email: txtUserName})
    else
      Alert.alert('Tài khoản không đúng!');
  }
  return (
    <View style={styles.container}>    
      <Image
        style={styles.vipageLogo}
        source={require('../img/logovipagegreen.png')}
      />
      <Text style = {styles.contentText}>VIPAGE APP</Text>
      <View>     
        <View style = {styles.inputTextGroup}>          
          <TextInput        
            style={styles.inputText1}      
            placeholder="User name"
            keyboardType="default" 
            inlineImageLeft="username"
            onChangeText={onChangeUserName}
            value={txtUserName}
          />
          <AntDesign style = {{paddingTop: 5,marginLeft: -30,}} name="user" size={38} color="#91F2F2" /> 
        </View>  
        <View style = {styles.inputTextGroup}>
          <TextInput   
            secureTextEntry={true}     
            style={styles.inputText2}      
            placeholder="Password"
            keyboardType="default"
            onChangeText={onChangePassWord}
            value={txtPassWord}
          />
          <AntDesign style = {{paddingTop: 5,marginLeft: -30,}} name = "lock" size={38} color="#91F2F2" /> 
        </View>
       
      </View>   
      <View style = {styles.buttonGroup}>
        <View style = {styles.buttonText}>
          <Button    
            title="Đăng nhập"           
            onPress={Validate}             
          />
        </View>
        <View style = {styles.buttonText2}>
          <Button    
            title="Đăng ký"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>   
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 15,
  },
  buttonGroup:{
    paddingTop: 30,
  },
  buttonText:{
    marginTop: 20,
    backgroundColor: '#91F2F2',
    width: 300,
    height: 40,
    borderRadius: 10,
  },
  buttonText2:{
    marginTop: 20,
    backgroundColor: '#BAE0E0',
    width: 300,
    height: 40,    
    borderRadius: 10,
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
  inputText2: {
    padding: 15,    
    width: 250,
    height: 50,
    borderBottomWidth: 1,
  },
  vipageLogo: {
    width: 200,
    height: 200,
  },
  contentText: {
    paddingTop: 5,
    fontSize: 42,
    color: '#91F2F2'
  }
});
