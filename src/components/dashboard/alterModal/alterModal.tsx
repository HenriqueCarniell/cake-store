import axios from 'axios';
import { DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode, useState, ChangeEvent, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { JSX } from 'react/jsx-runtime';

function AlterDataModal(props: JSX.IntrinsicAttributes & Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) {

    const [SaveNewName, SetNewName] = useState<string>('');
    const [SaveNewPrice, SetNewPrice] = useState<number>(0);
    const [SaveNewDesc, SetNewDesc] = useState<string>('');
    const [SaveNewPhoto, SetNewPhoto] = useState<string>('');

    const [SaveNewData, SetNewData] = useState<any[]>([]);


    let HandleSaveNewName = (e: ChangeEvent<HTMLInputElement>) => {
        SetNewName(e.target.value);
    }

    let HandleSaveNewPrice = (e: ChangeEvent<HTMLInputElement>) => {
        SetNewPrice(Number(e.target.value));
    }

    let HandleSaveNewDesc = (e: ChangeEvent<HTMLInputElement>) => {
        SetNewDesc(e.target.value);
    }

    let HandleSaveNewPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        SetNewPhoto(e.target.value);
    }

    let HandleSendNewData = (): void => {
        try {
            SaveNewData?.map((itens) => (
                axios.put(`http://localhost:4000/send/new/data/product/${itens.idProduto}`, {
                    NewNameProduct: SaveNewName,
                    NewPriceProduct: SaveNewPrice,
                    NewDescProduct: SaveNewDesc
                })
                    .then((data) => {
                        console.log(data)
                    })
            ))

        } catch (err: unknown) {
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:4000/get/data/product')
            .then(response => {
                SetNewData(response.data)
            })
    }, [])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Alterar
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Digite um nome" onChange={HandleSaveNewName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Preço: </Form.Label>
                    <Form.Control type="number" placeholder="Digite um preço" onChange={HandleSaveNewPrice} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" placeholder="Digite um descrição" onChange={HandleSaveNewDesc} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Foto: </Form.Label>
                    <Form.Control type="file" placeholder="Escolha uma foto" onChange={HandleSaveNewPhoto} />
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={() => { HandleSendNewData(); window.location.reload() }}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AlterDataModal