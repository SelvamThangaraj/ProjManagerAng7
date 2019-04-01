import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pmaddprj',
  templateUrl: './pmaddprj.component.html',
  styleUrls: ['./pmaddprj.component.scss']
})
export class PmaddprjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    console.log("in addition");
    //back end call to micro service
  }
}
