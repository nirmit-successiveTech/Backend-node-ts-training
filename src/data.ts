
export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com"
  },
  {
    id: 2,
    name: "Bob",
    age: 34,
    email: "bob@example.com"
  },
  {
    id: 3,
    name: "Charlie",
    age: 25,
    email: "charlie@example.com"
  }
];
