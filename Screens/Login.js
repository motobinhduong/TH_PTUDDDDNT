import { useEffect, useState } from "react";
import { View ,Image, Text} from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
//import { useMyContextProvider } from "../store";

const Login =({navigation})=>{

//const [controller, dispatch] = useMyContextProvider()
const [ email, setEmail] = useState("")
const [password, setPassword] = useState("")
// const {userLogin} = controller
// useEffect(()=>{
//     //console.log(userLogin)
//     if(userLogin !=null)
//     {
//         navigation.navigate("Home")
//     }
// },[userLogin])
// const handleLogin =()=>{
//     login(dispatch, email,password)
// }
return(
    <View style={{flex:1, justifyContent:"center",backgroundColor:"white", padding:10}}>
        <Image
            resizeMode="stretch"
            source={require("../assets/logofirebase.png")}
            style={{height:100, marginBottom:20}}
            />
        <TextInput
        label={"Email"}
        value={email}
        onChangeText={setEmail} 
        placeholder="Nhap dia chi Email"/>
        <HelperText type="error">
            Sai dia chi email
        </HelperText>
        <TextInput
        label={"Password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry 
        placeholder="Nhap mat khau"/>
         <HelperText type="error">
            Password co it nhat 6 ki tu
        </HelperText>
        <Button mode="contained" buttonColor="red">
            Login
        </Button>
        <View style ={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"}}>
            <Text>
                Don't have an account
            </Text>
            <Button onPress={()=> navigation.navigate("Register")}
            >
                Sign up
            </Button>
        </View>
    </View>
)
}
export default Login;
