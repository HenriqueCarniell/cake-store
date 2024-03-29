import axios from 'axios';
import './dashboard.css'

import { ChangeEvent, useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AlterDataModal from './alterModal/alterModal';


function Dashboard() {

    interface Product {
        idProduto: number,
        NomeProduto: string,
        precoProduto: number,
        DescricaoProduto: number,
        fotoProduto: any
    }

    //Bootstrap
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Post Data Forms
    const [saveNameProduct, setNameProduct] = useState<string>('')
    const [savePriceProduct, setPriceProduct] = useState<number>(0)
    const [saveDescProduct, setDescProduct] = useState<string>('')
    const [savePhotoProduct, setPhotoProduct] = useState<any>()

    const [modalShow, setModalShow] = useState<boolean>(false);

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

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPhotoProduct(e.target.files[0]);
        }
    };

    let HandleDeleteAdminItens = (id: number) => {
        axios.delete(`http://localhost:4000/delete/admin/itens/${id}`,)
            .then((response) => {
                console.log(response)
            })
        setDatabaseProsuct(saveDatabaseProsuct.filter(itens => itens.idProduto !== id))
    }

    let HandleSaveCreateData = (): void => {
        const formData = new FormData();
        formData.append('NameProduct', saveNameProduct);
        formData.append('PriceProduct', savePriceProduct.toString());
        formData.append('DescProduct', saveDescProduct);
        formData.append('file', savePhotoProduct);

        try {
            axios.post('http://localhost:4000/send/data/product', formData)
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
                    <header id="Admin-content-container-header">
                        <div>
                            <div>
                                <img src="" alt="" />
                                <p>Gustavo Henrique</p>
                            </div>
                        </div>
                    </header>

                    <main>

                        <div>
                            <div id="Admin-content-container-main">
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
                                        <Form.Control type="text" placeholder="Digite um nome" onChange={HandleSaveNameProduct} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Preço: </Form.Label>
                                        <Form.Control type="number" placeholder="Digite um preço" onChange={HandleSavePriceProduct} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Descrição: </Form.Label>
                                        <Form.Control type="text" placeholder="Digite um descrição" onChange={HandleSaveDescProduct} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Foto: </Form.Label>
                                        <Form.Control type="file" placeholder="Escolha uma foto" onChange={onFileChange} />
                                    </Form.Group>

                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Fechar
                                    </Button>
                                    <Button variant="primary" onClick={() => { HandleSaveCreateData(); handleClose(); window.location.reload() }}>
                                        Enviar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <div id="container-products-dashboard">
                            {saveDatabaseProsuct.map((itens, index) => (
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

                                        <div id="div-buy-add">
                                            <Button variant="primary" onClick={() => { setModalShow(true) }}>Alterar</Button>
                                            <Button variant="warning" onClick={() => HandleDeleteAdminItens(itens.idProduto)}>Excluir</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            ))}
                        </div>

                        <AlterDataModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </main>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;