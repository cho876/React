import React from 'react';


function Test(data){
    console.log(JSON.stringify(data.myData))
    return(
        <div>
            {data.myData}
        </div>
    );
}

export default Test;