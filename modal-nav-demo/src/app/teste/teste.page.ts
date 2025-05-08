import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
  standalone:false,
})
export class TestePage implements OnInit {

  novoItem: string = '';

  constructor(private nav: NavController,
    private dataService: DataService) { }

  nextPage(){
  this.nav.navigateBack("home")
}
  addItem(){
    if (this.novoItem.trim()){
      this.dataService.addItem(this.novoItem.trim());
      this.nav.navigateBack('home')
    }
  }

  
  
  ngOnInit() {
  }

}
