import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.html',
  styleUrl: './auto-card.css',
})
export class AutoCard {
  @Input() auto!: Auto;
  @Output() seeMore = new EventEmitter<Auto>();
}
