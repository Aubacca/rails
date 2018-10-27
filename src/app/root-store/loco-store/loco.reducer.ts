import { LocoActions, LocoActionTypes } from './loco.actions';
import { initialState, State } from './loco.state';

export function locoReducer(state = initialState, action: LocoActions): State {
  switch (action.type) {
    case LocoActionTypes.GET_LOCOS:
      return { ...state, error: null, isLoading: true };
    case LocoActionTypes.GET_LOCOS_SUCCESS:
      return {
        ...state,
        locoList: action.payload.vehicleList,
        error: null,
        isLoading: false
      };
    case LocoActionTypes.GET_LOCOS_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false };

    case LocoActionTypes.GET_LOCO_ONE:
      return { ...state, error: null, isLoading: true };

    case LocoActionTypes.GET_LOCO_ONE_SUCCESS:
      return {
        ...state,
        locoDetail: action.payload.vehicle,
        error: null,
        isLoading: false
      };
    case LocoActionTypes.GET_LOCO_ONE_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false };

    default: {
      return state;
    }
  }
}
