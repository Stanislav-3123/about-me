import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import MobileHeader from "./components/Header/MobileHeader.tsx";
import Contacts from "./Pages/Contacts/Contacts.tsx";
import Policies from "./Pages/Policies/Policies.tsx";
import Cookies from "./components/Cookies/Cookies.tsx";
import Terms from "./Pages/Terms/Terms.tsx";

function App() {
    return (
        <Wrapper>
            <Cookies/>
            <Header/>
            <MobileHeader/>
            <Routes>
                <Route path='/expectstar-limitada' element={<Home/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/policies' element={<Policies/>}/>
                <Route path='/terms' element={<Terms/>}/>
            </Routes>
            <Footer/>
        </Wrapper>
    )
}

export default App
