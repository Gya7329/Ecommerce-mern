import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@comfy.com",
    password: bcryptjs.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Gyasuddin",
    email: "gyasuddin@comfy.com",
    password: bcryptjs.hashSync("12345", 10),
  },
  {
    name: "laksh sir",
    email: "lakshsir@comfy.com",
    password: bcryptjs.hashSync("12345", 10),
  },
];
export default users;
