import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Models/empleado';
import { Usuario } from 'src/app/Models/usuario';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : Usuario;
  constructor(private router: Router,private LoginService : LoginServiceService ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  irHome(){
    this.router.navigate(['home']);
  }
  guardarOrden(){
  
    this.LoginService.postLogin(this.usuario).subscribe({
      next : (r: Empleado) => {alert("Bienvenido " + r.nombre), this.irHome()},
      error : (e) => console.log(e.error)
    });
  }
}
