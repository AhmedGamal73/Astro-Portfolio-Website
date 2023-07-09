import { map } from "nanostores";

export let userDate = map({});

export function addUserDate(data) {
  userDate = data;
  console.log(userDate);
}
