import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateWarTroopsRoutingModule } from './donate-war-troops-routing.module';
import { DonateWarTroopsComponent } from './donate-war-troops.component';
import { SetClanCastleCapacityComponent } from './set-clan-castle-capacity/set-clan-castle-capacity.component';
import { SetTroopsToDonateComponent } from './set-troops-to-donate/set-troops-to-donate.component';
import { SetFillerTroopsComponent } from './set-filler-troops/set-filler-troops.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    DonateWarTroopsRoutingModule
  ]
})
export class DonateWarTroopsModule { }
