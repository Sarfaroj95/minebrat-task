import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../service/service.service"

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  constructor(private auth: AuthService) { }

  allCity: any[]
  @Input() childMessage: any[];
  @Output() dataFromCity = new EventEmitter<string>()

  ngOnInit() {
    console.log("Im Called")
    this.auth.getCityFunc(this.childMessage).subscribe(
      result => {
        console.log("data city", result)
        this.allCity = result
      }
    )
  }

  Selected(event) {
    console.log("sel", event.target.value)
    this.dataFromCity.emit(event.target.value)
  }

}
