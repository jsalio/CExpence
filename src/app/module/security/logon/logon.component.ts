import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToLogin(){
    this.route.navigate(['security/logon']);
  }
}
