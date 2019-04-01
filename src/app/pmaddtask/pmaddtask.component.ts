import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pmaddtask',
  templateUrl: './pmaddtask.component.html',
  styleUrls: ['./pmaddtask.component.scss']
})
export class PmaddtaskComponent implements OnInit {
  
  priority = '';
  startDate = '';
  endDate= '';
  user='';

  constructor() { }

  ngOnInit() {
  }

  addTask(){

  }

}
