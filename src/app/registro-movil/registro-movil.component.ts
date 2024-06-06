import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro-movil',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './registro-movil.component.html',
  styleUrl: './registro-movil.component.css'
})
export class RegistroMovilComponent implements OnInit {
  nombreUsuario: string | null = null;


  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.nombreUsuario = this.authService.getUsername()
    // Suponiendo que tienes un método en authService para obtener el token

  }

  Onsubmit(form: NgForm): void {
    const { marca, modelo, patente, numeroMovil } = form.value;

    if (marca && modelo && patente && numeroMovil) {
      console.log("Llegaron correctamente los datos del móvil", { marca, modelo, patente, numeroMovil });

      this.authService.vistaMovil({ marca, modelo, patente, numeroMovil }).subscribe(
        res => {
          console.log("Datos guardados en la BD correctamente", res);
        },
        error => {
          console.log("Hubo un error al guardar los datos en la BD", error);
        }
      );
    } else {
      console.log("Error al ingresar datos del móvil");
    }
  }
}
