import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-servicios-movil',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './servicios-movil.component.html',
  styleUrl: './servicios-movil.component.css'
})
export class ServiciosMovilComponent implements OnInit{

  nombreUsuario:string | null = null

    constructor( private authService:AuthServiceService) { }


  ngOnInit(): void {
    
    this.nombreUsuario = this.authService.getName()
}

Onsubmit(form:NgForm):void{
  const {date, origen, total} = form.value

  if(date&&origen&&total){
    console.log("llegaron correctamente los datos: ",{date, origen, total})
    this.authService.serviciosMovil({date, origen, total}).subscribe(
      res=>{
        console.log("datos guardados en la BD de manera exitosa")
      },error=>{
        console.log("datos no guardados en la BD", error)
      }
    )
  }else{
    console.log("no llegaron los datos")
  }
}

}
