import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'timer';

constructor() { }
}
