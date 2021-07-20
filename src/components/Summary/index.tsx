import * as S from "./styled";
import IcomeImg from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";

export const Summary = () => {
  return (
    <>
      <S.Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={IcomeImg} alt="Entradas" />
          </header>
          <strong>R$1000.00</strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={Outcome} alt="Saidas" />
          </header>
          <strong> - R$500.00</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={Total} alt="Total" />
          </header>
          <strong>R$500.00</strong>
        </div>
      </S.Container>
    </>
  );
};
