import { createPortal } from "react-dom";
import { Modal } from "./Modal";
const modal = document.getElementById("modal");

export const PortalToModal = () => {
  return createPortal(<Modal/>, modal)
};
