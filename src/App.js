import { Download } from "./pages/Download";
import "./App.css";
import { Home } from "./pages/Home";
import { NFT } from "./pages/NFT";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Moduler } from "./pages/Moduler";
import { WebBrowser } from "./pages/WebBrowser";
import { Focused } from "./pages/Focused";
import { DigitalAssets } from "./pages/DigitalAssets";
import { ManageToken } from "./pages/ManageToken";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/NFT" element={<NFT />} />
          <Route path="/Moduler" element={<Moduler />} />
          <Route path="/WebBrowser" element={<WebBrowser />} />
          <Route path="/Focused" element={<Focused />} />
          <Route path="/DigitalAssets" element={<DigitalAssets />} />
          <Route path="/ManageToken" element={<ManageToken />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
