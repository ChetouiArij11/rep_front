// medecin.model.ts

export class Medecin {
  id: number;
  nom: string;
  specialite: string;
  email: string;
  adresse_cabinet: string;
  num_telephone: string;
  num_fixe_cabinet: string;
  password: string;
  cin: string;

  constructor(
    id: number,
    nom: string,
    specialite: string,
    email: string,
    adresse_cabinet: string,
    num_telephone: string,
    num_fixe_cabinet: string,
    password: string,
    cin: string
  ) {
    this.id = id;
    this.nom = nom;
    this.specialite = specialite;
    this.email = email;
    this.adresse_cabinet = adresse_cabinet;
    this.num_telephone = num_telephone;
    this.num_fixe_cabinet = num_fixe_cabinet;
    this.password = password;
    this.cin = cin;
  }
}
