import { GwActionTypes, GwActions } from './gw.actions';
import { initialState, State } from './gw.state';

export function gwReducer(state = initialState, action: GwActions): State {
  switch (action.type) {
    case GwActionTypes.LoadGw:
      return { ...state, error: null };

    case GwActionTypes.LoadGwSuccess:
      return { ...state, gwList: action.payload.gwList$, error: null };

    case GwActionTypes.LoadGwFailure:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
}
