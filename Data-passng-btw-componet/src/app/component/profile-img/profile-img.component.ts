import { Component, OnInit } from '@angular/core';
import { userList } from "../../dummyJSON/dummyJSON";

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss'],
})
export class ProfileImgComponent implements OnInit {

  //  variables
  private dummyUserList: Object;

  constructor() {
    this.dummyUserList = userList
  }

  ngOnInit() { }

}
