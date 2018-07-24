
import { Component, OnInit } from '@angular/core';

import { LocalService } from './local.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
  providers:[LocalService]
})
export class LocalComponent implements OnInit {

  constructor(private localService: LocalService) { }

  ngOnInit() {
  }

}
