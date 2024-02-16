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
        console.log(data)
        /*
            let misdatos = data[2].data
            console.log(misdatos)
            this.misdatos = misdatos;
            */
        })
    }
}
