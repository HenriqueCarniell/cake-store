import { DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { JSX } from 'react/jsx-runtime';

function AlterDataModal(props: JSX.IntrinsicAttributes & Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) {
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
                    <Form.Control type="text" placeholder="Digite um nome" onChange={ } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Preço: </Form.Label>
                    <Form.Control type="number" placeholder="Digite um preço" onChange={ } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" placeholder="Digite um descrição" onChange={ } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Foto: </Form.Label>
                    <Form.Control type="file" placeholder="Escolha uma foto" onChange={ } />
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={() => { HandleSaveCreateData(); handleClose(); window.location.reload() }}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AlterDataModal