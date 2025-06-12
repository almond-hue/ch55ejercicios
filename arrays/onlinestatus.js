/*Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

1.  definir cuando no hay nadie

*/


function onlineStatus(users) {
  const count = users.length;

  if (count === 0) {
    return 'Nadie esta conectato';
  } else if (count === 1) {
    return `${users[0]} esta en línea`;
  } else if (count === 2) {
    return `${users[0]} y ${users[1]} están en línea`;
  } else {
    return `${users[0]}, ${users[1]} y ${count - 2} persona más en línea`;
  }
}

console.log(onlineStatus([])); 

console.log(onlineStatus([' nat'])); 

console.log(onlineStatus(['nat', 'mafer'])); 

console.log(onlineStatus(['nat', 'mafer', 'diego'])); 



/*NOTAS*/
/*la función es onlineStatus y su array es users
el count calcula cuantos usuarios hay en el array*/
