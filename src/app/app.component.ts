import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  username ="defaultUserName";
  showSecret : boolean = false; 
  log= [];

  onReset() {
    this.username = '';
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }
}
