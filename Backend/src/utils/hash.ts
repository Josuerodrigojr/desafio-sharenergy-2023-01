import bcrypt from 'bcrypt'


export const bcry={
make: (password:string)=>{
 return bcrypt.hash(password,10)

},

compare: (password:string, passwordHash:string)=>{
  return bcrypt.compare(password, passwordHash)
}}

