import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./components/Section";
import ClientesAvaliacao from "./components/ClientesAvaliacao";
import FeatureMotos from "./components/FeatureMotos";


function App() {
  return (
    <>
      <Header/>
      <Banner />
      <Section />
      <FeatureMotos />
      <ClientesAvaliacao />
      <Footer />
    </>
  );
}

export default App;
