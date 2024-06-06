import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home-login-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink],
  templateUrl: './home-login-register.component.html',
  styleUrl: './home-login-register.component.css'
})
export class HomeLoginRegisterComponent {



constructor(private authService:AuthServiceService, private router:Router) { }


onSubmit(form:NgForm):void{
  const {username, password, nombre} = form.value

    if(username && password && nombre){
      this.authService.login({username,nombre,password}).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/vista'])
        }
        
      )
    }
}

}
