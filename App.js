import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, useColorScheme } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.imagemLogo} source={require('./assets/imagemLogo.png')}/>
        <Text style={styles.textoJoin}>Join Us!</Text>

        <View style={styles.dadosPessoais}>
          <View>
            <Text>Your name:</Text>
            <View style={styles.inputView}>
              <TextInput style={styles.inputText} placeholder='Enter your full name'/>
              <Image style={styles.userInput} source={require('./assets/user.png')}/>

            </View>
            <Text>Your email:</Text>
            <View style={styles.inputView}>
              <TextInput style={styles.inputText} placeholder='Enter your email'/>
              <Image style={styles.emailInput} source={require('./assets/email.png')}/>

            </View>

            <Text>Password:</Text>
            <View style={styles.inputView}>
              <TextInput secureTextEntry={true} style={styles.inputText} placeholder='Enter your password'/>
              <Image style={styles.passwordInput} source={require('./assets/password.png')}/>

            </View>
          </View>
          
        </View>

        <View style={styles.createAccount}>
          <View style={styles.typeCreate}>
            <Image style={styles.google} source={require('./assets/google.png')} />
            <Image style={styles.google} source={require('./assets/facebook.png')} />
            <Image style={styles.google} source={require('./assets/github.png')} />

          </View>
          <View style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create an account</Text>
        </View>

        </View>
        







      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  imagemLogo: {
    width: 190,
    height: 190,
    borderRadius: 150,
    marginTop: 90,
    marginBottom: 40,

  },
  textoJoin: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  dadosPessoais: {
    marginTop: 40,
    width: 340,
    height: 300,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#c7fbff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
  },
  userInput: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  inputText: {
    width: 280,
  },
  emailInput: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  passwordInput: {
    width: 25,
    height: 25,
    marginRight: 18,
  },
  createAccount: {
    borderTopColor: '#c7fbff',
    borderLeftColor: '#c7fbff',
    borderRightColor: '#c7fbff',
    borderWidth: 2,
    borderRadius: 10,
    borderRadius: 15,
    width: 420,
    height: 170,
    alignItems: 'center',

  },
  typeCreate: {
    width: 350,
    height: 60,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
    flexDirection: 'row',
  },
  google: {
    width: 45,
    height: 45,
    

  },
  createAccountButton: {
    marginTop: 15,
    backgroundColor: '#3b83c7',
    width: 350,
    height: 40,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  createAccountText: {
    color: 'white'
  }
  

});
