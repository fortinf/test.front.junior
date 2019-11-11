import { Component, Input, OnInit } from '@angular/core';
import { IDestination } from '../../destination.model';
import { IActivity } from './destination-activity.model';
import { DestinationActivityService } from './destination-activity.service';

/**
 * Composant qui se charge de récupérer et d'afficher les activités d'une destination
 */
@Component({
	selector: 'app-destination-activity',
	templateUrl: './destination-activity.component.html',
	styleUrls: ['./destination-activity.component.scss']
})
export class DestinationActivityComponent implements OnInit {

	/**
	 * Destination courante
	 */
	@Input() destination: IDestination;

	/**
	 * Liste des activités de la destination courante
	 */
	public activities: Array<IActivity>;

	/**
	 * Instancie le composant d'affichage des activités
	 * @param destinationActivityService service de l'API "tourism.lucienbertin" pour gérer la ressource "activity"
	 */
	constructor(protected destinationActivityService: DestinationActivityService) {
	}

	ngOnInit() {
		this.searchActivities(this.destination.id);
	}

	/**
	 * Récupère les activités d'une destination
	 * @param destinationId
	 */
	private searchActivities(destinationId: string): void {
		this.destinationActivityService.searchActivities(destinationId).subscribe(
			(response: Array<IActivity>) => {
				this.activities = response;
			}
		);
	}

}
