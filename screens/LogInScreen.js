import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity } from 'react-native';

export default class LogIn extends React.Component {
    constructor(){
        super()
        this.state={
            emailId: null,
            password:null
        }
    }

    logIn = async(email,password)=>{
if(email && password){
   try{
        const response =await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
            this.props.navigation.navigate("Transaction")
        }
   }
   catch(error){
       switch(error.code){
           case "auth/user-not-found":
               alert("User Dosent Exist")
               break;
               case "auth/invalid-email":
                   alert("Incorrect Email or Password")
                   break;
       }
   }
   
}
}

   

  render(){
    return (
<View>

<View>
  <Image style={styles.image} source={require('../assets/booklogo.jpg')}/>
  <Text style={styles.text}>Willy App</Text>
  </View>

  <View>
<TextInput style ={styles.inputBox}
placeholder = "abc@example.com"
keyboardType = "email-address"
onChangeText ={(text)=>{
    this.setState({
        emailId:text
    })
}}/>

<TextInput style ={styles.inputBox}
placeholder = "password"
secureTextEntry = {true}
onChangeText ={(text)=>{
    this.setState({
        password:text
    })
}}/>
  </View>
<View>
<TouchableOpacity style ={styles.button}
onPress = {()=>{
    this.logIn(this.state.emailId,this.state.password)
}}>
<Text style ={{textAlign:"center"}}>LogIn</Text>
</TouchableOpacity>
</View>

</View>
      
    );
  }
}
const styles  = StyleSheet.create({
    image:{
        width:200,
        height:200,
    },
    text:{
        fontSize:30,
        textAlign:"center"
    },
    inputBox:{
      width:100,
      height:50,
      borderWidth:2  
    },
    button:{
        width:50,
        height:25,
        alignSelf:"center",
        backgroundColor:"blue"
    }
})



