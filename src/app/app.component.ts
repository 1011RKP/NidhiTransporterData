import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewChild } from '@angular/core';
import { Compound, TransporterData } from './data';
import { AppService } from './app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TransporterformComponent } from "./TransporterForm/transporterform.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedData: Compound;
  seletedItem: TransporterData;
  Program: string;
  Compound: string;
  error: string;
  TransporterData: TransporterData;
  Nodata: boolean = true;
  isAdminTrue: boolean = false;

  @ViewChild(TransporterformComponent) ReloadTransportData: TransporterformComponent;

  ngOnInit() {
    this.getTransporterDataAdmin();
  }

  constructor(private _appService: AppService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  OnDeleteChange(response): void {
    response = (response === 'deleted') ? this.ConformMessage() : this.ErrorMessage();
  }

  AddedResponse(response): void {
    this.Nodata = false;
    this.TransporterData = response;
  }

  setseletedItem(data: TransporterData): void {
    this.seletedItem = data;
  }

  OnSelectionChange(selectedData: Compound): void {
    this.selectedData = selectedData;
    if (selectedData != null && selectedData !== <any>'-- Select Compound --') {
      this.Compound = this.selectedData.Id;
      this.Program = this.selectedData.Program.Id;
      this.getTransporterData(this.Program, this.Compound);
    } else {
      this.Compound = null;
      this.Program = null;
    }
  }

  getTransporterData(program: string, compound: string): void {
    const select = '?$select=Id,UptakeOATP1B3Input,UptakeOATP1B3Value,UptakeOATP1B3Input2,UptakeOATP1B3Value2,' +
      'UptakeOATP1B1Input,UptakeOATP1B1Value,UptakeOATP1B1Input2,UptakeOATP1B1Value2,UptakeOAT1Input,UptakeOAT1Value,' +
      'UptakeOAT1Input2,UptakeOAT1Value2,UptakeOAT3Input,UptakeOAT3Value,UptakeOAT3Input2,UptakeOAT3Value2,' +
      'UptakeOCT2Input,UptakeOCT2Value,UptakeOCT2Input2,UptakeOCT2Value2,EffluxBCRPInput,EffluxBCRPValue,' +
      'EffluxBCRPInput2,EffluxBCRPValue2,EffluxPgpInput,EffluxPgpValue,EffluxPgpInput2,EffluxPgpValue2,' +
      'EffluxMATE1Input,EffluxMATE1Value,EffluxMATE1Input2,EffluxMATE1Value2,EffluxMATE2KInput,EffluxMATE2KValue,' +
      'EffluxMATE2KInput2,EffluxMATE2KValue2,Comment,UptakeComment,SubstrateBCRP,CommentBCRP,SubstratePGP,CommentPGP,' +
      'SubstrateBCRPOATP1B1,SubstrateBCRPOATP1B3,SubstrateOAT1,SubstrateOAT3,SubstrateOAT2,SubstrateMATE1,SubstrateMATE2K,SubstrateBCRPNew,ComOATP1B1,ComOATP1B3,ComOAT1,ComOAT3,ComOAT2,ComMATE1,ComMATE2K,ComBCRP,ComPGP,' +
      'Modified,Program/Id,Compound/Id';
    const expand = '&$expand=Program/Id,Compound/Id';
    const filter = '&$filter=(Program/Id eq ' + program + ') and (Compound/Id eq ' + compound + ')';
    const order = '&$orderby=Modified desc';
    const url = '/_api/web/lists/getbytitle(\'TransporterData\')/items' + select + expand + filter + order;
    // console.log(url);
    this._appService.getListItem(url)
      .subscribe(
        (transporterData) => {
          if (transporterData == null) {
            console.log('NO Data');
          } else {
            if (transporterData.d.results.length !== 0) {
              this.Nodata = false;
              this.TransporterData = transporterData.d.results[0];
            } else {
              this.Nodata = true;
              console.log('No Data');
            }
          }
        },
        (error) => {
          this.error = 'Problem accessing the Service';
          console.log(this.error);
        });
  }

  getTransporterDataAdmin(): void {
    const url = "/_api/web/currentUser/groups?$select=title,Id&$filter=title+eq+'Transporter Data'";
    this._appService.getListItem(url)
      .subscribe(
        (res) => {
          console.log(res);
          if (res) {
            let userLength = res.d.results.length;
            this.isAdminTrue = (userLength !== 0) ? true : false;
          }
        },
        (error) => {
          this.error = 'Problem accessing the Service';
        });
  }

  //*! Helper Classes
  ConformMessage(): void {
    this.Nodata = true;
    this.toastr.error('Record Deleted Successfully');
    this.ReloadTransportData.getTransporterData(this.Program, this.Compound);
  }
  ErrorMessage(): void {
    this.toastr.error('Something Went Wrong please contact IT');
  }
}
