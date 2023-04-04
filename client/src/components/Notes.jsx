import React from 'react';
import useAuth from '../hooks/useAuth';

const Notes = () => {
  const { auth } = useAuth();

  console.log('Notes:', auth?.user);

  return (
    <section className='p-6 flex flex-col gap-5 justify-center'>
      <p>NEW NOTE</p>
      <ul className='notes flex gap-11 flex-wrap justify-center sm:justify-start'>
        {auth?.user?.notes.map(note => (
          <li className='note h-32 w-32 bg-zinc-900' key={note._id}>
            {note.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notes;
