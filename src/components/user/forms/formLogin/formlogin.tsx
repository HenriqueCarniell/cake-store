// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';

// Forms CSS
import '../formscss.css';

// Hooks
import { ChangeEvent, useState } from 'react';

// Axios
import axios from 'axios';

function FormLogin() {
    const [saveEmail, setEmail] = useState<string>('');
    const [savePassword, setSenha] = useState<string>('');

    const [saveMsg, setMsg] = useState<string>('');


    let HandleSaveEmail = (e: ChangeEvent<HTMLInputElement>):void => {
        setEmail(e.target.value);
    }


    let HandleSavePassword = (e: ChangeEvent<HTMLInputElement>):void => {
        setSenha(e.target.value);
    }

    let nav = useNavigate()

    let SaveAllDataLogin = ():void => {
        try {
            axios.post('http://localhost:4000/send/login/dados', {
                EmailLogin: saveEmail,
                PasswordLogin: savePassword
            }).then((response) => {
                setMsg(response.data.msg)
                if(response.data.sucess) {
                    nav('/home')
                }
                console.log(response)
            })
        } catch (err: unknown) {
            console.log(err);
        }
    }

    return (
        <div id="FormLogin">
            <Form>
                <div id='div-titulo-form-login'>
                    <h1>Login</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={HandleSaveEmail} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={HandleSavePassword} />
                </Form.Group>
                <Form.Text className="text-muted">
                    {saveMsg}
                </Form.Text>
                <div>
                    <p>Não tem uma conta ?<a href="/createaccount">Crie uma!</a></p>
                </div>
                <div id="div-button-login-form">
                    <Button variant="primary" onClick={SaveAllDataLogin}>
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormLogin;