import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiModule } from '../api';
import { DestinationActivityComponent, DestinationGalleryComponent, DestinationThumbnailComponent } from './components';
import { DestinationActivityService } from './components/activity/destination-activity.service';
import { DestinationComponent } from './destination.component';
import { DestinationResolver } from './destination.resolver';
import { DestinationRoutingModule } from './destination.router';
import { DestinationService } from './destination.service';

@NgModule({
	imports: [
		DestinationRoutingModule,
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
		DestinationActivityService,
	],
	declarations: [
		DestinationComponent,
		DestinationThumbnailComponent,
		DestinationGalleryComponent,
		DestinationActivityComponent,
	],
	exports: [
		DestinationThumbnailComponent,
	]
})
export class DestinationModule {
}
