import * as S from "./styled";
import { useEffect } from "react";
import { api } from "../../servers/api";

export const TransactionsTable = () => {
  useEffect(() => {
    api
      .get("/transactions")
      .then((data) => console.log("o que veio do response", data))
      .catch((_) => console.log(_));
  }, []);

  return (
    <>
      <S.Container>
        <table>
          <thead>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </thead>
          <tbody>
            <tr>
              <td>Desenvolvimento de webSite</td>
              <td className="deposit">R$12000</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td className="withdraw"> - R$1100</td>
              <td>Casa</td>
              <td>17/02/2021</td>
            </tr>
          </tbody>
        </table>
      </S.Container>
    </>
  );
};
