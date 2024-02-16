import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent {
    constructor(private http: HttpClient){}
    misdatos: any;

    ngOnInit(){
        this.http.get<any[]>('assets/traductor.json').subscribe(data => {
            this.misdatos = data;
            setTimeout(() => {
                let filas = document.getElementsByClassName("fila");
                console.log(filas.length);
                for(let i = 0; i < filas.length; i++){
                    (filas[i] as HTMLElement).style.display = "none";
                }
            }, 1000);
        });
        console.log("hola");
    }

    
    enviar() {
    
        
        let filas = document.getElementsByClassName("fila");
        console.log(filas.length);
        for(let i = 0; i < filas.length; i++){
            (filas[i] as HTMLElement).style.display = "none";
        }
           
       
    
        const contenido = (document.getElementById('termino') as HTMLInputElement).value;
        console.log(contenido);
        console.log("Ahora lo comparo con mis datos:");
        for (let i = 0; i < this.misdatos.length; i++) {
            if (this.misdatos[i]['es'] === contenido) {
                console.log("coincidencia encontrada");
                console.log(this.misdatos[i]);
                (document.getElementById(contenido) as HTMLElement).style.display = "table-row";
            }
        }
    }
}
