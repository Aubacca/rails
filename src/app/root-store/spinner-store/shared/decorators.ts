export function ShowLoader() {
  console.log('ShowLoader>begin/end');
  return function(Class: Function) {
    Object.defineProperty(Class.prototype, 'showLoader', {
      value: true
    });
  };
}

export function HideLoader(triggerAction: string) {
  console.log('HideLoader>begin/end: triggerAction=', triggerAction);
  return function(Class: Function) {
    Object.defineProperty(Class.prototype, 'triggerAction', {
      value: triggerAction
    });
  };
}
