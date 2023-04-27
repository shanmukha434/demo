import { Component } from angular

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title:string="Angular";
  showError(){
    alert("Thanks for enrolling"+this.title+"course");
  }
}
