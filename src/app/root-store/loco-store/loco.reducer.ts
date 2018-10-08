import { LocoActions, LocoActionTypes } from './loco.actions';
import { initialState, State } from './loco.state';

export function featureReducer(
  state = initialState,
  action: LocoActions
): State {
  switch (action.type) {
    case LocoActionTypes.GET_LOCOS:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case LocoActionTypes.GET_LOCOS_SUCCESS:
      return {
        ...state,
        locoList: action.payload.vehicleList,
        error: null,
        isLoading: false
      };
    case LocoActionTypes.GET_LOCOS_FAILURE:
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
