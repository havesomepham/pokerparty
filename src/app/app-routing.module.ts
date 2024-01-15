import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HostComponent } from './host/host.component';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'host', component: CommunityComponent}
];

@NgModule({
	declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
