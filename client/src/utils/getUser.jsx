import axios from 'axios';

export default async function getUser() {
  const res = await axios.get('http://localhost:3000/api/v1/users/notes');
  if (res.status !== 'success') throw new Error('GET USER ERROR');

  console.log(res);
  return res.data;

  // return {
  //   id: 123456,
  //   token: 'abcdefghijk',
  //   notas: ['nota1', 'nota2', 'nota3'],
  // };
}
