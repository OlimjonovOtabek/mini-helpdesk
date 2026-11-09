import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet, Toolbar],
  selector: 'app-shell',
  styleUrl: './shell.scss',
  templateUrl: './shell.html',
})
export class Shell {}
