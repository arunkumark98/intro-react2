import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Mos from "./Mos";
import Mmfs from "./Mmfs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Mos />
    <Mmfs />
  </StrictMode>
);
