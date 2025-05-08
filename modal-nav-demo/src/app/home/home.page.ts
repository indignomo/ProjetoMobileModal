import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  itens:string[] = []

  constructor(private nav: NavController,
    private router: Router,
    public dataService: DataService) {}

  ionViewWillEnter(){
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state;

    if(state?.['item']){
      this.itens.push(state['item'])
    }
  }

  

  

  getNext(){
    this.nav.navigateForward("teste");
  }

  ngOnInit(){
    this.dataService.items$.subscribe(items => {
      this.itens = items;
      console.log('Updated items:', items)
    })
  }
}
