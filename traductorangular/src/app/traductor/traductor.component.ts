import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent {
    constructor(private http: HttpClient){}
    misdatos: any;
    ngOnInit(){
        this.http.get('assets/traductor.json').subscribe(data => {
        
            this.misdatos = data;
            setTimeout(function(){
                let filas = document.getElementsByClassName("fila")
                
                console.log(filas.length)
                for(let i = 0;i<filas.length;i++){
                    (filas[i] as HTMLElement).style.display = "none";
                    
            }
            },1000)
            
        })
        
        console.log("hola")
    }
    enviar() {
        const contenido = (document.getElementById('termino') as HTMLInputElement).value;
        console.log(contenido);
    }
}
