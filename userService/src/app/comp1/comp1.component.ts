import { Component, OnInit } from '@angular/core';
import { compService } from '../services/compService1';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  // providers:[compService]
})
export class Comp1Component implements OnInit {
  constructor(private compService: compService) { }

  user: {name: string, job: string, gender: string, country: string, age: number, avatar: string};

  ngOnInit(): void {
    this.compService.onShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
      this.user = data;
    })
  }
}
