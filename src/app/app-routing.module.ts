import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPageComponent } from './another-page/another-page.component';
import { ClickButtonComponent } from './click-button/click-button.component';

const routes: Routes = [
  { path: '', redirectTo: '/clickButton', pathMatch: 'full' },
  { path: 'clickButton', component: ClickButtonComponent },
  { path: 'anotherPage', component: AnotherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
