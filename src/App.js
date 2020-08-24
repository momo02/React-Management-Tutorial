import React from "react";

//components 폴더에 있는 Customer 컴포넌트를 불러와서 App 컴포넌트안에서 출력
import Customer from "./components/Customer";
import "./App.css";

const customer = {
  name: "모모",
  birthday: "930909",
  gender: "여자",
  job: "개발자",
};

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
