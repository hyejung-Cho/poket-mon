import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Works } from '../pages/Works';
import { Work } from '../pages/Work';
import Counter from '../pages/Counter';
import Test from '../pages/Test';
import TestRef from '../pages/TestRef';
import { PoketMonShop } from '../pages/PoketMonShop';
import { PoketMonShop2 } from '../pages/PoketMonShop2';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="works" element={<Works />} />
                <Route path="work/:id" element={<Work />} />
                <Route path="counter" element={<Counter />} />
                <Route path="test" element={<Test />} />
                <Route path="testRef" element={<TestRef />} />
                <Route path="poketMonShop" element={<PoketMonShop />} />
                <Route path="poketMonShop2" element={<PoketMonShop2 />} />
            </Routes>
        </BrowserRouter>
    );

}