import * as S from "./styled";
import { useContext } from "react";
import { TransactionsContext } from "../hooks/useTransactions";

export const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext);

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
            {transactions.map((item, index) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.amount)}
                </td>
                <td>{item.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(item.amount)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.Container>
    </>
  );
};
