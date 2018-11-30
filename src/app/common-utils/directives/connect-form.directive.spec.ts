import { ConnectFormDirective } from './connect-form.directive';
import { FormGroupDirective } from '@angular/forms';

describe('ConnectFormDirective', () => {
  it('should create an instance', () => {
    const directive = new ConnectFormDirective(
      new FormGroupDirective(null, null)
    );
    expect(directive).toBeTruthy();
  });
});
