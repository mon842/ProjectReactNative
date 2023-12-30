import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const Details = ({ route }) => {
    const [user, setUser] = useState(route.params.userDetail);
    const navigation = useNavigation()
    const { userId, setUserId } = useContext(UserType);

    const deleteUser = async () => {
        await axios
            .get(`http://localhost:3000/delete/${user._id}`)
            .then((response) => {
                console.log(response);
                navigation.navigate("Main");
            })
            .catch((error) => {
                Alert.alert("Login error");
                console.log("error ", error);
            });
    }

    return (
        <View style={{ marginTop: 55, padding: 15 }}>
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user?.name}</Text>
                    <View
                        style={{
                            paddingHorizontal: 7,
                            paddingVertical: 5,
                            borderRadius: 8,
                            backgroundColor: "#D0D0D0",
                        }}
                    >
                        <Text>User.net</Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                        marginTop: 15,
                    }}
                >
                    <View>
                        <Image
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                resizeMode: "contain",
                            }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
                            }}
                        />
                    </View>

                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "400" }}>
                            {user.email}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: "400" }}>
                            {user.phone}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: "400" }}>
                            {user.city}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: "400" }}>
                            {user.state}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                    <Pressable
                        onPress={() => { navigation.navigate("Edit", { userDetail: user }) }}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                    >
                        <Text>Edit Profile</Text>
                    </Pressable>

                    <Pressable
                        onPress={deleteUser}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                    >
                        <Text>Delete User</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Button mode="contained" onPress={() => navigation.navigate("Main")}>
                    Back to home
                </Button>
            </View>

        </View>
    );
};

export default Details;

const styles = StyleSheet.create({});