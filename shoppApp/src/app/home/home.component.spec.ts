import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component } from '@angular/core';


@Component({
  selector: 'div.home.app-page',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css','../../assets/styles.css'],
})

export class HomePageComponent {
  constructor() {}
}

