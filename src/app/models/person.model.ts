import { Component } from '@angular/core';

interface Person {
  lname: string;
  fname: string;
  age: number;
  job: string;
  address: string;
}

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent {
  columns: string[] = ['Index', 'Last Name', 'First Name', 'Age', 'Job', 'Address', 'Actions '];
  persons: Person[] = [
    {
      lname: "ADIASSA",
      fname: "Ethiel",
      age: 20,
      job: "Web Developer",
      address: "Lome-Togo"
    },
    // Autres éléments
  ];
  bin: Person[] = [];
  input: Partial<Person> = {
    lname: "WADE",
    fname: "Johnson",
    age: 38,
    job: "Comedian",
    address: "Roma/Italia"
  };
  editInput: Partial<Person> = {
    lname: "",
    fname: "",
    age: 0,
    job: "",
    address: ""
  };

  add(): void {
    this.persons.push({
      lname: this.input.lname!,
      fname: this.input.fname!,
      age: this.input.age!,
      job: this.input.job!,
      address: this.input.address!
    });

    this.input = {}; // Effacer les champs de saisie après l'ajout
    this.persons.sort(this.ordonner);
  }

  // Autres méthodes...

  ordonner(a: Person, b: Person): number {
    return (a.lname > b.lname) ? 1 : -1;
  }
}
