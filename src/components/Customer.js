import React from "react"; //react 라이브러리를 import.

//Customer 클래스 정의
//React.Component 는 일종의 라이브러리이자 클래스
class Customer extends React.Component {
  render() {
    //props는 기본적으로 React.Component에 내장되어있어 this.props로 사용.
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          image={this.props.image}
          name={this.props.name}
        />
        <CustomerInfo
          birthday={this.props.birthday}
          gender={this.props.gender}
          job={this.props.job}
        />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.birthday}</p>
      </div>
    );
  }
}

//다른 컴포넌트에서 현재 만들고 있는 Customer 컴포넌트를 사용할수있도록 export.
export default Customer;
