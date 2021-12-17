import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@comfy.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Gyasuddin',
    email: 'gyasuddin@comfy.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Laksh Sir',
    email: 'lakshsir@comfy.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
