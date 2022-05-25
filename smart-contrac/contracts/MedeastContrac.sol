// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract MedeastMedicenses{
    /*
    This struct contans necesory filds which the manofactur will fill
    address Manufacturat -> this will hold the addras of the Manafactur.
    uint BachNumber -> this will hold the bach number of the medicans.
    uint Weight -> this will hold the total weight of the pakage.
    uint deployDate -> this will hold the date whean the contract was made.
    uint MfgDate -> this will hold the manafatur date of the medicans.
    uint ExpDate -> this will hold the expire date of the medicans.
    uint PricePerPack -> this will hold the price of the indavisul medicans in the pakages.
    uint NumberOfPakages -> this will hold the total number of pakeges of medicans in the box.
    string MfgLicNo -> thos holds the lisance of the mafactur.
    string CompanyName -> this will hold the name ofn the compane.
    string MedicineName -> this will hold the name of the medicins.
    */
    struct Medicine{
        bool initialized;
        uint BachNumber;
        uint Weight;
        uint deployDate;
        uint MfgDate;
        uint ExpDate;
        uint PricePerPack;
        uint NumberOfPakages;
        string MfgLicNo;
        string CompanyName;
        string MedicineName;
    }

    /*
    hear we are making objacts of the struct
    in this case 
    medicines -> object of Medicine
    */ 
    Medicine public medicines;

    /*
    this constructor is just inatising defalt values
    for medicines -> object of Medicine
        iotdata -> object of IotData
    */
    constructor(){
        medicines.initialized = false;
        medicines.BachNumber = 0;
        medicines.Weight = 0;
        medicines.deployDate = 0;
        medicines.MfgDate = 0;
        medicines.ExpDate = 0;
        medicines.PricePerPack = 0;
        medicines.NumberOfPakages = 0;
        medicines.MfgLicNo = "None";
        medicines.CompanyName = "None";
        medicines.MedicineName = "None";
    }

    /*
    this function will set data which will be send by the jascript.
    */
    function setData(
        uint _BachNumber,
        uint _Weight,
        uint _deployDate,
        uint _MfgDate,
        uint _ExpDate,
        uint _PricePerPack,
        uint _NumberOfPakages,
        string memory _MfgLicNo,
        string memory _CompanyName,
        string memory _MedicineName
    ) public {
        medicines.initialized = true;
        medicines.BachNumber = _BachNumber;
        medicines.Weight = _Weight;
        medicines.deployDate = _deployDate;
        medicines.MfgDate = _MfgDate;
        medicines.ExpDate = _ExpDate;
        medicines.PricePerPack = _PricePerPack;
        medicines.NumberOfPakages = _NumberOfPakages;
        medicines.MfgLicNo = _MfgLicNo;
        medicines.CompanyName = _CompanyName;
        medicines.MedicineName = _MedicineName;
    }

    /*
    this function will get the datya from the blockchane and we 
    will use javascript to pull the data.
    */
    function getData() public view returns(
        uint, uint, uint, uint, uint, uint, uint,
        string memory,
        string memory,
        string memory
    ){
    return (
        medicines.BachNumber,
        medicines.Weight,
        medicines.deployDate,
        medicines.MfgDate,
        medicines.ExpDate,
        medicines.PricePerPack,
        medicines.NumberOfPakages,
        medicines.MfgLicNo,
        medicines.CompanyName,
        medicines.MedicineName
        );
    }
}