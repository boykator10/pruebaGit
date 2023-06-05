import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volcan } from 'src/app/Entidad/Volcan';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit{
  constructor(private router: Router, private service : ServiceService){}

    ngOnInit(): void {
    }

    volcan : Volcan = new Volcan();
    guardar(){
      this.service.guardarC(this.volcan).subscribe(data=>{
        alert("Se Guardo el Volcan: " + this.volcan.nombre);
        this.router.navigate(["listar"]);
      });

    }
}
