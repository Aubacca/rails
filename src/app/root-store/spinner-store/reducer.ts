import * as loadingSpinner from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: any): State {
  switch (action.type) {
    case loadingSpinner.SpinnerActionTypes.SHOW_SPINNER: {
      const isActionAlreadyInProgress = state.actionsInProgress.filter(
        (currentAction: any) => currentAction === action.payload.type
      ).length;
      console.log('spinner.featureReducer>state:', state);
      console.log('spinner.featureReducer>action:', action);
      console.log(
        'spinner.featureReducer>isActionAlreadyInProgress:',
        isActionAlreadyInProgress
      );
      //
      // If the action in already in progress and is registered we don't modify the state.
      if (isActionAlreadyInProgress) {
        return state;
      }

      // Adding the action type in our actionsInProgress array
      const newActionsInProgress = [
        ...state.actionsInProgress,
        action.payload.type
      ];

      return Object.assign(state, {
        active: newActionsInProgress.length,
        actionsInProgress: newActionsInProgress
      });
    }

    case loadingSpinner.SpinnerActionTypes.HIDE_SPINNER: {
      console.log('featureReducer.state:', state);
      console.log('featureReducer.action:', action);
      // We remove trigger action from actionsInProgress array
      const newActionsInProgress = action.payload.triggerAction
        ? state.actionsInProgress.filter(
            (currentAction: any) =>
              currentAction !== action.payload.triggerAction
          )
        : state.actionsInProgress;

      return Object.assign(state, {
        actionsInProgress: newActionsInProgress,
        active: state.active > 0 ? newActionsInProgress.length : 0
      });
    }
    default: {
      return state;
    }
  }
}

export const isLoadingSpinnerActive = (state: State) => {
  console.log('Spinner reducer>state=', state);
  return state.active;
};
