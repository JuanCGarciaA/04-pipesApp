import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Juan Carlos';
  genero: string = 'masculino';

  invitacionMap ={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro','Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente espernado',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Juan Perez',
    edad:30,
    direccion: 'Houston, Texas'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data de promesa');
    }, 3500 );
  });


}
