import * as S from "./styled";
import IcomeImg from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";

import { useTransactions } from "../hooks/useTransactions";

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <>
      <S.Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={IcomeImg} alt="Entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.deposits)}
          </strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={Outcome} alt="Saidas" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.withdraws)}
          </strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={Total} alt="Total" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}
          </strong>
        </div>
      </S.Container>
    </>
  );
};
