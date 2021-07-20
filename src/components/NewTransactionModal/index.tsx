import { FormEvent, useState } from "react";

import Modal from "react-modal";
import * as S from "./styled";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = (event: FormEvent) => {
    alert("oi");
    event.preventDefault();
    console.log("o valor do input", { title, category });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="fechar modal" />
      </button>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar</h2>
        <form>
          <input
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Valor"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />

          <S.TransactionTypeContainer>
            <S.RadioBox
              isActive={type === "deposit"}
              type="button"
              onClick={() => setType("deposit")}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </S.RadioBox>

            <S.RadioBox
              isActive={type === "withdraw"}
              type="button"
              onClick={() => setType("withdraw")}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
            </S.RadioBox>
          </S.TransactionTypeContainer>

          <input
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </S.Container>
    </Modal>
  );
};
