import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rangliste-manager',
  templateUrl: './rangliste-manager.page.html',
  styleUrls: ['./rangliste-manager.page.scss'],
})
export class RanglisteManagerPage implements OnInit {

  selectedItem: number = 3;
  constructor() { }

  onItemClick(itemNumber: number) {
    this.selectedItem = itemNumber; // Met à jour l'élément sélectionné
  }

  ngOnInit() {
  }

}
