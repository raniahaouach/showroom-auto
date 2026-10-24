import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-auto-details',
  templateUrl: './auto-details.html',
  styleUrl: './auto-details.css',
})
export class AutoDetails {
  @Input() auto!: Auto;
  @Output() closed = new EventEmitter<void>();
}
