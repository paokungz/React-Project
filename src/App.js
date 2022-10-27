import './App.css';
import NavBarrr from './NavBarrr';
import Bisection from './method/rootofEQ/Bisection';
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Falsepositions from './method/rootofEQ/Falsepositions';
import Graphical from './method/rootofEQ/Graphical';
import Newton from './method/rootofEQ/Newtonrapson';
import Onepoint from './method/rootofEQ/Onepoint';
import Secant from './method/rootofEQ/Secant';

const {  Content } = Layout;
function App() {
    console.log(window.location)
 return (
    <div className="App">
        <BrowserRouter>
        <Layout>
        <NavBarrr/>
        <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ padding: 24, margin: 0, minHeight: 280, }}>
                <Routes>
                <Route path="Bisection"  element={<Bisection/>} />
                <Route path='Falsepositions'element={<Falsepositions/>}/>
                <Route path='Graphical'element={<Graphical/>}/>
                <Route path='Newtonrapson'element={<Newton/>}/>
                <Route path='Onepoint'element={<Onepoint/>}/>
                <Route path='Secant'element={<Secant/>}/>
                </Routes>
            </Content>
        </Layout>
        </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
