export class FicheMedicale {
  id: number;
  patient_id: number;
  medecin_id: number;
  rendezvous_id: number;
  medicaments: string;
  recettes: string;
  description: string;
  id_dossier: number;

  constructor(
    id: number,
    patient_id: number,
    medecin_id: number,
    rendezvous_id: number,
    medicaments: string,
    recettes: string,
    description: string,
    id_dossier: number
  ) {
    this.id = id;
    this.patient_id = patient_id;
    this.medecin_id = medecin_id;
    this.rendezvous_id = rendezvous_id;
    this.medicaments = medicaments;
    this.recettes = recettes;
    this.description = description;
    this.id_dossier = id_dossier;
  }
}
