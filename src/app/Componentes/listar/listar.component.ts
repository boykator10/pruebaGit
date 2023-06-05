import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volcan } from 'src/app/Entidad/Volcan';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  constructor(private router: Router, private service: ServiceService) { }
  // aqui va la interpolation
  volcan !: Volcan[];

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listarC().subscribe(data => {
      this.volcan = data;
      console.log("Listar " + JSON.stringify(data));
    });
  }

  editar(volcan : Volcan){
    localStorage.setItem("id", volcan.idVolca.toString());
    this.router.navigate(['editar']);
  }

  eliminar(volcan : Volcan){
    localStorage.setItem("id", volcan.idVolca.toString());
    this.router.navigate(['eliminar']);
  }

}
