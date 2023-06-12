import { PortalToModal } from "./components/PortalToModal";
import { Board } from "./components/Board";
import { WidthSmall } from "./components/WidthSmall";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";

function App() {
  const { modal } = useContext(MainContext);
  return (
    <>
      {window.innerWidth > 960 && (
        <>
          <Board />
          {modal && (
            <PortalToModal/>
          )}
        </>
      )}

      {window.innerWidth < 960 && (
        <>
          <WidthSmall />
        </>
      )}
    </>
  );
}

export default App;
