import React from "react";

//components 폴더에 있는 Customer 컴포넌트를 불러와서 App 컴포넌트안에서 출력
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "박모모",
    birthday: "930909",
    gender: "여자",
    job: "개발자",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "김모모",
    birthday: "930909",
    gender: "남자",
    job: "디자이너",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이모모",
    birthday: "930909",
    gender: "여자",
    job: "퍼블리셔",
  },
];

function App() {
  return (
    // 요소가 여러개이므로 반드시 <div> 와 같은 루트 태그로 감싸준다.
    /*  <div>
      <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      />
    </div> */
    <div>
      {
        //map 함수를 이용해 특정배열의 각 원소에 접근.
        //customers 배열객체를 순환하면서 c변수로 하나씩 읽는다.
        customers.map((c) => {
          return (
            <Customer
              // *map을 사용할 경우에는 반드시 key속성을 넣어서 각 요소를 구분해줘야함
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
