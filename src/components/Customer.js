import React from "react"; //react 라이브러리를 import.

//Customer 클래스 정의
//React.Component 는 일종의 라이브러리이자 클래스
class Customer extends React.Component {
  render() {
    //props는 기본적으로 React.Component에 내장되어있어 this.props로 사용.
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

//다른 컴포넌트에서 현재 만들고 있는 Customer 컴포넌트를 사용할수있도록 export.
export default Customer;
