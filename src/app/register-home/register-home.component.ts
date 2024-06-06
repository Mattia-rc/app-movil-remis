import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-home',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink ],
  templateUrl: './register-home.component.html',
  styleUrl: './register-home.component.css'
})
export class RegisterHomeComponent {
  constructor(private authService: AuthServiceService, private router: Router){}

onSubmit(form:NgForm):void{
  const { username, nombre, password } = form.value
  
  if(username && password){
    console.log("estos son datos que llegaron",{username,password})

    this.authService.register({username, nombre, password}).subscribe(
      res=> {
        this.authService.setUsername(username);
        console.log(username)
        this.authService.setName(nombre);
        console.log(nombre)
        console.log('login exitoso', res);
         this.router.navigate(['/login']) 
      },
      error=>{
        console.error("Error al crear Usuario", error);
      }
      
    )
  }else{
    console.log("required password and username")
  }

}

}
