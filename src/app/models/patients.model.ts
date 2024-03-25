export interface Patient {
  id?: string; // Le '?' indique que l'ID est facultatif, car il peut être généré automatiquement par la base de données
  nom: string;
  prenom: string;
  date_de_naissance: Date;
  sexe: string;
  adresse: string;
  numero_de_telephone: string;
  adresse_email: string;
  autres_informations_medicales: string;
  cin: string;
}
