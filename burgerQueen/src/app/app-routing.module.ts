import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionPantComponent } from './section-pant/section-pant.component';
import { HomeComponent } from './home/home.component';
import { SectionLunchComponent } from './section-lunch/section-lunch.component';
import { SectionBreakfastComponent } from './section-breakfast/section-breakfast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{ path:'', redirectTo:'/home', pathMatch:'full'},
{ path:'home', component: HomeComponent},
{ path:'menu', component: SectionPantComponent},
{
  path:'menu',
  component: SectionPantComponent,
  children: [
    { path:'desayuno', component: SectionBreakfastComponent},
    { path: 'almuerzo', component: SectionLunchComponent}
  ]
},
{ path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
