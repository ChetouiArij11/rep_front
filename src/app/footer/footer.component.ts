import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redirectToOtherPage(): void {
    // Redirection vers la page sur localhost:4300
    window.location.href = 'http://localhost:4300/admin';
  }

}
