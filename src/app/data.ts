export class Program {
    Id: string;
    Title: string;
}

export class Compound {
    Id: string;
    Title: string;
    Program: Program;
}

export class TransporterData {
    Id: string;
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
    // UptakeOAT2Input: string;
    // UptakeOAT2Value: string;
    // UptakeOAT2Input2: string;
    // UptakeOAT2Value2: string;
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
    Comment: string;
    UptakeComment: string;
    // SubstrateBCRP: string;
    // CommentBCRP: string;
    // SubstratePGP: string;
    // CommentPGP: string;
    SubstrateBCRPOATP1B1: string;
    SubstrateBCRPOATP1B3: string;
    SubstrateOAT1: string;
    SubstrateOAT3: string;
    SubstrateOAT2: string;
    SubstrateMATE1: string;
    SubstrateMATE2K: string;
    SubstrateBCRPNew: string;
    SubstratePGP: string;


    SubOATP1B1: string;
    SubOATP1B3: string;
    SubOAT1: string;
    SubOAT3: string;
    SubOAT2: string;
    SubMATE1: string;
    SubMATE2K: string;
    SubBCRP: string;
    SubPGP: string;


    ComOATP1B1: string;
    ComOATP1B3: string;
    ComOAT1: string;
    ComOAT3: string;
    ComOAT2: string;
    ComMATE1: string;
    ComMATE2K: string;
    ComBCRP: string;
    ComPGP: string;

    vitimUptakeComment: string;
    vitimEffluxComment: string;
    UptakeURL: any;
    EffluxURL: any;
    VictimURL: any;
}
