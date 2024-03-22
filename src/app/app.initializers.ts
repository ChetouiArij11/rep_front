import { PatientsService } from "./services/patients.service";

export function initializeApp(patientService: PatientsService) {
  return () => patientService.initialize(); // Supposons que vous avez une méthode d'initialisation dans votre service patient
}
