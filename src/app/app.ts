import { Component } from '@angular/core';
import { Toast } from 'primeng/toast';
import { Shell } from './core/layout/shell/shell';

@Component({
  imports: [Shell, Toast],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
