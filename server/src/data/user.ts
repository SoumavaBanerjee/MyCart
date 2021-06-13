import bcrypt from "bcryptjs";

export const mockUsers = [
  {
    name: "Soumava Banerjee",
    email: "soumava.rivu@gmail.com",
    // that's not my true password btw
    password: bcrypt.hashSync("frost1234", 10),
    isAdmin: true,
  },
  {
    name: "Frost Byte",
    email: "frost.byte@xyz.com",
    password: bcrypt.hashSync("frost1234", 10),
  },
  {
    name: "James Moriarty",
    email: "moriarty.story@novel.com",
    password: bcrypt.hashSync("frost1234", 10),
  },
  {
    name: "test",
    email: "test.email@gmail.com",
    password: bcrypt.hashSync("frost1234", 10),
  },
];
