import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams:any[]=[
    {id:1,name:'India',nowc:2,logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHq39haxzqZyV2iLTi4HsXNydMq2MjdspvSg&usqp=CAU'},
    {id:2,name:'Australia',nowc:4,logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfHbjTlYaNjoeHWxqHpTxeb7Q8ztU2o1F2g&usqp=CAU'},
    {id:3,name:'WestIndies',nowc:2,logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZ4WfTlvlm2-V9IdnSGAhnswbJdgo5cUsHg&usqp=CAU'},
    {id:4,name:'England',nowc:1,logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mns45X1EdKzltsoNZKzxj3AMMIXfXx_nCQ&usqp=CAU'},
  ];
}
