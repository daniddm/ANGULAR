import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/assets/static/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: any[] = [];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getMenu().subscribe(items => {
      this.menuItems = items;
    });
  }

}
