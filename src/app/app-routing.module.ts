import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {LisUserComponent} from "./lis-user/lis-user.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:"products",component: ListProductComponent},
  {path:"users",component: LisUserComponent},
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
