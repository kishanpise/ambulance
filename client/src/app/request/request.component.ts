import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  Driver:any;
  constructor(private http:HttpClient, private route:Router) {this.http.get('http://localhost:3000/Drivers').subscribe((result)=>{
    console.log(result);
    this.Driver=result;
  }) }

  ngOnInit(): void {
  }

  onClick(name:any){
    console.log(name);
    this.route.navigate(['/assign',name]);
  }

}
