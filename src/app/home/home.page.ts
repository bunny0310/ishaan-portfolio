import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverController: PopoverController, private router: Router) {}

  openURL(url) {
    window.open(url);
  }
  navigateSection(id) {
    id.scrollIntoView({behavior: 'smooth'});
  }
}
