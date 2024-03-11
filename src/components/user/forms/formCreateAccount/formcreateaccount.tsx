import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../formscss.css'

function FormCreateAccount() {
    return ( 
        <div id="FormLogin">
            <Form>
                <div id='div-titulo-form-login'>
                    <h1>Crie Sua Conta</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                <div id="div-button-login-form">
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
     );
}

export default FormCreateAccount;