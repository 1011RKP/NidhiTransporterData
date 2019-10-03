import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';

import { Program, Compound, TransporterData } from '../data';
import { AppService } from '../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-transporterform',
    templateUrl: './transporterform.component.html',
    styleUrls: ['./transporterform.component.css']
})

export class TransporterformComponent implements OnChanges {
    @Input()
    Program: string;
    @Input()
    Compound: string;

    @Output()
    RecordAdded: EventEmitter<TransporterData> = new EventEmitter<TransporterData>();

    TransporterData: TransporterData;

    message: string;
    error: string;
    createNew: boolean;
    UptakeOATP1B3Input: string;
    UptakeOATP1B3Value: string;
    UptakeOATP1B3Input2: string;
    UptakeOATP1B3Value2: string;
    UptakeOATP1B1Input: string;
    UptakeOATP1B1Value: string;
    UptakeOATP1B1Input2: string;
    UptakeOATP1B1Value2: string;
    UptakeOAT1Input: string;
    UptakeOAT1Value: string;
    UptakeOAT1Input2: string;
    UptakeOAT1Value2: string;
    UptakeOAT3Input: string;
    UptakeOAT3Value: string;
    UptakeOAT3Input2: string;
    UptakeOAT3Value2: string;
    UptakeOCT2Input: string;
    UptakeOCT2Value: string;
    UptakeOCT2Input2: string;
    UptakeOCT2Value2: string;
    EffluxBCRPInput: string;
    EffluxBCRPValue: string;
    EffluxBCRPInput2: string;
    EffluxBCRPValue2: string;
    EffluxPgpInput: string;
    EffluxPgpValue: string;
    EffluxPgpInput2: string;
    EffluxPgpValue2: string;
    EffluxMATE1Input: string;
    EffluxMATE1Value: string;
    EffluxMATE1Input2: string;
    EffluxMATE1Value2: string;
    EffluxMATE2KInput: string;
    EffluxMATE2KValue: string;
    EffluxMATE2KInput2: string;
    EffluxMATE2KValue2: string;
    UptakeComment: string;
    EffluxComment: string;
    /*Phase 2 column chnages */
    SubstrateBCRPNew: string;
    SubstrateBCRPOATP1B1: string;
    SubstrateBCRPOATP1B3: string;
    SubstrateOAT1: string;
    SubstrateOAT3: string;
    SubstrateOAT2: string;
    SubstrateMATE1: string;
    SubstrateMATE2K: string;
    SubstratePGP: string;

    //SubOATP1B1: string;
    // SubOATP1B3: string;
    // SubOAT1: string;
    // SubOAT3: string;
    // SubOAT2: string;
    // SubMATE1: string;
    // SubMATE2K: string;
    // SubBCRP: string;
    //SubPGP: string;


    ComOATP1B1: string;
    ComOATP1B3: string;
    ComOAT1: string;
    ComOAT3: string;
    ComOAT2: string;
    ComMATE1: string;
    ComMATE2K: string;
    ComBCRP: string;
    ComPGP: string;

    UptakeURL: string;
    EffluxURL: string;
    VictimURL: string;



