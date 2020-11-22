import React, { Component } from 'react'
import { View, Text,Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import action from '../redux/action'

export default class IncreaseButton extends Component {
    
    increase = () => {
        
    }


    render() {
        return (
            <View>
                <Button title="เพิ่ม" onPress={this.increase}></Button>
            </View>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: (amount) => dispatch({ type: action.ADD, payload: amount })
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(IncreaseButton)
