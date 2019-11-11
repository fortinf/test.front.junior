import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from './destination-activity.model';

/**
 * Service qui permet d'utiliser l'API "tourism.lucienbertin" pour gérer la ressource "activity"
 */
@Injectable({
	providedIn: 'root'
})
export class DestinationActivityService {

	/**
	 * Instancie le service
	 * @param http service HTTP
	 */
	constructor(protected http: HttpClient) {
	}

	/**
	 * Service qui appelle l'API tourism.lucienbertin" pour rechercher les activités filtré par une destination
	 *
	 * @param destinationId Identifiant de la destination
	 */
	searchActivities(destinationId: string = ''): Observable<Array<IActivity>> {
		const params = {} as any;
		params.orderBy = 'name';
		if (!!destinationId) {
			params['destinationId'] = destinationId;
		}
		return this.http.get<Array<IActivity>>(`/api/activities`, {params: params});
	}

}
