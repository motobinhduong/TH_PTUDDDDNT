import { useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar,Text } from "react-native-paper";
import {  fetchUserContacts } from "../utility/Api";

const User =()=>{
    const [User, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetchUserContacts()
        .then(data =>{
            console.log(data)
            setUser(data)
            setLoading(false)
        })
        .catch(e => console.log(e))
    },[])
    const{name, avatar, phone} =User
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"aqua"
        }}>
            <Avatar.Image source={{uri: avatar}} size={150}/>
            <Text
                style={{
                    fontSize:30,
                    color: "white",
                    fontWeight:"bold"
                }}>

                </Text>
            <Text
            style={{
                fontSize:24,
                color:"white"
            }}>{phone}</Text>
        </View>
    )
}
export default User;