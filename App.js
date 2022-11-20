import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView styles={styles.scrollview}>
       <Text style={styles.tituloP}> Safety life Security</Text>
       <View style={styles.bloco}>
          
          <Image source={require('./assets/login.png')} style={styles.logo}/>
          <Text style={styles.port}>Seja Bem Vindo </Text>
          <Text style={styles.port}></Text>
          <Text style={styles.desc}>Efetue o Login </Text>
          <Text style={styles.end}>Se não possuir Login Cadastre-se</Text>
          <Button title="Login"/>
          <Text style={styles.port}></Text>
          <Button title="cadastre-se"/>
        </View>
       
       <View style={styles.bloco}>
          <Text style={styles.tit}>Sobre nosso Seguro</Text>
          <Image source={require('./assets/icone.png')} style={styles.Png}/>
          <Text style={styles.desc}>Oferecemos Seguro de vida Para toda Familia ou Individual </Text>
          <Text style={styles.tel}></Text>
          <Text style={styles.tel}>Consulte Nossos Planos</Text>
          <Button title="Saiba mais"/>
       </View>

       <View style={styles.bloco}>
          <Text style={styles.tit}>Acidentes de Trabalho</Text>
          <Image source={require('./assets/acidente.png')} style={styles.logo}/>
          <Text style={styles.desc}>Cobertura Completa de seguro envolvendo acidentes no trabalho </Text>
          <Text style={styles.end}></Text>
          <Text style={styles.end}>"Valores podem Variar Conforme o Nivel de  periculosidade"</Text>
          <Text style={styles.tel}></Text>
          <Text style={styles.tel}>Consulte nosso Planos</Text>
          <Button title="Saiba mais"/>
       </View>

       <View style={styles.bloco}>
          <Text style={styles.tit}>Suporte</Text>
          <Image source={require('./assets/suporte.png')} style={styles.logo}/>
          <Text style={styles.port}>Problemas ou Duvidas Contacte o suporte </Text>
          <Text style={styles.tel}></Text>
          <Button title="Help"/>
       </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#192a56',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  tituloP:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf: 'center',
  },

  scrollview: {
    marginTop: 1500,
  },

  tit:{
    color: '#192a56',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'center',
  },

  tel:{
    color: 'black',
    fontWeight: '500',
    fontStyle: 'ArialBlack',
  },

  desc:{
    color: 'black',
    fontStyle: 'ArialBlack',
    fontWeight: '500',
  },

  bloco:{
    backgroundColor: '#fff',
    width: 363,
    padding: 30,
    borderRadius: 5,
    margin: 10,
  },

  logo:{
    width: 65,
    height: 65,
    alignSelf: 'center',
  },

  Png:{
    width: 65,
    height: 65,
    alignSelf: 'center',
  },

  end:{
    color: 'black',
    fontWeight: '500',
    fontStyle: 'ArialBlack',
  },

  port:{
    color: 'black',
    fontWeight: '500',
    fontStyle: 'ArialBlack',
    alignSelf: 'center',
  }

});