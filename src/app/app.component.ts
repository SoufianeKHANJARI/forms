import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrivenTemplateComponent } from './driven-template/driven-template.component';
import { DrivenCodeComponent } from './driven-code/driven-code.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DrivenCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movieForms';
}
