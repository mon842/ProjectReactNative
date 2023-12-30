import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    TextInput,
    KeyboardAvoidingView,
    Image,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RadioButton, Checkbox } from 'react-native-paper';
import axios from "axios";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Ahmedabad', value: 'Ahmedabad' },
];


const AddUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");

    const [source, setSource] = useState("Linkedin");
    const [sourceL, setSourceL] = useState("unchecked");
    const [sourceF, setSourceF] = useState("unchecked");
    const [sourceJP, setSourceJP] = useState("unchecked");
    const [sourceO, setSourceO] = useState("unchecked");

    const [city, setCity] = useState("");
    const [state, setState] = useState("");


    const navigation = useNavigation();

    const handleRegister = () => {
        const user = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            gender: gender,
            source: source,
            city: city,
            state: state
        };
        axios
            .post("http://localhost:3000/register", user)
            .then((response) => {
                console.log(response);
                Alert.alert(
                    "Registration successful",
                    "you have been registered successfully"
                );
                setName("");
                setEmail("");
                setPassword("");
                setPhone("");
                setGender("");
                setSource("");
                setCity("");
                setState("");
            })
            .catch((error) => {
                Alert.alert(
                    "Registration failed",
                    "An error occurred during registration"
                );
                console.log("error", error);
            });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25 }}>
                        Create Your Account
                    </Text>
                </View>

                <View style={{ marginTop: 40 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            paddingVertical: 5,
                            borderRadius: 5,
                        }}
                    >
                        <Ionicons
                            style={{ marginLeft: 8 }}
                            name="person"
                            size={24}
                            color="gray"
                        />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholderTextColor={"gray"}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: name ? 16 : 16,
                            }}
                            placeholder="enter your name" />

                    </View>
                </View>

                <View style={{ marginTop: 40 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            paddingVertical: 5,
                            borderRadius: 5,
                        }}
                    >
                        <MaterialIcons
                            style={{ marginLeft: 8 }}
                            name="email"
                            size={24}
                            color="gray"
                        />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholderTextColor={"gray"}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: email ? 16 : 16,
                            }}
                            placeholder="enter your email" />

                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            paddingVertical: 5,
                            borderRadius: 5,
                        }}
                    >
                        <AntDesign
                            style={{ marginLeft: 8 }}
                            name="lock"
                            size={24}
                            color="gray"
                        />
                        <TextInput
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor={"gray"}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: password ? 16 : 16,
                            }}
                            placeholder="enter password" />

                    </View>
                </View>

                <View style={{ marginTop: 40 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            paddingVertical: 5,
                            borderRadius: 5,
                        }}
                    >
                        <MaterialIcons
                            style={{ marginLeft: 8 }}
                            name="email"
                            size={24}
                            color="gray"
                        />
                        <TextInput
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            placeholderTextColor={"gray"}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: phone ? 16 : 16,
                            }}
                            placeholder="enter your phone" />

                    </View>
                </View>

                <View style={{ marginTop: 40 }}>
                    <Text>Select Gender</Text>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1
                    }}
                    >
                        <RadioButton
                            testID="male"
                            value="male"
                            status={gender === 'male' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('male')}
                        />
                        <Text>male</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1
                    }}
                    >
                        <RadioButton
                            value="female"
                            status={gender === 'female' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('female')}
                        />
                        <Text>female</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1
                    }}
                    >
                        <RadioButton
                            value="other"
                            status={gender === 'other' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('other')}
                        />
                        <Text>other</Text>
                    </View>

                </View>

                <View style={{ marginTop: 40 }}>
                    <Text>How did you hear about this? </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 1
                        }}>
                        <Checkbox
                            status={sourceL}
                            onPress={() => {

                                { sourceL === 'checked' ? setSourceL("unchecked") : setSourceL("checked") }
                                { sourceL === 'checked' && setSource("Linkedin") }

                            }}
                        />
                        <Text>LinkedIn</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 1
                        }}>
                        <Checkbox

                            status={sourceF}
                            onPress={() => {

                                { sourceF === 'checked' ? setSourceF("unchecked") : setSourceF("checked") }
                                { sourceF === 'checked' && setSource("Friends") }
                            }}
                        />
                        <Text>Friends</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 1
                        }}>
                        <Checkbox
                            status={sourceJP}
                            onPress={() => {

                                { sourceJP === 'checked' ? setSourceJP("unchecked") : setSourceJP("checked") }
                                { sourceJP === 'checked' && setSource("Job Portal") }
                            }}
                        />
                        <Text>Job Portal</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 1
                        }}>
                        <Checkbox
                            status={sourceO}
                            onPress={() => {

                                { sourceO === 'checked' ? setSourceO("unchecked") : setSourceO("checked") }
                                { sourceO === 'checked' && setSource("Others") }
                            }}
                        />
                        <Text>Others</Text>
                    </View>
                </View>

                <View style={{ marginTop: 35 }}>
                    <Text>City</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        searchPlaceholder="Search..."
                        value={city}
                        onChange={item => {
                            setCity(item.value);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                    />
                </View>

                <View style={{ marginTop: 40 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            paddingVertical: 5,
                            borderRadius: 5,
                        }}
                    >
                        <Ionicons
                            style={{ marginLeft: 8 }}
                            name="person"
                            size={24}
                            color="gray"
                        />
                        <TextInput
                            value={state}
                            onChangeText={(text) => setState(text)}
                            placeholderTextColor={"gray"}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: name ? 16 : 16,
                            }}
                            placeholder="enter your state" />

                    </View>
                </View>

                <View style={{ marginTop: 45 }} />

                <Pressable
                    onPress={handleRegister}
                    style={{
                        width: 200,
                        backgroundColor: "black",
                        padding: 15,
                        marginTop: 40,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: 6,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "white",
                        }}
                    >
                        Register
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('Activity')}
                    style={{ marginTop: 10 }}
                >
                    <Text style={{ textAlign: "center", fontSize: 16 }}>
                        Already have an account? Login
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}
export default AddUser;

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});