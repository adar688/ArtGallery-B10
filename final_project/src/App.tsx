
import Button from "./components/General/Button";
import DarkLightButthon from "./components/General/DarkLightButton";
import HomeBanner from "./components/General/HomeBanner";

function App() {

  return (
    <>
        <HomeBanner></HomeBanner>
        <Button label={"hello"} 
            disabled={false} 
            onClick={()=>{}}></Button>
        <DarkLightButthon></DarkLightButthon>
    </>

  );
}

export default App;
