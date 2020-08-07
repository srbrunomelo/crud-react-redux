const users = [
    { key: 1, name: 'Bruno Melo', age: 10, email: 'teste@teste.com', status: 'ativo'},
    { key: 2, name: 'Patrick', age: 10, email: 'patrick@teste.com', status: 'ativo'},
];
   
const initialState = {
    users: users, 
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_USER' : 
            const user = action.payload.values; 
            const newList = [...state.users, user ];
            return { ...state, users: newList };  
        case 'DELETE_USER' :    
            const key = action.payload.key;  
            const filter = state.users.filter(item => item.key !== key)
            return { ...state, users: filter }; 
        default :
            return state;   
    } 
}
