import data from "../testdata/orange.json" assert { type: "json" };
import { orange } from "../POM/orange.page"; 


export async function loginAs(page, role) {
  const user = data.find(u => u.role === role);

  if (!user) throw new Error(`Role not found: ${role}`);

  const objlogin = new orange(page);
  await objlogin.goto();
  await objlogin.login(user.username, user.password);

  return user;
}