/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: {
        start: 0,
        end: 0,
      },
      value: '',
    };
  }

  onChangeText = value => {
    this.setState({
      value,
    });
  };

  onSelectionChange = event => {
    this.setState({
      selection: event.nativeEvent.selection,
    });
  };

  insert = text => {
    const {selection} = this.state;
    const {start, end} = selection;

    this.setState(oldState => ({
      value: oldState.value.slice(0, start) + text + oldState.value.slice(end),
      selection: {
        start: start + text.length,
        end: start + text.length,
      },
    }));
  };

  render() {
    const {selection, value} = this.state;

    const emojis = ['👨‍👩‍👧‍👦', '🧙‍♂️', '🥶', '😊', '👍🏻', '🦀'];

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.emojis}>
            {emojis.map(emoji => (
              <TouchableOpacity
                style={styles.emoji}
                key={emoji}
                onPress={() => {
                  this.insert(emoji);
                }}>
                <Text style={styles.emojiText}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            style={styles.input}
            value={value}
            selection={selection}
            onChangeText={this.onChangeText}
            onSelectionChange={this.onSelectionChange}
            placeholder="Add some text"
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    padding: 8,
    backgroundColor: '#eee',
  },
  emojis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginVertical: 24,
  },
  emoji: {
    padding: 8,
  },
  emojiText: {
    fontSize: 24,
  },
});

export default App;
