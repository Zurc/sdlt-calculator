import { Component } from '@angular/core';
import { StampDuty } from '../stamp-duty';
import { StampDutyService } from '../stamp-duty.service';

@Component({
	selector: 'app-stamp-duty-form',
	templateUrl: './stamp-duty-form.component.html',
	styleUrls: [ './stamp-duty-form.component.scss' ]
})
export class StampDutyFormComponent {
	purchaseTypes = [ 'First time buyer', 'Home mover', 'Additional property' ];

	constructor(private sdService: StampDutyService) {}

	onSubmit(f) {
		this.sdService.calculate(f.value.purchaseType, f.value.houseValue);
	}
}
