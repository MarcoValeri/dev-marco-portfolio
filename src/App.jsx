import { Route, Routes } from 'react-router';

import Home from './pages/Home/Home';

import './assets/scss/main.scss';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default App;