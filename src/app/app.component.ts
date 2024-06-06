import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, provideRouter } from '@angular/router';
import { HomeLoginRegisterComponent } from './home-login-register/home-login-register.component';
import { FormsModule } from '@angular/forms';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { InicioVistaComponent } from './inicio-vista/inicio-vista.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HomeLoginRegisterComponent,RegisterHomeComponent,InicioVistaComponent, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyect-Remiseria';
}
