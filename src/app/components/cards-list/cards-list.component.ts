import { Component, OnInit } from '@angular/core';
import { data } from '../../data/gamesData';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

	cardsList = data

  constructor() { }

  ngOnInit(): void {
		console.log(data)
  }

}
