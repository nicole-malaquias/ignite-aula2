import Logo from "../../assets/logo.svg";
import * as S from "./styled";

interface HeaderProps {
  onHandleOpenModal: () => void;
}
export const Header = ({ onHandleOpenModal }: HeaderProps) => {
  return (
    <>
      <S.Container>
        <S.Content>
          <img src={Logo} alt="dt money" />
          <button onClick={onHandleOpenModal}>Nova transação</button>
        </S.Content>
      </S.Container>
    </>
  );
};
