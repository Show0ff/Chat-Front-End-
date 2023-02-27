import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginMenuComponent} from "./login-menu/login-menu.component";
import {RegisterMenuComponent} from "./register-menu/register-menu.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {
    path: '', component: LoginMenuComponent
  },
  {
    path: 'register', component: RegisterMenuComponent
  },
  {
    path: 'chat', component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
