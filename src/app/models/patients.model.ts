export interface Patient {
  id?: number;
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
