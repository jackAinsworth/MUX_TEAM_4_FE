import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StepsModalComponent } from '../../steps-modal/steps-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  steps: number = 4218;
  totalSteps: number = 10000;
  totalDistance: number = 61.3;
  date1: string = 'Donnerstag, der';
  date2: string = '12.09.2024';
  progress: number = 0;
  stepsLabel: string = '';

  constructor(private modalController: ModalController) {}
  async openStepsModal() {
    const modal = await this.modalController.create({
      component: StepsModalComponent,
      cssClass: 'alert-modal'
    });
    return await modal.present();
  }

  ngOnInit() {
    this.calculateProgress();
  }

  calculateProgress() {
    this.progress = (this.steps / this.totalSteps) * 100;
    this.stepsLabel = `/ ${this.totalSteps.toLocaleString()}`;
  }

}
