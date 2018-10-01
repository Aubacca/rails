import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.GET_LOCOS:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.GET_LOCOS_SUCCESS:
      return {
        ...state,
        locoList: action.payload.vehicleList,
        error: null,
        isLoading: false
      };
    case ActionTypes.GET_LOCOS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    default: {
      return state;
    }
  }
}
