import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Screen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataS: [],
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataS: responseJson,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.con1}>
        <View style={styles.item}>
          <Text style={{fontSize: 20}}>{item.login}</Text>
        </View>
      </View>
    );
  };
  render() {
    let {container} = styles;
    let {dataS, isLoading} = this.state;
    return (
      <View style={container}>
        <FlatList
          data={dataS}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'yellow',
    alignItems: 'center',
    paddingTop: 50,
  },
  item: {
    padding: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  con1: {
    padding: 10,
    backgroundColor: 'grey',
    flexDirection: 'column',
    margin: 5,
    width: 300,
  },
});
