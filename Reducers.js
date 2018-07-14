import { UPDATE_KEY } from "../actions/Actions";

export default function rootReducer(state, action) {
    let newState = Object.assign({},state);
    switch (action.type) {
        case UPDATE_KEY:
            let target, value;
            let obj = {};
            let changedState =[];
            let keys = Object.keys(action.payload);
            for(let key in keys){
                if(keys[key] !== 'type'){
                    target = keys[key];
                    value = action.payload[target];
                    obj[target] = value;
                    changedState.push(obj)
                    changedState = changedState[0]
                }
            }
            newState = updateObject(state, changedState);
            break;
        default:
            return state;
    }
    return newState
}

function updateObject(oldObj, newValues) {
    return Object.assign({}, oldObj, newValues);
}