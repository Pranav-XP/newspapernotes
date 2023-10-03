import React, { useState } from "react";
import Modal from "./Modal";
import Feed from "./Feed";
import { signOut } from "next-auth/react";

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
      <div className="flex flex-row justify-evenly p-3">
        <div className="mt-2 h-fit w-full place-self-start rounded-lg border border-zinc-400 bg-zinc-800 p-1 text-center font-semibold  text-white hover:cursor-pointer active:bg-neutral-700 md:w-1/2">
          <div onClick={handleClick}>Create Note</div>
        </div>
      </div>

      <Feed></Feed>
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest}></Modal>
    </section>
  );
};

export default Content;
