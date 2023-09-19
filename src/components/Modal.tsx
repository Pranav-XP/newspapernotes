import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, onCloseRequest }) => {
  const { data: sessionData } = useSession();
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");

  const { refetch: refetchNotes } = api.note.getAll.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
    },
  );

  const createNoteMutation = api.note.create.useMutation();

  const handleCreateNote = async () => {
    try {
      await createNoteMutation.mutateAsync({
        heading: heading,
        text: text,
      });
      setHeading("");
      setText("");
      onCloseRequest(Modal);
      void refetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-modalBg p-2 backdrop-blur ">
      <div className="flex flex-col justify-start rounded-md bg-bodyColor p-10">
        <span className="font-semibold">Title:</span>
        <div>
          <input
            className="rounded-md border-2 border-gray-400 p-1"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <span className="font-semibold">Note:</span>
        <div>
          <textarea
            className=" rounded-md border-2 border-gray-400  p-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-between gap-1">
          <span
            onClick={onCloseRequest}
            className="pt-1 font-black text-red-500 active:text-red-600"
          >
            <AiFillCloseCircle size={30}></AiFillCloseCircle>
          </span>
          <div
            className="mt-2 h-fit w-fit place-self-center rounded-lg bg-neutral-600 p-1 font-semibold text-bodyColor hover:cursor-pointer active:bg-neutral-700"
            onClick={handleCreateNote}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
