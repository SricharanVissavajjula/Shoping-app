import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent,
      title: "Home"
  },
  {
      path: 'cart',
      component: CartsComponent,
      title: "carts page"
  }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
