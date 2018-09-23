import { SpinnerAction, SpinnerActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(
  state = initialState,
  action: SpinnerAction
): State {
  console.log('featureReducer.action:', action);
  console.log('featureReducer.state:', state);
  switch (action.type) {
    case SpinnerActionTypes.SHOW_SPINNER:
      const isActionAlreadInProgress = state.actionsInProgress.filter(
        (currentAction: any) => currentAction === action.type
      ).length;
      //
      if (isActionAlreadInProgress) {
        return state;
      }
      const newActionsInProgress = [...state.actionsInProgress, action.type];
      return Object.assign(state, {
        active: newActionsInProgress.length,
        actionsInProgress: newActionsInProgress
      });
    case SpinnerActionTypes.HIDE_SPINNER:
      const decreaseActionsInProgress = state.actionsInProgress.fill(
        (currentAction: any) => currentAction !== action.type
      );
      return Object.assign(state, {
        active: state.active--,
        actionsInProgress: decreaseActionsInProgress
      });
    default: {
      return state;
    }
  }
}

export const isLoadingSpinnerActive = (state: State) => state.active;
