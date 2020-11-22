import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class CounterNumber extends Component {
    static propTypes = {
        count: PropTypes.number
    }

    static defaultProps = {
        count: 0
    }

    render() {
        return (
            <View>
                <Text>{this.props.count}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterNumber)
