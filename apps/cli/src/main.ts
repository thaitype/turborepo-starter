import { shared } from "@acme/shared";
import { add } from "./add";

console.log("Hello World " + add(1, 2) + " " + shared());

console.log("ARGS: ", process.argv);
