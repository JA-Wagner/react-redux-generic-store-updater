export const UPDATE_KEY = "UPDATE_KEY";
export const TYPE = "TYPE";

//region reusable actions
//target //update key for your state changes with:
        // key = the name of the state key you want to update as a string
        // value = the value to be paired with the key
export function updateKey(key, value) {
    let payload = {
        type: TYPE,
        incomingKey: value
    }

    return(dispatch)=> {
        payload = dispatch(renameProp('incomingKey', key, payload));
        dispatch(sendToReducer(payload, key))
    }

}

export function sendToReducer(payload) {
    return {
        type: UPDATE_KEY,
        payload: payload
    }
}

renameProp = (
    oldProp,
    newProp,
    { [oldProp]: old, ...others }
) => {
    return {
        [newProp]: old,
        ...others
    };
};