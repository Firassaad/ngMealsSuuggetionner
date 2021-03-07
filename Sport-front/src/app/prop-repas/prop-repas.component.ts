import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { PrpRepasService } from '../prp-repas.service';

@Component({
  selector: 'app-prop-repas',
  templateUrl: './prop-repas.component.html',
  styleUrls: ['./prop-repas.component.css']
})
  

export class PropRepasComponent implements OnInit {
  myData: string;
  // users: User[];
  frs: string[] = [];
  frs1 : any ;
  constructor(private service: PrpRepasService) { }
  
  ngOnInit(): void {
 
  }

  addCalorie(cal) {
    this.service.addCal(cal)
      .subscribe(data1 => {
        console.log("--------->>>addcal"+JSON.stringify(data1))

        this.frs=(data1);
      })   
      this.service.getAll(cal).subscribe((data) => {
        this.myData = (JSON.stringify(data));
     //   this.frs.push(this.myData);
        console.log('Result -getAll ', this.myData);
        
       
      })  
      this.frs = [] 
  }
 
 


}
