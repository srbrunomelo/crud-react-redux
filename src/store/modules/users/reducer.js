 const initialState = {
    users: [], 
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
        
        case 'HANDLE_STATUS' : 
            const id = action.payload.key; 
            const newListHandleStatus = [...state.users];
            const index = newListHandleStatus.findIndex(item => item.key === id);
 
            if (index > -1) {
                const item = state.users[index];  
  
                if (item.status === 'inativo') {
                    var row = {...item, status: 'ativo'}
                } else {
                    var row = {...item, status: 'inativo'}
                }  

                // manipular array
               
              
            } else {
                
            }
      
              
  
        default :
            return state;    
    } 
}
