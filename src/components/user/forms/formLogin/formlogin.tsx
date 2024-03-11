import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../formscss.css'

function FormLogin() {
    return (
        <div id="FormLogin">
            <Form>
                <div id='div-titulo-form-login'>
                    <h1>Login</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <p>Não tem uma conta ?<a href="/createaccount">Crie uma!</a></p>
                </div>
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

export default FormLogin;