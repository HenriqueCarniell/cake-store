import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import DropDownItem from './dropdown-item/dropdown-item';

// React Icons
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

function Home() {

    interface ProductType {
        idProduto: number,
        NomeProduto: string,
        precoProduto: number,
        DescricaoProduto: string,
        fotoProduto: Blob
    }

    const [open, SetOpen] = useState<boolean>(false)

    const [saveDataProduct, setDataProduct] = useState<ProductType[]>([])
    let [saveCountQuantity, setcountQuantity] = useState<number>(0)

    let HandleClickDropDownItem = ():void => {
        SetOpen(!open)
    }

    let HandleSaveDataCart = (idProduct: number) => {
        axios.post(`http://localhost:4000/send/data/user/cart/${idProduct}`)
    }

    let sumQuantityProduct = () => {
        setcountQuantity(saveCountQuantity+=1)
    }

    let degreeseQuantityProduct = () => {
        if(saveCountQuantity <= 0) {
            return
        }
        setcountQuantity(saveCountQuantity-=1)
    }

    useEffect(() => {
        axios.get('http://localhost:4000/get/data/product')
            .then(response => {
                setDataProduct(response.data)
            })
    }, [])

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
                    <RiAccountCircleFill size={32} onClick={HandleClickDropDownItem} />
                    {open && <DropDownItem />}
                </div>
            </header>

            <main className='container'>

                <div id="container-products-dashboard">

                    {saveDataProduct.map((itens, index) => (

                        <Card style={{ width: '20rem' }} key={index}>
                            <Card.Img variant="top" src={`data:image/png;base64,${itens.fotoProduto}`} />
                            <Card.Body>
                                <Card.Title>{itens.NomeProduto}</Card.Title>
                                <Card.Text>
                                    R$:{itens.precoProduto}
                                </Card.Text>
                                <Card.Text>
                                    Descrição:{itens.DescricaoProduto}
                                </Card.Text>

                                <div id="container-icons-add-remove">
                                    <button onClick={degreeseQuantityProduct}><IoIosRemove /></button>
                                    <p>{saveCountQuantity}</p>
                                    <button onClick={sumQuantityProduct}><IoIosAdd /></button>
                                </div>

                                <div id="div-buy-add">
                                    <Button variant="primary" >Comprar</Button>
                                    <Button variant="warning" onClick={() => {HandleSaveDataCart(itens.idProduto)}}>Adicionar ao Carrinho</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </main>

            <footer>

            </footer>
        </div>
    );
}

export default Home;