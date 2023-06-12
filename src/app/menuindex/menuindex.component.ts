import { Component } from '@angular/core';

@Component({
  selector: 'app-menuindex',
  templateUrl: './menuindex.component.html',
  styleUrls: ['./menuindex.component.css']
})
export class MenuindexComponent {
  

}

function updatemenu() {
  if ((document.getElementById('responsive-menu') as HTMLInputElement).checked == true) {
    (document.getElementById('menu') as HTMLElement).style.borderBottomRightRadius = '0';
    (document.getElementById('menu') as HTMLElement).style.borderBottomLeftRadius = '0';
  } else {
    (document.getElementById('menu') as HTMLElement).style.borderRadius = '12px';
  }
}
