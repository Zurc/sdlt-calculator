import { Component, OnInit } from '@angular/core';
import { StampDutyService } from '../stamp-duty.service';

@Component({
	selector: 'app-stamp-duty-list',
	templateUrl: './stamp-duty-list.component.html',
	styleUrls: [ './stamp-duty-list.component.scss' ]
})
export class StampDutyListComponent implements OnInit {
	stampDutyList: Object[];

	constructor(private sdService: StampDutyService) {
		this.stampDutyList = this.sdService.getHistory();
	}

	ngOnInit() {}
}
