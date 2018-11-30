import { PwActions, PwActionTypes } from './pw.actions';
import { initialState, State } from './pw.state';
import { preserveWhitespacesDefault } from '@angular/compiler';

export function pwReducer(state = initialState, action: PwActions): State {
  switch (action.type) {
    case PwActionTypes.LOAD_PW:
      return {
        ...state,
        error: null
      };
    case PwActionTypes.LOAD_PW_SUCCESS:
      const newTotal = action.payload.pwList$.reduce(
        (accumulator, currentValue) => accumulator + currentValue.anzahl,
        0
      );
      return {
        ...state,
        pwList: action.payload.pwList$,
        error: null,
        totalCount: newTotal
      };
    case PwActionTypes.LOAD_PW_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        totalCount: 0
      };
    default: {
      return state;
    }
  }
}
