import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class App extends React.Component {
    state = {
        textValue: 0
      }
    
      onPress = () => {
        this.setState({
          textValue: this.state.textValue+ 1
        })
      }


    render() {
        return ( < View style = { styles.container } >
             <Text>{this.state.textValue}</Text>

             <Button title="Kliknij" onPress={this.onPress} />

            </View>

        );
    } 
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});