import { Component, OnInit } from '@angular/core';
import { StampDutyService } from '../stamp-duty.service';

@Component({
	selector: 'app-stamp-duty',
	templateUrl: './stamp-duty.component.html',
	styleUrls: [ './stamp-duty.component.scss' ]
})
export class StampDutyComponent implements OnInit {
	results: Object[] = [];

	constructor(private sdService: StampDutyService) {
		this.results = this.sdService.getHistory();
	}

	ngOnInit() {}
}
