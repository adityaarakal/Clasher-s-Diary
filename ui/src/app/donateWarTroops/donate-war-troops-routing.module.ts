import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateWarTroopsComponent } from './donate-war-troops.component';
import { SetClanCastleCapacityComponent } from './set-clan-castle-capacity/set-clan-castle-capacity.component';
import { SetFillerTroopsComponent } from './set-filler-troops/set-filler-troops.component';
import { SetTroopsToDonateComponent } from './set-troops-to-donate/set-troops-to-donate.component';
const routes: Routes = [
  {
    path: "donate-war-troops",
    component: DonateWarTroopsComponent,
    children: [
      { path: "set-clan-capacity", component: SetClanCastleCapacityComponent },
      { path: "set-filler-troops", component: SetFillerTroopsComponent },
      { path: "set-troops-to-donate", component: SetTroopsToDonateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonateWarTroopsRoutingModule { }
