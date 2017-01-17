'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Item from './Item';
const Dimensions = require('Dimensions');

var styles = StyleSheet.create({
    wrapper: {
        marginTop: 50
    }
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.onItemPress = this.onItemPress.bind(this);

        this.scrollView = null;

        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
            itemPosition: 0
        };
    }

    removeItem() {
        const newItems = this.state.items.splice(1, 5);

        this.setState({
            items: newItems
        });
    }

    onItemPress(fx, width) {
        const window = Dimensions.get('window');
        const centerPosition = fx + width / 2 - window.width / 2;

        this.setState({
            itemPosition: centerPosition
        });

        this.scrollView.scrollTo({x: centerPosition});
    }

    render() {
        const listItems = this.state.items.map((item, index) => <Item key={index} onItemPress={ this.onItemPress } text={item} />);

        return (
            <View>
                <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }} style={styles.wrapper} horizontal={true}>
                    {listItems}
                </ScrollView>
                <View>
                    <Text>{ this.state.itemPosition }</Text>
                </View>
                <TouchableOpacity onPress={this.removeItem}>
                    <Text>Remove Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
