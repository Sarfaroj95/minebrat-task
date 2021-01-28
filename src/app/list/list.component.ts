import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from "../service/service.service"
import { Router } from '@angular/router';
import { ResultListComponent } from "../result-list/result-list.component"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  appForm: FormGroup;
  allState: any[];
  stateId: any[];
  message: any;
  fromCity: "";
  Id: string
  stateN: string



  constructor(private auth: AuthService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.initForm();


    this.auth.getStateFunc().subscribe(
      result => {
        console.log("data", result)
        this.allState = result
      }
    )
  }



  initForm() {
    this.appForm = this.fb.group({
      stateName: [""],
      stateCity: [""]
    })
  }

  Submit() {
    this.auth.setSate(this.stateN)
    this.auth.set(this.fromCity)
    this.route.navigate(["/result"]);
  }

  GetIdState(id) {
    this.Id = id.target.value
    this.auth.getCityFunc(id.target.value).subscribe(
      result => {
        console.log("data city", result)
        this.stateId = result
      }
    )
    let data = this.allState.filter(d => d.stateId == this.Id)
    this.stateN = data[0].stateName
  }

  Recievedata(event) {
    this.fromCity = event
  }



}
