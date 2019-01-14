import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StampDutyFormComponent } from './stamp-duty-form/stamp-duty-form.component';
import { StampDutyListComponent } from './stamp-duty-list/stamp-duty-list.component';
import { StampDutyComponent } from './stamp-duty/stamp-duty.component';

import { StampDutyService } from './stamp-duty.service';

@NgModule({
	declarations: [ AppComponent, StampDutyFormComponent, StampDutyListComponent, StampDutyComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [ StampDutyService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
