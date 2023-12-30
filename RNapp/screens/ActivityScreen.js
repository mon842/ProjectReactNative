import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { UserType } from "../UserContext";
import User from "../components/User";
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

const ActivityScreen = () => {
    const [selectedButton, setSelctedButton] = useState("people");
    const [content, setContent] = useState("People Content");
    const [users, setUsers] = useState([]);
    const { userId, setUserId } = useContext(UserType);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUsers = async () => {
            const token = await AsyncStorage.getItem("authToken");
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.userId;
            setUserId(userId);

            axios
                .get(`http://localhost:3000/user/${userId}`)
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((error) => {
                    console.log("error", error);
                });
        };

        fetchUsers();
    }, []);
    // console.log(userId);
    return (
        <ScrollView style={{ marginTop: 50 }}>
            <View style={{ padding: 10 }}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Users</Text>

                    <Button onPress={() => navigation.navigate("AddUser") }>
                        add users
                    </Button>
                </View>
                
                <View style={{ marginTop: 20 }}>
                    {users?.map((item, index) => (
                        <User key={index} item={item} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default ActivityScreen;

const styles = StyleSheet.create({});