import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashbord/server-status/server-status.component';
import { TicketsComponent } from './dashbord/tickets/tickets.component';
import { TrafficComponent } from './dashbord/traffic/traffic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent,
  ],
})
export class AppComponent {}
