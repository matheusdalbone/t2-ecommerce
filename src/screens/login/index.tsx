import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PopUp from "../../components/popUp";
import styles from "./style";
import * as Animatable from 'react-native-animatable'
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { getAdmin, postAdmin } from "../../services/admin";

export default function Login(){
    const[modalVisibility, setModalVisibility] = useState(false);
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    // const admin = {
    //     email: "dalbone@admin.com",
    //     senha: "1234"
    // }

     const loginValidation = async () => {

        try{
            const adminValido = await getAdmin();
            console.log(adminValido[0]);
            if(email === adminValido[0].email && senha === adminValido[0].senha) {
                console.warn("Sucesso!");
            } else {
                setModalVisibility(!modalVisibility);
            }
        } catch(err){
            console.log(err);
        }

        setSenha('');
    };

    //  const postNewAdmin = async () => {
    //      try{
    //         const adminValido = await postAdmin(admin);
    //         console.log(adminValido);

    //      } catch (err){
    //         console.log(err)
    //      }
    //  }

    return(
    <View style={styles.container}>
        <PopUp
            onPress={() =>
            setModalVisibility(!modalVisibility)}
            modalVisibility={modalVisibility}
            popUpText={'Suas credencias estão incorretas.'}
            errorIcon={<MaterialIcons name="error-outline" size={110} color="#E45858"/>}
        />
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.text}>
            Bem-Vindo
            </Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput

                placeholder="Digite um e-mail"
                placeholderTextColor={"#D1D1E9"}
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />
            <Text style={styles.title}>Senha</Text>
            <TextInput
                placeholder="Sua senha"
                placeholderTextColor={"#D1D1E9"}
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
            />
            <TouchableOpacity style={styles.button} onPress={loginValidation}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>

        </Animatable.View>
    </View>
    );
}