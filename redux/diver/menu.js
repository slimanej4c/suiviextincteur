export const MENU_OPEN_REQUEST = 'MENU_OPEN_REQUEST'; // Déclaration de l'action MENU_OPEN_REQUEST

export const menuOpen_redux = (username, password) => async dispatch => {
  dispatch(menuOpenRequest(username, password)); // Appel de l'action menuOpenRequest avec les informations utilisateur
};

export const menuOpenRequest = (username, password) => {
  return {
    type: MENU_OPEN_REQUEST, // Utilisation du nom d'action correct
    payload: { username, password } // Passage des informations utilisateur comme payload
  };
};

const initialState = {
  menuOpen: false,
  username: '', // Ajout d'une propriété username dans l'état initial
  password: '' // Ajout d'une propriété password dans l'état initial
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_OPEN_REQUEST:
      return {
        ...state,
        menuOpen: !state.menuOpen,
       
      };
    default:
      return state;
  }
};

export default menuReducer; // Export du réducteur menuReducer
