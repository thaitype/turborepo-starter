import { shared } from "@repo/shared";
import { add } from "./add";

console.log("Hello World " + add(1, 2) + " " + shared());

console.log("ARGS: ", process.argv);
