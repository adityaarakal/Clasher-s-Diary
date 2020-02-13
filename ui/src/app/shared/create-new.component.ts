import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PlayerCRUDService } from '../Services/player-crud.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  closeResult: string;
  playerForm: FormGroup;
  selectedIndex = 0;

  constructor(private ngbModal: NgbModal, private formBuilder: FormBuilder, private playerCRUDService: PlayerCRUDService) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      "Player Tag": [null, [Validators.required, Validators.pattern('#[0289CGJLPQRUVY]{8}[0289CGJLPQRUVY]*')]],
      "Player Name": [null, [Validators.required]],
      "Town Hall Level": [null, [Validators.required]],
      "Clan Castle Capacity": [null, [Validators.required]]
    })
  }

  open(content) {
    const modalRef = this.ngbModal.open(content);

    modalRef.result.then(
      result => {
        this.playerCRUDService.createPlayer(this.playerForm.value);
        this.closeResult = `Added New Player ${this.playerForm.get('Player Name').value} with Tag ${this.playerForm.get("Player Tag").value}`;
      },
      reject => {
        this.closeResult = "Player Could Not be Added";
      }
    )
  }
}
