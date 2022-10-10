import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Barrios } from 'src/app/Models/barrios';
import { Cliente } from 'src/app/Models/cliente';
import { BarrioService } from 'src/app/Services/barrio.service';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit ,OnDestroy {
  listaCliente : any[] = [];

  private subscription = new Subscription();

  constructor(private clienteService : ClienteService,private barrioService : BarrioService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  
  }

  ngOnInit(): void {
  }

  actualizarListadoCliente() {
    this.subscription.add(
      this.barrioService.getBarrio().subscribe({
        next: (barrio: Barrios []) => {
          this.clienteService.getClientes().subscribe({
            next: (respuesta: Cliente[]) => {
              for (const cliente of respuesta) {
                const ordenIndex = barrio.findIndex(
                  (x) => x.id === cliente.idBarrio
                );
                cliente.barrio = barrio[ordenIndex];
              }

              this.listaCliente = respuesta;
            },
            error: () => {
              alert('error al comunicarse con la API');
            },
          });
        },
      })
    );
  }
}
