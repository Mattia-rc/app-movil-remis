import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-vista',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './inicio-vista.component.html',
  styleUrl: './inicio-vista.component.css'
})
export class InicioVistaComponent implements OnInit {
  username:string | null = null;
  nombre:string | null = null
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {



  }

  
  



}
