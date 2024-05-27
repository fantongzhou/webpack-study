console.log("Hello World!");
import { log, c } from "./log";
import { log2 } from "./log2";
document.getElementsByTagName('html')[0].addEventListener('click', async () => {
  let { test } = await import('./test');
  console.log(test)
})
log(); 
log2();
console.log('end');