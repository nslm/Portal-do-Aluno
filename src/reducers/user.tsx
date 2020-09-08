export const initialState = {
    login: false
};

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setLogin':
            return {...state, login: action.payload.name};
        break;
        default:
            return state;
    };
}