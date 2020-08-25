import React from "react";

//components 폴더에 있는 Customer 컴포넌트를 불러와서 App 컴포넌트안에서 출력
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    //너비는 적어도 1090px 이상. 이 이하로 화면의 크기가 줄어들면 테이블 자체의 너비 줄어들지않고 가로 스크롤바 생성
    minWidth: 1080,
  },
});

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

function App(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);

//cf) meterial-ui table component demo Site : https://material-ui.com/components/tables/
