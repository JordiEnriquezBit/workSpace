import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './layout/customer/customer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'customer', component: CustomerComponent},
  { path: '',   redirectTo: '/navbar', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
