import Footer from "../components/Footer";
import Header from "../components/Header";
import MainA from "../components/MainA";
import MainB from "../components/MainB";
import Work from '../components/Work';

function Home() {
  return (
    <div className="Home">
      <Header />
      <MainA />
      <MainB />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
