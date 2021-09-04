import React from 'react';


function Test(data){
    const mapData = {
        "deviceData":[
            {
                "name":"iPad Pro",
                "RAM":6,
                "HomeButton":false,
                "TouchID":"No",
                "FaceID":"Yes"
            },{
                "name":"iPhone Xs",
                "RAM":4,
                "HomeButton":false,
                "TouchID":"No",
                "FaceID":"Yes"
            }
        ]
    }

    return(
        <div>
            {
                mapData.deviceData.map((appleDevice)=>{
                    console.log(JSON.stringify(appleDevice))

                    return(
                        <div>
                            기종: {appleDevice.name}<br></br>
                            램: {appleDevice.RAM}<br></br>
                            홈버튼: {((appleDevice.HomeButton === true)?"있음":"없음")}<br></br>
                            터치 ID: {appleDevice.TouchID}<br></br>
                            페이스 ID: {appleDevice.FaceID}<br></br><br></br>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Test;