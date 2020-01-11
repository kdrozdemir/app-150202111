import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { path: 'home', loadChildren: './meeting/meetings/meetings.module#HomePageModule' },
  { path: 'meeting-detail/:id', loadChildren: './meeting/meeting-detail/meeting-detail.module#MeetingDetailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'chat', loadChildren: './meetingChat/chat-page/chat-page.module#ChatPagePageModule' }, 
  { path: "documents", loadChildren: "./documents/documents/documents.module#DocumentsPageModule" },
  { path: 'meeting-add', loadChildren: './meeting/meeting-add/meeting-add.module#MeetingAddPageModule' },
  { path: 'participants', loadChildren: './meetingParticipants/participants/participants.module#ParticipantsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
