import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navData: {
    name: string
    route: string
  }[] = [
    {
      route: '/',
      name: 'Home'
    },
    {
      route: '/movies',
      name: 'Movies'
    },
    {
      route: '/genres',
      name: 'Genres'
    },
  ]
}
