import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import DropDownItem from './dropdown-item/dropdown-item';

import { RiAccountCircleFill } from "react-icons/ri";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useState } from 'react';

function Home() {
    const [open, SetOpen] = useState<boolean>(false)

    let HandleClickDropDownItem = () => {
        SetOpen(!open)
    }
    console.log(open)

    return (
        <div>
            <header id="header-home">
                <div id="div-logo-header">
                    Logo
                    <img src="" alt="" />
                </div>

                <div id="div-input-header">
                    <InputGroup id="input-header-home">
                        <Form.Control
                            placeholder="Digite o nome de um bolo"
                            aria-label="Digite o nome de um bolo"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="search-icon"><HiOutlineMagnifyingGlass /></InputGroup.Text>
                    </InputGroup>
                </div>

                <div id="div-icon-header">
                        <RiAccountCircleFill size={32} onClick={HandleClickDropDownItem}/>
                        {open && <DropDownItem />}
                </div>
            </header>

            <main className='container'>
                
            </main>

            <footer>

            </footer>
        </div>
    );
}

export default Home;