import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  
  render() {
    //console.log('this.state-' ,JSON.stringify(this.state))
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: '#394e59',
            fontSize: 18,
            fontWeight: 'bold',
            marginRight: 144,
            marginTop: 58,
          }}>
          Login To Your Account
        </Text>

        <TextInput
          placeholder="Enter userID"
          style={styles.txtinp1}
          onChangeText={username => this.setState({username: username})}
        />

        <TextInput
          placeholder={'Enter Password'}
          style={styles.txtinp2}
          onChangeText={password =>
            this.setState({password: password})
          }></TextInput>

        <View>
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => {
              if (
                this.state.username === 'mukta' &&
                this.state.password === '123'
              ) {
                this.props.navigation.navigate('Screen2', {
                  P1: this.state.username,
                  P2: this.state.password,
                });
              } else alert('wrong username password');
            }}>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
    alignItems: 'center',
  },

  txtinp1: {
    borderColor: 'black',
    borderWidth: 1,
    width: 329,
    marginLeft: 16,
    marginRight: 15,
    padding: 10,
    marginTop: 37,
    paddingLeft: 30,
    borderRadius: 25,
  },
  txtinp2: {
    borderColor: 'black',
    borderWidth: 1,
    width: 329,
    marginLeft: 16,
    marginRight: 15,
    padding: 10,
    marginTop: 24,
    paddingLeft: 30,
    borderRadius: 25,
  },

  loginbutton: {
    width: 328,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#bbb',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 35,
  },
  logintext: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});
