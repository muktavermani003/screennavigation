import React, {Component} from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class Screen2 extends Component {
 
  
  render() {
    //console.log("data:- ",JSON.stringify(this.props))
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
        <Text style={{fontSize: 30,fontWeight:'bold'}}>Welcome  {this.props.route.params.P1}</Text>
        <Text style={{fontSize: 20, marginTop:20}}>username :- {this.props.route.params.P1}</Text>
        <Text style={{fontSize: 20,marginTop:20}}>password :- {this.props.route.params.P2}</Text> 
        <View>
        <TouchableOpacity
            style={styles.loginbutton} onPress={()=>this.props.navigation.navigate("Screen3")}>
            
            <Text style={styles.logintext}>Get Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({

  loginbutton: {
    width: 328,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#bbb',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 35,
  },logintext: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
})
