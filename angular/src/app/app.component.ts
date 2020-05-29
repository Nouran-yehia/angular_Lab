import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  name:string = '';
  pass:string = '';
  getUserName(user){
    this.name =user;
    console.log(user);
  }
  getPassword(pass){
    this.pass = pass;
    console.log(pass);

  }
}
