'use strict';

import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    box: {
        paddingLeft: 30,
        paddingRight: 30,
        marginRight: 10,
        backgroundColor: '#bada55',
        fontSize: 20
    }
});

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.refs.item.measure( (fx, fy, width, height, px, py) => {
            this.props.onItemPress(fx, width);
        });

    }

    render() {
        return (
            <View ref="item">
                <TouchableWithoutFeedback onPress={this.onClick}>
                    <View>
                        <Text style={styles.box}>{this.props.text} - { this.state.x } - { this.state.y }</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}