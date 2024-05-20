import { Route, Routes } from 'react-router';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import './assets/scss/main.scss';
import Contact from './pages/Contact/Contact';

const App = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default App;