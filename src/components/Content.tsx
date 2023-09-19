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
        <div className="mt-2 h-fit w-fit place-self-start rounded-lg border-2 border-zinc-300 bg-zinc-800 p-1 font-semibold text-bodyColor hover:cursor-pointer active:bg-neutral-700">
          <div onClick={handleClick}>Create Note</div>
        </div>
        <div className="mt-2 flex w-fit items-center justify-evenly rounded-md border-2 border-zinc-300 bg-zinc-800 p-0.5 font-semibold text-bodyColor hover:cursor-pointer">
          <button onClick={() => void signOut()}>Sign Out</button>
        </div>
      </div>

      <Feed></Feed>
      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest}></Modal>
    </section>
  );
};

export default Content;
