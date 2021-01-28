import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../service/service.service"

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  state: any
  city: any


  constructor(private auth: AuthService, private route: Router) {
    this.state = this.auth.getSate()
    this.city = this.auth.get()

  }

  ngOnInit() {
    console.log("Result", this.city)
  }

  Back() {
    this.route.navigate(['/home'])
  }

}
