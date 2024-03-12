//Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//css
import '../formscss.css';

//axios
import axios from 'axios';

//react
import { ChangeEvent, useState } from 'react';

function FormCreateAccount() {
    const [saveCreateName, setCreateName] = useState<string>('');
    const [saveCreateEmail, setCreateEmail] = useState<string>('');
    const [saveCreatePAssword, setCreatePAssword] = useState<string>('');

    const [saveMsg, setMsg] = useState<string>('');

    let HandleSaveCreateName = (e: ChangeEvent<HTMLInputElement>):void => {
        setCreateName(e.target.value);
    }

    let HandleSaveCreateEmail = (e: ChangeEvent<HTMLInputElement>):void => {
        setCreateEmail(e.target.value);
    }

    let HandleSaveCreatePassword = (e: ChangeEvent<HTMLInputElement>):void => {
        setCreatePAssword(e.target.value);
    }

    let ValidationCreateForm = ():void => {
        if(!saveCreateName) {
            return setMsg("Digite um Nome");
        }

        if(!saveCreateEmail) {
            return setMsg("Digite um Email");
        }

        if(!saveCreatePAssword) {
            return setMsg("Digite uma Senha");
        }
    }

    let HandlSaveCreateData = ():void => {

        ValidationCreateForm()
        
        try {
            axios.post('http://localhost:4000/send/createaccount/dados', {
                NameCreate:saveCreateName,
                EmailCreate: saveCreateEmail,
                PasswordCreate: saveCreatePAssword
            }).then(CreateResponseData => {
                setMsg(CreateResponseData.data.msg);
            })
        } catch(err: unknown) {
            console.log(err);
        }
    }

    return ( 
        <div id="FormLogin">
            <Form>
                <div id='div-titulo-form-login'>
                    <h1>Crie Sua Conta</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Coloque um Nome" onChange={HandleSaveCreateName}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={HandleSaveCreateEmail}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={HandleSaveCreatePassword}/>
                </Form.Group>
                <Form.Text className="text-muted">
                        {saveMsg}
                    </Form.Text>
                <div id="div-button-login-form">
                    <Button variant="primary" onClick={HandlSaveCreateData}>
                        Enviar
                    </Button>
                </div>
            </Form>
        </div>
     );
}

export default FormCreateAccount;