import { access, constants } from 'node:fs';
const file = 'a.txt'
access(file, constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'does not exist' : 'exist'}`); 

})