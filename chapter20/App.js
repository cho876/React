import React from 'react';

class App extends React.Component{
  render(){
    /* if문 사용하기
    if(true){
      return <div>It's True</div>
    }else{
      return <div>It's False</div>
    }*/

    return(
      <div>
        {/* 삼항연산자 사용하기 */}
        {
          1===2 ? <div>It's true</div> : <div>It's False</div>
        }
        {/* && 연산자 사용하기 */}
        {
          1===1 && <div>It's True</div>
        }
      </div>
    );
  }
}

export default App;
