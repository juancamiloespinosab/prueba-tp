import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = []

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
    this.httpClient.getApiJSON(data => {
      console.log(data)
      data.forEach(element => {
        this.users.push(element)
      });
    })
  }

}
