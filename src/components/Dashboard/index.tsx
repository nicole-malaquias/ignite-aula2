import * as S from "./styled";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export const Dashboard = () => {
  return (
    <>
      <S.Container>
        <Summary />
        <TransactionsTable />
      </S.Container>
    </>
  );
};
