import { PwActions, PwActionTypes } from './pw.actions';
import { initialState, State } from './pw.state';

export function pwReducer(state = initialState, action: PwActions): State {
  switch (action.type) {
    case PwActionTypes.LOAD_PW:
      return {
        ...state,
        error: null
      };
    case PwActionTypes.LOAD_PW_SUCCESS:
      return { ...state, pwList: action.payload.pwList$, error: null };
    case PwActionTypes.LOAD_PW_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default: {
      return state;
    }
  }
}
