// actions.js
// import { firebase } from '@firebase/app';
// import '@firebase/auth';
// import '@firebase/firestore';

export const ADD_UNIT_REQUEST = 'ADD_UNIT_REQUEST';
export const ADD_UNIT_SUCCESS = 'ADD_UNIT_SUCCESS';
export const ADD_UNIT_FAILURE = 'ADD_UNIT_FAILURE';

export const CHECK_MEMBER_REQUEST = 'CHECK_MEMBER_REQUEST';
export const CHECK_MEMBER_SUCCESS = 'CHECK_MEMBER_SUCCESS';
export const CHECK_MEMBER_FAILURE = 'CHECK_MEMBER_FAILURE';

export const addUnit = (unitData) => async (dispatch) => {
  dispatch(addUnitRequest());
  try {
    // dispatch(addUnitRequest());
    // Code pour ajouter une nouvelle unité à Firebase
    // await firebase.firestore().collection('units').add(unitData);
    dispatch(addUnitSuccess());
  } catch (error) {
    dispatch(addUnitFailure(error));
  }
};

export const addUnitRequest = () => {
  return {
    type: ADD_UNIT_REQUEST,
  };
};

export const addUnitSuccess = () => {
  return {
    type: ADD_UNIT_SUCCESS,
  };
};

export const addUnitFailure = (error) => {
  return {
    type: ADD_UNIT_FAILURE,
    error,
  };
};

export const checkMemberExistence = (email) => async (dispatch) => {
  dispatch(checkMemberRequest());
  try {
    // dispatch(checkMemberRequest());
    // Code pour vérifier si le membre existe dans Firebase
    // const memberSnapshot = await firebase.firestore().collection('members').where('email', '==', email).get();
    // if (!memberSnapshot.empty) {
    //   dispatch(checkMemberSuccess(true));
    // } else {
    //   dispatch(checkMemberSuccess(false));
    // }
    dispatch(checkMemberSuccess(true)); // Exemple temporaire
  } catch (error) {
    dispatch(checkMemberFailure(error));
  }
};

export const checkMemberRequest = () => {
  return {
    type: CHECK_MEMBER_REQUEST,
  };
};

export const checkMemberSuccess = (memberExists) => {
  return {
    type: CHECK_MEMBER_SUCCESS,
    memberExists,
  };
};

export const checkMemberFailure = (error) => {
  return {
    type: CHECK_MEMBER_FAILURE,
    error,
  };
};
// reducers.js

  const initialState = {
    addUnitLoading: false,
    addUnitError: null,
    checkMemberLoading: false,
    checkMemberExists: false,
    checkMemberError: null,
  };
  
  const AddProjectreducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_UNIT_REQUEST:
        return {
          ...state,
          addUnitLoading: true,
          addUnitError: null,
        };
      case ADD_UNIT_SUCCESS:
        return {
          ...state,
          addUnitLoading: false,
        };
      case ADD_UNIT_FAILURE:
        return {
          ...state,
          addUnitLoading: false,
          addUnitError: action.error,
        };
      case CHECK_MEMBER_REQUEST:
        return {
          ...state,
          checkMemberLoading: true,
          checkMemberExists: false,
          checkMemberError: null,
        };
      case CHECK_MEMBER_SUCCESS:
        return {
          ...state,
          checkMemberLoading: false,
          checkMemberExists: action.memberExists,
        };
      case CHECK_MEMBER_FAILURE:
        return {
          ...state,
          checkMemberLoading: false,
          checkMemberError: action.error,
        };
      default:
        return state;
    }
  };
  
  export default AddProjectreducer;
  