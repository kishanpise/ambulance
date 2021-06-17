import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  Driver:any;
  constructor(private http:HttpClient) {this.http.get('http://localhost:3000/Drivers').subscribe((result)=>{
    console.log(result);
    this.Driver=result;
  }) }

  ngOnInit(): void {
  }

}
