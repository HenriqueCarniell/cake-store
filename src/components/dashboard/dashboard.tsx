import axios from 'axios';
import './dashboard.css'

import { ChangeEvent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Dashboard() {

    interface Product {
        idUsuario: number,
        Nome: string,
        preco: number,
        Descricao: number,
    }

    //Bootstrap
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Set Data Forms
    const [saveNameProduct, setNameProduct] = useState<string>('')
    const [savePriceProduct, setPriceProduct] = useState<number>(0)
    const [saveDescProduct, setDescProduct] = useState<string>('')

    //Get Database Data
    const [saveDatabaseProsuct, setDatabaseProsuct] = useState<Product[]>([])

    let HandleSaveNameProduct = (e: ChangeEvent<HTMLInputElement>): void => {
        setNameProduct(e.target.value)
    }

    let HandleSavePriceProduct = (e: ChangeEvent<HTMLInputElement>): void => {
        setPriceProduct(Number(e.target.value))
    }

    let HandleSaveDescProduct = (e: ChangeEvent<HTMLInputElement>): void => {
        setDescProduct(e.target.value)
    }

    let HandlSaveCreateData = (): void => {

        try {
            axios.post('http://localhost:4000/send/data/product', {
                NameProduct: saveNameProduct,
                PriceProduct: savePriceProduct,
                DescProduct: saveDescProduct
            })
                .then((data) => {
                    console.log(data)
                })
        } catch (err: unknown) {
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:4000/get/data/product')
            .then(response => {
                setDatabaseProsuct(response.data)
            })
    }, [])

    return (
        <div>
            <div id="DashBoard-container">
                <div>
                    <div>
                        <h1>DashBoard</h1>
                    </div>

                    <div>
                        <p>Bem-Vindo</p>
                    </div>


                </div>



                <div id="container-right">
                    <header id="Admin-content-container">
                        <div>
                            <div>
                                <img src="" alt="" />
                                <p>Gustavo Henrique</p>
                            </div>
                        </div>
                    </header>

                    <main>

                        <div>
                            <div id="Admin-content-container">
                                <Button variant="primary" onClick={handleShow}>
                                    Adicionar Produto
                                </Button>
                            </div>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Adicionar</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Nome: </Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" onChange={HandleSaveNameProduct} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Preço: </Form.Label>
                                        <Form.Control type="number" placeholder="Enter email" onChange={HandleSavePriceProduct} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Descrição: </Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" onChange={HandleSaveDescProduct} />
                                    </Form.Group>

                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Fechar
                                    </Button>
                                    <Button variant="primary" onClick={() => { HandlSaveCreateData(); handleClose() }}>
                                        Enviar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <div>
                            {saveDatabaseProsuct.map((itens,index) => (
                                    <div key={index}>
                                        <p>Nome do Produto: {itens.Nome}</p>
                                        <p>R$:{itens.preco}</p>
                                    </div>
                            ))}
                        </div>

                    </main>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;