import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-informe-movil',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './informe-movil.component.html',
  styleUrl: './informe-movil.component.css'
})
export class InformeMovilComponent  implements OnInit{

  nombreUsuario:string = ''
  informeMovil:any;
  descuentoRemiseria:number = 47400
  constructor(private auth:AuthServiceService){ 
    this.nombreUsuario = this.auth.getName()
  }

  ngOnInit(): void {

    this.auth.getInforme().subscribe(
      (data)=>{
        this.informeMovil = data;
        console.log("Información del usuario:", this.informeMovil);
        this.calculateTotalWithDiscount();

      },
      (error) => {
        console.error("Error al obtener el informe:", error);
    })
}
  calculateTotalWithDiscount() {
    this.informeMovil.moviles.forEach((movil: any) => {
      movil.totalServicios = movil.servicios.reduce((sum: number, servicio: any) => sum + servicio.total, 0);
      movil.totalDescuento = movil.totalServicios * 0.1;  // 10% de descuento
      movil.resultadoFinal = movil.totalServicios - movil.totalDescuento;
      movil.descuentoRemiseria = movil.resultadoFinal - this.descuentoRemiseria
      console.log("el total era: ", movil.totalServicios);
      console.log("el total es: ", movil.totalDescuento);
      console.log("el resultado final es: ", movil.resultadoFinal);
      console.log("el resultado con el descuento de la remiseria es: ", movil.descuentoRemiseria)
    });
  }
}
