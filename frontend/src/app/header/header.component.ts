import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  href = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
  }

}