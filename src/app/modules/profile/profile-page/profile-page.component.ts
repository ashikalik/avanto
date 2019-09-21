import { Component, OnInit } from '@angular/core';
import { UserProfileData } from 'src/app/core/model/user/user-profile-data';
import { UserProfile } from 'src/app/core/model/user/user-profile';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public userProfileData : UserProfileData;

  constructor() { 

    this.userProfileData = {} as UserProfileData;
    this.userProfileData.data = {} as UserProfile;
    this.userProfileData.data.first_name = "Ashik";
    this.userProfileData.data.last_name = "Ali";
    this.userProfileData.data.mobile = "0504554555";
    this.userProfileData.data.email = "ashikalik@gmail.com";
  }

  ngOnInit() {
  }

}
