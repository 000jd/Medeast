// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract MedeastIOT{

    /*
     this is struct contans necesory filds for the geolocation and the tempratur of the 
     medican pakge which we will get from thr IOT device ,
     string longatude -> this will store the longatude of thr pakage
     string latatude -> this will store the latatude of the pakage 
     uint tempratur -> this will store the tempratur of the pakage
     uint humedate -> this will store the humedate of the pakage
    */
    struct IotData{
        string longatude;
        string latatude;
        uint tempratur;
        uint humedate;
    }

    /*
    hear we are making objacts of the struct
    in this case 
    iotdata -> object of IotData
    */
    IotData public iotdata;
    
     /*
    this constructor is just inatising defalt values
    for iotdata -> object of IotData
    */
    constructor(){
        iotdata.longatude = "None";
        iotdata.latatude = "None";
        iotdata.tempratur = 0;
        iotdata.humedate = 0;
    }

     /*
        this function set data in iot data structor,
    */
    function setIotData(
        string memory _longatude,
        string memory _latatude,
        uint _tempratur,
        uint _humedate
    )public{
        iotdata.longatude = _longatude;
        iotdata.latatude = _latatude;
        iotdata.tempratur = _tempratur;
        iotdata.humedate = _humedate;
    }


    /*
    this function wull  return geolacution and tempratur from the
    blockchane.
    */
    function getIotData() public view returns(
        string memory,
        string memory,
        uint,
        uint
    ){
        return(
            iotdata.longatude,
            iotdata.latatude,
            iotdata.tempratur,
            iotdata.humedate
        );
    }
}