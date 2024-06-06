import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-informe-movil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './informe-movil.component.html',
  styleUrl: './informe-movil.component.css'
})
export class InformeMovilComponent  implements OnInit{


  constructor(private auth:AuthServiceService){ }

  informeMovil:any;

  ngOnInit(): void {

    this.auth.getInforme().subscribe(
      (data)=>{
        this.informeMovil = data;
        console.log("Información del usuario:", this.informeMovil);
      },
      (error) => {
        console.error("Error al obtener el informe:", error);
    }
    )

}

}
