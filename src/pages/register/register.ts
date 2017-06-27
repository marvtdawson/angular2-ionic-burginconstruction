import { Component } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})

export class RegisterPage{

  constructor(){}
  pageTitle = 'Sign Up';
  siteName = 'Who\'s Laundry';
  pushLoginPage = LoginPage;

  //currRegMemEmail = localStorage.setItem('regUserEmail', 'marvintdawson@gmail.com');
}

