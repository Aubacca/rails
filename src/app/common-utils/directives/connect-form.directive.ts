import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[cuConnectForm]'
})
export class ConnectFormDirective {
  @Input('cuConnectForm')
  set data(val: any) {
    console.log('ConnectFormDirective.setData>begin: val=', val);
    if (val) {
      this.formGroupDirective.form.patchValue(val);
      this.formGroupDirective.form.markAsPristine();
    }
    console.log('ConnectFormDirective.setData>end');
  }

  constructor(private formGroupDirective: FormGroupDirective) {
    console.log('ConnectFormDirective>begin');
    console.log('ConnectFormDirective>formGroupDirective=', formGroupDirective);
    console.log('ConnectFormDirective>end');
  }
}
