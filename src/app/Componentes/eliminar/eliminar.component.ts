import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volcan } from 'src/app/Entidad/Volcan';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.buscar();
  }

  volcan: Volcan= new Volcan();

  buscar() {
    let idVolca = localStorage.getItem("id");
    this.volcan.idVolca = Number(idVolca);
    this.service.buscarC(this.volcan).subscribe(data => {
      this.volcan = data;
    });
  }



  eliminar() {
    this.service.eliminarC(this.volcan).subscribe(data => {
      alert("Se Elimino el Volcan: " + this.volcan.nombre);
      this.router.navigate(["listar"]);
    });

  }

}
