import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Header } from "./components/Header";

export function App() {
  const [isOpenModalTransactions, setIsOpenModalTransactions] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModalTransactions(true);
  };
  const handleCloseModal = () => {
    setIsOpenModalTransactions(false);
  };
  return (
    <>
      <Header onHandleOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isOpenModalTransactions}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}
