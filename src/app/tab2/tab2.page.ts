import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  usuarios: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsers().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

}