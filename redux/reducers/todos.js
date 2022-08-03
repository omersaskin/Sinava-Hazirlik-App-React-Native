import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes";

const initialState = {
  todo_list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload
      return {
        ...state,
        todo_list: [ ...state.todo_list, { id, task }]
      };
    }
    case EDIT_TODO: {
      const { id, task } = action.payload
      return {
        ...state,
        todo_list: [...state.todo_list.map(item => item.id === id ? {...item, id, task} : item)]
      };
      return
            state.todo_list.map(item => 
           item.id === id ? {...item, id, task} : item 
          )
          
    }
    case DELETE_TODO: {
      const { id } = action.payload
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id != id)
      };
    }
    default:
      return state;
  }
}
