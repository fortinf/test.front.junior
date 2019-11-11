import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { louvre, tourEiffel } from './destination-activity.mock.spec';
import { DestinationActivityService } from './destination-activity.service';

/**
 * Tests du service DestinationActivityService
 */
describe('DestinationActivityService', () => {

	let service: DestinationActivityService;
	let httpCtrl: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				DestinationActivityService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
	});


	beforeEach(inject([DestinationActivityService], (_service: DestinationActivityService) => {
		service = _service;
	}));

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('searchActivities', () => {


		it('should call http.get', () => {
			service.searchActivities().subscribe(d => d);

			const req = httpCtrl.expectOne(r => r.url === '/api/activities');
			expect(req.request.method).toEqual('GET');
			req.flush([]);
		});


		it('should call with just orderby if destinationId = ""', () => {
			service.searchActivities().subscribe(d => d);

			const req = httpCtrl.expectOne(r => r.url === '/api/activities');
			const params = req.request.params;
			expect(params.toString()).toEqual('orderBy=name');
			req.flush([]);
		});


		it('should call with filter on destination if destinationId !=""', () => {
			const destinationId = '2';
			service.searchActivities(destinationId).subscribe(d => d);

			const req = httpCtrl.expectOne(r => r.url === '/api/activities');
			const params = req.request.params;
			expect(params.toString()).toEqual(`orderBy=name&destinationId=${destinationId}`);
			req.flush([]);
		});
		
		it('should return the http result unscathed', () => {
			const destinationId = '2';
			const results = [louvre, tourEiffel];
			service.searchActivities(destinationId).subscribe(d => {
				expect(d).toBe(results);
			});
			const req = httpCtrl.expectOne(r => r.url === '/api/activities');
			req.flush(results);
		});

	});
});
