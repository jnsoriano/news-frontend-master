import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import useIsMobile from "./utils/useIsMobile";
import Topic from "./components/Topic/Topic";
function App() {
    const isMobile = useIsMobile();
    return (
        <div className={isMobile ? "mobile" : "container"}>
            <Header />
            <Home />
            <div className="topics">
                <Topic />
            </div>
        </div>
    );
}

export default App;
