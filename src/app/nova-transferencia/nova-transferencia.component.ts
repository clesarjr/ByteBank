import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      complete: this.router.navigateByUrl('extrato')
    });
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
