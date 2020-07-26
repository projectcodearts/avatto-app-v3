import { NgModule } from '@angular/core';
import { CouponComponent } from '../../components/coupon/coupon.component';


@NgModule({
  declarations: [CouponComponent],
  exports: [CouponComponent]
})
export class SharedModuleModule { }
