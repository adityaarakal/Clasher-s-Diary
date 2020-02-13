import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateWarTroopsRoutingModule } from './donate-war-troops-routing.module';
import { DonateWarTroopsComponent } from './donate-war-troops.component';
import { SetClanCastleCapacityComponent } from './set-clan-castle-capacity/set-clan-castle-capacity.component';
import { SetTroopsToDonateComponent } from './set-troops-to-donate/set-troops-to-donate.component';
import { SetFillerTroopsComponent } from './set-filler-troops/set-filler-troops.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    DonateWarTroopsComponent,
    SetClanCastleCapacityComponent,
    SetTroopsToDonateComponent,
    SetFillerTroopsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DonateWarTroopsRoutingModule
  ]
})
export class DonateWarTroopsModule { }
