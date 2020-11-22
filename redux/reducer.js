import Action from './action'

const initialState = {
    count: 0,
    buttonName: 'เพิ่มจำนวน'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Action.ADD:
        console.log('ADD payload: ' + payload);
        return { 
            ...state, 
            count: state.count + payload
        }

    default:
        return state
    }
}
