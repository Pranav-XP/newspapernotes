import React, { useState } from "react";
import Modal from "./Modal";
import Feed from "./Feed";

const Content: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalCloseRequest = (): void => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="flex flex-col">
      <div className="mt-2 h-fit w-fit place-self-start rounded-lg bg-neutral-500 p-1 font-semibold text-bodyColor hover:cursor-pointer active:bg-neutral-700">
        <div onClick={handleClick}>Create Note</div>
      </div>
      <Feed></Feed>
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest}></Modal>
    </section>
  );
};

export default Content;
