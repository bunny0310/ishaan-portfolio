import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverController: PopoverController, private router: Router) {}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  openURL(url) {
    window.open(url);
  }
  navigateSection(id) {
    id.scrollIntoView({behavior: 'smooth'});
  }
}