    constructor(
        private _appService: AppService,
        public toastr: ToastsManager, vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnChanges() {
        this.message = '';
        this.error = '';
        if (this.Program !== '' && this.Compound !== '') {
            this.getTransporterData(this.Program, this.Compound);
        } else {
            this.clearData();
        }
    }

    clearData(): void {
        this.createNew = true;
        this.UptakeOATP1B3Input = 'IC50';
        this.UptakeOATP1B3Value = '';
        this.UptakeOATP1B3Input2 = 'Highest Conc. Tested (uM)';
        this.UptakeOATP1B3Value2 = '';
        this.UptakeOATP1B1Input = 'IC50';
        this.UptakeOATP1B1Value = '';
        this.UptakeOATP1B1Input2 = 'Highest Conc. Tested (uM)';
        this.UptakeOATP1B1Value2 = '';
        this.UptakeOAT1Input = 'IC50';
        this.UptakeOAT1Value = '';
        this.UptakeOAT1Input2 = 'Highest Conc. Tested (uM)';
        this.UptakeOAT1Value2 = '';
        this.UptakeOAT3Input = 'IC50';
        this.UptakeOAT3Value = '';
        this.UptakeOAT3Input2 = 'Highest Conc. Tested (uM)';
        this.UptakeOAT3Value2 = '';
        this.UptakeOCT2Input = 'IC50';
        this.UptakeOCT2Value = '';
        this.UptakeOCT2Input2 = 'Highest Conc. Tested (uM)';
        this.UptakeOCT2Value2 = '';
        this.EffluxBCRPInput = 'IC50';
        this.EffluxBCRPValue = '';
        this.EffluxBCRPInput2 = 'Highest Conc. Tested (uM)';
        this.EffluxBCRPValue2 = '';
        this.EffluxPgpInput = 'IC50';
        this.EffluxPgpValue = '';
        this.EffluxPgpInput2 = 'Highest Conc. Tested (uM)';
        this.EffluxPgpValue2 = '';
        this.EffluxMATE1Input = 'IC50';
        this.EffluxMATE1Value = '';
        this.EffluxMATE1Input2 = 'Highest Conc. Tested (uM)';
        this.EffluxMATE1Value2 = '';
        this.EffluxMATE2KInput = 'IC50';
        this.EffluxMATE2KValue = '';
        this.EffluxMATE2KInput2 = 'Highest Conc. Tested (uM)';
        this.EffluxMATE2KValue2 = '';
        this.EffluxComment = '';
        this.UptakeComment = '';
        this.SubstrateBCRPOATP1B1 = 'Not Tested';
        this.SubstrateBCRPOATP1B3 = 'Not Tested';
        this.SubstrateOAT1 = 'Not Tested';
        this.SubstrateOAT3 = 'Not Tested';
        this.SubstrateOAT2 = 'Not Tested';
        this.SubstrateMATE1 = 'Not Tested';
        this.SubstrateMATE2K = 'Not Tested';
        this.SubstrateBCRPNew = 'Not Tested';
        this.SubstratePGP = 'Not Tested';
        //this.SubOATP1B1 = 'No';
        // this.SubOATP1B3 = 'No';
        // this.SubOAT1 = 'No';
        // this.SubOAT3 = 'No';
        // this.SubOAT2 = 'No';
        // this.SubMATE1 = 'No';
        // this.SubMATE2K = 'No';
        // this.SubBCRP = 'No';
        // this.SubPGP = 'No';
        this.ComOATP1B1 = '';
        this.ComOATP1B3 = '';
        this.ComOAT1 = '';
        this.ComOAT3 = '';
        this.ComOAT2 = '';
        this.ComMATE1 = '';
        this.ComMATE2K = '';
        this.ComBCRP = '';
        this.ComPGP = '';
        this.UptakeURL = '';
        this.EffluxURL = '';
        this.VictimURL = '';
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
            'UptakeURL,EffluxURL,VictimURL,' +
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
                            // console.log(transporterData);
                            this.TransporterData = transporterData.d.results[0];
                            this.setData(this.TransporterData);
                        } else {
                            this.clearData();
                            console.log('No Data');
                        }
                    }
                },
                (error) => {
                    this.error = 'Problem accessing the Service';
                    console.log(this.error);
                });
    }

    setData(data: TransporterData) {
        this.createNew = false;
        this.UptakeOATP1B3Input = this.setDropdown(data.UptakeOATP1B3Input);
        this.UptakeOATP1B3Value = data.UptakeOATP1B3Value;
        this.UptakeOATP1B3Input2 = this.setDropdown(data.UptakeOATP1B3Input2);
        this.UptakeOATP1B3Value2 = data.UptakeOATP1B3Value2;
        this.UptakeOATP1B1Input = this.setDropdown(data.UptakeOATP1B1Input);
        this.UptakeOATP1B1Value = data.UptakeOATP1B1Value;
        this.UptakeOATP1B1Input2 = this.setDropdown(data.UptakeOATP1B1Input2);
        this.UptakeOATP1B1Value2 = data.UptakeOATP1B1Value2;
        this.UptakeOAT1Input = this.setDropdown(data.UptakeOAT1Input);
        this.UptakeOAT1Value = data.UptakeOAT1Value;
        this.UptakeOAT1Input2 = this.setDropdown(data.UptakeOAT1Input2);
        this.UptakeOAT1Value2 = data.UptakeOAT1Value2;
        this.UptakeOAT3Input = this.setDropdown(data.UptakeOAT3Input);
        this.UptakeOAT3Value = data.UptakeOAT3Value;
        this.UptakeOAT3Input2 = this.setDropdown(data.UptakeOAT3Input2);
        this.UptakeOAT3Value2 = data.UptakeOAT3Value2;
        this.UptakeOCT2Input = this.setDropdown(data.UptakeOCT2Input);
        this.UptakeOCT2Value = data.UptakeOCT2Value;
        this.UptakeOCT2Input2 = this.setDropdown(data.UptakeOCT2Input2);
        this.UptakeOCT2Value2 = data.UptakeOCT2Value2;
        this.EffluxBCRPInput = this.setDropdown(data.EffluxBCRPInput);
        this.EffluxBCRPValue = data.EffluxBCRPValue;
        this.EffluxBCRPInput2 = this.setDropdown(data.EffluxBCRPInput2);
        this.EffluxBCRPValue2 = data.EffluxBCRPValue2;
        this.EffluxPgpInput = this.setDropdown(data.EffluxPgpInput);
        this.EffluxPgpValue = data.EffluxPgpValue;
        this.EffluxPgpInput2 = this.setDropdown(data.EffluxPgpInput2);
        this.EffluxPgpValue2 = data.EffluxPgpValue2;
        this.EffluxMATE1Input = this.setDropdown(data.EffluxMATE1Input);
        this.EffluxMATE1Value = data.EffluxMATE1Value;
        this.EffluxMATE1Input2 = this.setDropdown(data.EffluxMATE1Input2);
        this.EffluxMATE1Value2 = data.EffluxMATE1Value2;
        this.EffluxMATE2KInput = this.setDropdown(data.EffluxMATE2KInput);
        this.EffluxMATE2KValue = data.EffluxMATE2KValue;
        this.EffluxMATE2KInput2 = this.setDropdown(data.EffluxMATE2KInput2);
        this.EffluxMATE2KValue2 = data.EffluxMATE2KValue2;
        this.UptakeComment = data.Comment;
        this.EffluxComment = data.UptakeComment;

        //* Phase II 
        this.SubstrateBCRPNew = (data.SubstrateBCRPNew !== null) ? data.SubstrateBCRPNew : 'Not Tested';
        this.SubstrateBCRPOATP1B1 = (data.SubstrateBCRPOATP1B1 !== null) ? data.SubstrateBCRPOATP1B1 : 'Not Tested';
        this.SubstrateBCRPOATP1B3 = (data.SubstrateBCRPOATP1B3 !== null) ? data.SubstrateBCRPOATP1B3 : 'Not Tested';
        this.SubstrateOAT1 = (data.SubstrateOAT1 !== null) ? data.SubstrateOAT1 : 'Not Tested';
        this.SubstrateOAT3 = (data.SubstrateOAT3 !== null) ? data.SubstrateOAT3 : 'Not Tested';
        this.SubstrateOAT2 = (data.SubstrateOAT2 !== null) ? data.SubstrateOAT2 : 'Not Tested';
        this.SubstrateMATE1 = (data.SubstrateMATE1 !== null) ? data.SubstrateMATE1 : 'Not Tested';
        this.SubstrateMATE2K = (data.SubstrateMATE2K !== null) ? data.SubstrateMATE2K : 'Not Tested';
        this.SubstratePGP = (data.SubstratePGP !== null) ? data.SubstratePGP : 'Not Tested';

        //this.SubOATP1B1 = data.SubOATP1B1;
        //this.SubOATP1B3 = data.SubOATP1B3;
        //this.SubOAT1 = data.SubOAT1;
        // this.SubOAT3 = data.SubOAT3;
        // this.SubOAT2 = data.SubOAT2;
        // this.SubMATE1 = data.SubMATE1;
        // this.SubMATE2K = data.SubMATE2K;
        // this.SubBCRP = data.SubBCRP;
        // this.SubPGP = data.SubPGP;
        this.ComOATP1B1 = data.ComOATP1B1;
        this.ComOATP1B3 = data.ComOATP1B3;
        this.ComOAT1 = data.ComOAT1;
        this.ComOAT3 = data.ComOAT3;
        this.ComOAT2 = data.ComOAT2;
        this.ComMATE1 = data.ComMATE1;
        this.ComMATE2K = data.ComMATE2K;
        this.ComBCRP = data.ComBCRP;
        this.ComPGP = data.ComPGP;
        this.UptakeURL = (data.UptakeURL !== null) ? data.UptakeURL.Url : '';
        this.EffluxURL = (data.EffluxURL !== null) ? data.UptakeURL.Url : '';
        this.VictimURL = (data.VictimURL !== null) ? data.UptakeURL.Url : '';
    }

    setDropdown(data: string): string {
        if (data !== null) {
            return data;
        } else {
            return '';
        }
    }

    saveClick(): void {
        if (this.createNew === true) {
            this.saveChanges();
        } else {
            this.editRecord();
        }
    }

    saveChanges(): void {
        // console.log('saveChanges' + this.createNew);
        // console.log(this.Compound);
        // console.log(this.Program);
        if (this.Compound !== '' && this.Program !== '') {
            this._appService.getService().subscribe(
                (res) => {
                    // console.log(res.length);
                    // console.log(res);
                    if (res.length !== 0) {
                        // console.log('res' + res.d.GetContextWebInformation.FormDigestValue);
                        // console.log('Inside Click');
                        const url = '/_api/web/lists/getbytitle(\'TransporterData\')/items';
                        this._appService.addDatatoList(url, {
                            ProgramId: this.Program,
                            CompoundId: this.Compound,
                            UptakeOATP1B3Input: this.UptakeOATP1B3Input,
                            UptakeOATP1B3Value: this.UptakeOATP1B3Value,
                            UptakeOATP1B3Input2: this.UptakeOATP1B3Input2,
                            UptakeOATP1B3Value2: this.UptakeOATP1B3Value2,
                            UptakeOATP1B1Input: this.UptakeOATP1B1Input,
                            UptakeOATP1B1Value: this.UptakeOATP1B1Value,
                            UptakeOATP1B1Input2: this.UptakeOATP1B1Input2,
                            UptakeOATP1B1Value2: this.UptakeOATP1B1Value2,
                            UptakeOAT1Input: this.UptakeOAT1Input,
                            UptakeOAT1Value: this.UptakeOAT1Value,
                            UptakeOAT1Input2: this.UptakeOAT1Input2,
                            UptakeOAT1Value2: this.UptakeOAT1Value2,
                            UptakeOAT3Input: this.UptakeOAT3Input,
                            UptakeOAT3Value: this.UptakeOAT3Value,
                            UptakeOAT3Input2: this.UptakeOAT3Input2,
                            UptakeOAT3Value2: this.UptakeOAT3Value2,
                            UptakeOCT2Input: this.UptakeOCT2Input,
                            UptakeOCT2Value: this.UptakeOCT2Value,
                            UptakeOCT2Input2: this.UptakeOCT2Input2,
                            UptakeOCT2Value2: this.UptakeOCT2Value2,
                            EffluxBCRPInput: this.EffluxBCRPInput,
                            EffluxBCRPValue: this.EffluxBCRPValue,
                            EffluxBCRPInput2: this.EffluxBCRPInput2,
                            EffluxBCRPValue2: this.EffluxBCRPValue2,
                            EffluxPgpInput: this.EffluxPgpInput,
                            EffluxPgpValue: this.EffluxPgpValue,
                            EffluxPgpInput2: this.EffluxPgpInput2,
                            EffluxPgpValue2: this.EffluxPgpValue2,
                            EffluxMATE1Input: this.EffluxMATE1Input,
                            EffluxMATE1Value: this.EffluxMATE1Value,
                            EffluxMATE1Input2: this.EffluxMATE1Input2,
                            EffluxMATE1Value2: this.EffluxMATE1Value2,
                            EffluxMATE2KInput: this.EffluxMATE2KInput,
                            EffluxMATE2KValue: this.EffluxMATE2KValue,
                            EffluxMATE2KInput2: this.EffluxMATE2KInput2,
                            EffluxMATE2KValue2: this.EffluxMATE2KValue2,
                            UptakeComment: this.EffluxComment,
                            Comment: this.UptakeComment,
                            //SubOATP1B1:this.SubOATP1B1,
                            //SubOATP1B3:this.SubOATP1B3,
                            //SubOAT1 :this.SubOAT1,
                            // SubOAT3:this.SubOAT3,
                            // SubOAT2:this.SubOAT2,
                            // SubMATE1:this.SubMATE1,
                            // SubMATE2K :this.SubMATE2K,
                            // SubBCRP :this.SubBCRP,
                            // SubPGP :this.SubPGP,
                            ComOATP1B1: this.ComOATP1B1,
                            ComOATP1B3: this.ComOATP1B3,
                            ComOAT1: this.ComOAT1,
                            ComOAT3: this.ComOAT3,
                            ComOAT2: this.ComOAT2,
                            ComMATE1: this.ComMATE1,
                            ComMATE2K: this.ComMATE2K,
                            ComBCRP: this.ComBCRP,
                            ComPGP: this.ComPGP,


                            SubstrateBCRPNew: this.SubstrateBCRPNew,
                            SubstrateBCRPOATP1B1: this.SubstrateBCRPOATP1B1,
                            SubstrateBCRPOATP1B3: this.SubstrateBCRPOATP1B3,
                            SubstrateOAT1: this.SubstrateOAT1,
                            SubstrateOAT3: this.SubstrateOAT3,
                            SubstrateOAT2: this.SubstrateOAT2,
                            SubstrateMATE1: this.SubstrateMATE1,
                            SubstrateMATE2K: this.SubstrateMATE2K,
                            SubstratePGP: this.SubstratePGP,
                            UptakeURL:
                            {
                                'Description': "Click Here",
                                'Url': this.UptakeURL
                            },
                            EffluxURL:
                            {
                                'Description': "Click Here",
                                'Url': this.EffluxURL
                            },
                            VictimURL:
                            {
                                'Description': "Click Here",
                                'Url': this.VictimURL
                            }
                        }, res.d.GetContextWebInformation.FormDigestValue)
                            .subscribe(
                                (dataresponse) => {
                                    // console.log(dataresponse.length);
                                    if (dataresponse.length === 0) {
                                        this.toastr.error('Problem creating record. Please contact IT.');
                                        //this.error = 'Problem creating record. Please contact IT.';
                                        this.message = '';
                                    } else {
                                        // console.log('Inside else');
                                        // console.log(dataresponse.d);
                                        this.TransporterData = dataresponse.d;
                                        this.toastr.success('Added new Transporter Data');
                                        this.RecordAdded.emit(this.TransporterData);
                                        //this.message = 'Added new Transporter Data';
                                        this.error = '';
                                        this.createNew = false;
                                    }
                                },
                                (error) => {
                                    this.toastr.error('Problem creating record. Please contact IT.');
                                    //this.error = 'Problem creating record. Please contact IT.';
                                    this.message = '';
                                });
                    } else {
                        this.toastr.error('Problem creating record. Please contact IT.');
                        //this.error = 'Problem creating record. Please contact IT.';
                        this.message = '';
                    }
                },
                (error) => {
                    this.toastr.error('Problem creating record. Please contact IT.');
                    //this.error = 'Problem creating record. Please contact IT.';
                    this.message = '';
                });
        }
    }

    editRecord(): void {
        // console.log('editRecord' + this.createNew);
        // console.log(this.Compound);
        // console.log(this.Program);
        if (this.Compound !== '' && this.Program !== '') {
            this._appService.getService().subscribe(
                (res) => {
                    // console.log(res.length);
                    // console.log(res);
                    if (res.length !== 0) {
                        // console.log('res' + res.d.GetContextWebInformation.FormDigestValue);
                        // console.log('Inside Click');
                        const url = '/_api/web/lists/getbytitle(\'TransporterData\')/items(' + this.TransporterData.Id + ')';
                        this._appService.editDatatoList(url, {
                            UptakeOATP1B3Input: this.UptakeOATP1B3Input,
                            UptakeOATP1B3Value: this.UptakeOATP1B3Value,
                            UptakeOATP1B3Input2: this.UptakeOATP1B3Input2,
                            UptakeOATP1B3Value2: this.UptakeOATP1B3Value2,
                            UptakeOATP1B1Input: this.UptakeOATP1B1Input,
                            UptakeOATP1B1Value: this.UptakeOATP1B1Value,
                            UptakeOATP1B1Input2: this.UptakeOATP1B1Input2,
                            UptakeOATP1B1Value2: this.UptakeOATP1B1Value2,
                            UptakeOAT1Input: this.UptakeOAT1Input,
                            UptakeOAT1Value: this.UptakeOAT1Value,
                            UptakeOAT1Input2: this.UptakeOAT1Input2,
                            UptakeOAT1Value2: this.UptakeOAT1Value2,
                            UptakeOAT3Input: this.UptakeOAT3Input,
                            UptakeOAT3Value: this.UptakeOAT3Value,
                            UptakeOAT3Input2: this.UptakeOAT3Input2,
                            UptakeOAT3Value2: this.UptakeOAT3Value2,
                            UptakeOCT2Input: this.UptakeOCT2Input,
                            UptakeOCT2Value: this.UptakeOCT2Value,
                            UptakeOCT2Input2: this.UptakeOCT2Input2,
                            UptakeOCT2Value2: this.UptakeOCT2Value2,
                            EffluxBCRPInput: this.EffluxBCRPInput,
                            EffluxBCRPValue: this.EffluxBCRPValue,
                            EffluxBCRPInput2: this.EffluxBCRPInput2,
                            EffluxBCRPValue2: this.EffluxBCRPValue2,
                            EffluxPgpInput: this.EffluxPgpInput,
                            EffluxPgpValue: this.EffluxPgpValue,
                            EffluxPgpInput2: this.EffluxPgpInput2,
                            EffluxPgpValue2: this.EffluxPgpValue2,
                            EffluxMATE1Input: this.EffluxMATE1Input,
                            EffluxMATE1Value: this.EffluxMATE1Value,
                            EffluxMATE1Input2: this.EffluxMATE1Input2,
                            EffluxMATE1Value2: this.EffluxMATE1Value2,
                            EffluxMATE2KInput: this.EffluxMATE2KInput,
                            EffluxMATE2KValue: this.EffluxMATE2KValue,
                            EffluxMATE2KInput2: this.EffluxMATE2KInput2,
                            EffluxMATE2KValue2: this.EffluxMATE2KValue2,
                            UptakeComment: this.EffluxComment,
                            Comment: this.UptakeComment,
                            // * Pahse II */
                            SubstrateBCRPNew: this.SubstrateBCRPNew,
                            SubstrateBCRPOATP1B1: this.SubstrateBCRPOATP1B1,
                            SubstrateBCRPOATP1B3: this.SubstrateBCRPOATP1B3,
                            SubstrateOAT1: this.SubstrateOAT1,
                            SubstrateOAT3: this.SubstrateOAT3,
                            SubstrateOAT2: this.SubstrateOAT2,
                            SubstrateMATE1: this.SubstrateMATE1,
                            SubstrateMATE2K: this.SubstrateMATE2K,
                            SubstratePGP: this.SubstratePGP,
                            //SubOATP1B1:this.SubOATP1B1,
                            //SubOATP1B3:this.SubOATP1B3,
                            //SubOAT1 :this.SubOAT1,
                            // SubOAT3:this.SubOAT3,
                            // SubOAT2:this.SubOAT2,
                            // SubMATE1:this.SubMATE1,
                            // SubMATE2K :this.SubMATE2K,
                            // SubBCRP :this.SubBCRP,
                            // SubPGP :this.SubPGP,
                            ComOATP1B1: this.ComOATP1B1,
                            ComOATP1B3: this.ComOATP1B3,
                            ComOAT1: this.ComOAT1,
                            ComOAT3: this.ComOAT3,
                            ComOAT2: this.ComOAT2,
                            ComMATE1: this.ComMATE1,
                            ComMATE2K: this.ComMATE2K,
                            ComBCRP: this.ComBCRP,
                            ComPGP: this.ComPGP,
                            UptakeURL:
                            {
                                'Description': "Click Here",
                                'Url': this.UptakeURL
                            },
                            EffluxURL:
                            {
                                'Description': "Click Here",
                                'Url': this.EffluxURL
                            },
                            VictimURL:
                            {
                                'Description': "Click Here",
                                'Url': this.VictimURL
                            }
                        }, res.d.GetContextWebInformation.FormDigestValue)
                            .subscribe(
                                (dataresponse) => {
                                    // console.log('Inside else');
                                    // console.log(dataresponse);
                                    this.toastr.success('Modified Transporter Data');
                                    //this.message = 'Modified Transporter Data';
                                    this.error = '';
                                },
                                (error) => {
                                    this.toastr.error('Problem creating record. Please contact IT.');
                                    //this.error = 'Problem creating record. Please contact IT.';
                                    this.message = '';
                                });
                    } else {
                        this.toastr.error('Problem creating record. Please contact IT.');
                        //this.error = 'Problem creating record. Please contact IT.';
                        this.message = '';
                    }
                },
                (error) => {
                    this.toastr.error('Problem creating record. Please contact IT.');
                    //this.error = 'Problem creating record. Please contact IT.';
                    this.message = '';
                });
        }
    }
}
