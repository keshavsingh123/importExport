import React from "react";
import ReactDOM from "react-dom";
import pi, {doublepi,triplepi} from "./math.js";

/*
we can write as
import * from "./math.js";
*/

ReactDOM.render(
<ul>
  <li>{pi}</li>
  <li>{doublepi()}</li>
  <li>{triplepi()}</li></ul>,
  document.getElementById("root")
  /* we can write also

import * as from "./math.js"
   <li>{pi.default}</li>
  <li>{pi.doublepi()}</li>
  <li>{pi.triplepi()}</li></ul>,
  */
);
