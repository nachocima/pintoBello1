import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/Models/cliente';
import { Detalle } from 'src/app/Models/detalle';
import { Pedido } from 'src/app/Models/pedido';
import { ClienteService } from 'src/app/Services/cliente.service';
import { PedidoService } from 'src/app/Services/pedido.service';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit ,OnDestroy{
listClientes : Cliente[];
listProductos : any[];
 pedido : Pedido;
 idProducto : number;
 cantidad : number;
 detalle : Detalle;
 detalles : Detalle[];
 private subscription = new Subscription(); 

  constructor(private pedidoServices : PedidoService,private clienteService : ClienteService , private router: Router) { 
    this.detalles = [];
    this.pedido = {idCliente : 3 , fecha : '12/05/2022' , detalles : [] }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.listarClientes();
  }

 listarClientes(){
    
       return this.subscription.add(this.clienteService.getClientes().subscribe(data=>{
        this.listClientes = data;
        console.log(this.listClientes);
    }))
  }
  agregarDetalles(){
    this.detalle.cantidad = this.cantidad
    this.idProducto = this.idProducto;
    this.detalles.push(this.detalle);
  }
  agregarPedido(){
 
    this.pedido.detalles = this.detalles;
    this.pedidoServices.agregarPedido(this.pedido).subscribe({
      next : () =>{
      alert ("Ingreso exitoso");
   
      },
      error : () =>{
        alert('error');
      }
    });
  }
  cancelar() {
    this.router.navigate(['']);
  }
}
