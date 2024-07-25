
import Footer from "./components/Footer/Footer";
import Button from "./components/General/Button";
import DarkLightButthon from "./components/General/DarkLightButton";
import DarkLightProvider from "./components/General/DarkLightProvider";
import HomeBanner from "./components/General/HomeBanner";


function App() {

  return (
    <>
    <DarkLightProvider >
        <HomeBanner></HomeBanner>
        <Button label={"hello"} 
            disabled={false} 
            onClick={()=>{}}></Button>
        <DarkLightButthon></DarkLightButthon>
        <Footer></Footer>
    </DarkLightProvider>

        
    </>

  );
}

export default App;
