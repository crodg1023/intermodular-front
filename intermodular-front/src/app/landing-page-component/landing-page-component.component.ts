import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './landing-page-component.component.html',
  styleUrl: './landing-page-component.component.css'
})
export class LandingPageComponentComponent {

}
