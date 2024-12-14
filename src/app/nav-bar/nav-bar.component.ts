import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  ngAfterViewInit(): void {
    // Initialize Bootstrap's JS components (like navbar) after Angular view initialization
    const bootstrap = (window as any).bootstrap; // Access Bootstrap from global window object
    if (bootstrap) {
      new bootstrap.Navbar(document.querySelector('.navbar'));
    }
  }

}
