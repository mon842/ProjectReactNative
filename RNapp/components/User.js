

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { UserType } from "../UserContext";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const User = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: "white", padding: 10, margin: 1, borderRadius: 15 }}>
            <View style={{ gap: 10 }}>
                <View style={{ justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                resizeMode: "contain",

                            }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
                            }}
                        />


                        <Text style={{ fontSize: 15, fontWeight: "500", flex: 1, margin: 8 }}>
                            {item?.name}
                        </Text>
                    </View>
                    <Button onPress={()=>{navigation.navigate("Details",{userDetail:item} )}}>View Details</Button>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text>
                        {item.email}
                    </Text>
                    <Text>
                        {item.phone}
                    </Text>
                </View>

            </View>
        </View>
    )
}

export default User;

const styles = StyleSheet.create({});