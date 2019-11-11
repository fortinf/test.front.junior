/**
 * Interface qui spécifie la structure de données d'un activité
 */
export interface IActivity {

	/**
	 * Identifiant de l'activité
	 */
	id: string;

	/**
	 * Nom de l'activité
	 */
	name: string;

	/**
	 * Description de l'activité
	 */
	description: string;

	/**
	 * Identifiant de la destination rattachée où se situe l'activité
	 */
	destinationId: string;

	/**
	 * Url de la photo miniature de l'activité
	 */
	thumbnail: string;

}
