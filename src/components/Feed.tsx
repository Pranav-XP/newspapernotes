import React from "react";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Feed = () => {
  const { data: sessionData } = useSession();
  const { data: notes } = api.note.getAll.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
    },
  );
  return (
    <>
      <div className="grid grid-cols-2 gap-5 p-5 sm:grid sm:grid-cols-3 sm:justify-evenly">
        {notes
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(0, 1)
          .map((note) => (
            <div
              className="col-span-2 my-5 rounded-sm border-y-2 border-neutral-700 bg-neutral-50 pb-10 sm:col-span-3"
              key={note.id}
            >
              <h1 className="pb-3 pl-2 pt-2 text-2xl font-bold">
                {note.heading}
              </h1>
              <p className="pb-10 pl-4 pt-1">{note.text}</p>
            </div>
          ))}

        {notes
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(1, 2)
          .map((note) => (
            <div
              className="col-span-2 my-5 rounded-sm border-y-2 border-neutral-700 bg-neutral-50 pb-10 sm:row-span-2"
              key={note.id}
            >
              <h1 className="pb-3 pl-2 pt-2 text-xl font-bold">
                {note.heading}
              </h1>
              <p className="pb-5 pl-4">{note.text}</p>
            </div>
          ))}

        {notes
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(2, 3)
          .map((note) => (
            <div
              className="col-span-2 my-5 rounded-sm border-y-2 border-neutral-700 bg-neutral-50 pb-10 sm:col-span-1 sm:row-span-3"
              key={note.id}
            >
              <h1 className="pb-3 pl-2 pt-2 text-xl font-bold">
                {note.heading}
              </h1>
              <p className="pl-4">{note.text}</p>
            </div>
          ))}

        {notes
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(3, 4)
          .map((note) => (
            <div
              className="col-span-2 my-2 rounded-sm border-y-2 border-neutral-700 bg-neutral-50 pb-10"
              key={note.id}
            >
              <h1 className="pb-3 pl-2 pt-2 text-xl font-bold">
                {note.heading}
              </h1>
              <p className="pl-4">{note.text}</p>
            </div>
          ))}

        {notes
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(4, notes.length)
          .map((note) => (
            <div
              className="my-5 rounded-sm border-y-2 border-neutral-700 bg-neutral-50 pb-10"
              key={note.id}
            >
              <h1 className=" pb-3 pl-2 pt-2 text-xl font-bold">
                {note.heading}
              </h1>
              <p className="pl-4 text-base">{note.text}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Feed;
