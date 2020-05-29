import {  Output,EventEmitter,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() username:EventEmitter<string> = new EventEmitter();
  @Output() password:EventEmitter<string> = new EventEmitter();
  user:string = '';
  pass:string = ''

  login(){
    this.username.emit(this.user);
    this.password.emit(this.pass);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
