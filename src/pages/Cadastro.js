import React, { useState } from 'react';
import './Cadastro.css';
import api from '../Services/api';


import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function Cadastro({ history }){
  
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Confsenha, setConfsenha] = useState('')
    const [passwordError, setpasswordError]= useState('');

    async function handleSubmit(e){
        e.preventDefault();

        if(Senha !== Confsenha){
           setpasswordError('Senhas Imcompatíveis');
            return false; 
        }
        
        else {
        setpasswordError('');
        const response = await api.post('/User', {
            username: Username,
            email: Email,
            senha: Senha,
        });

        console.log(response);

        history.push('/');

    }
}

    return(
        <div className="container">

        <div id="wrapper">
        <div className="form-container">
            <span className="form-heading">Cadastre-se</span>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <i className="fas fa-user ic"> </i>
                    <input
                     type="text" 
                     placeholder='Username...' 
                     required
                     value = {Username}
                     onChange = {event => setUsername(event.target.value)}
                    />
                    <span className="bar"></span>
                </div>

                <div className="input-group">
                    <i className="fas fa-envelope ic"></i>
                    <input
                     type="email" 
                     placeholder='Email...' 
                     required
                     value={Email}
                     onChange={event => setEmail(event.target.value)}
                    />
                    <span className="bar"></span>
                </div>

                <div className="input-group">
                    <i className="fas fa-lock ic"></i>
                    <input
                    className="inputSenha"
                     type="password" 
                     placeholder='Senha...' 
                     required
                     value={Senha}
                     onChange={event => setSenha(event.target.value)}
                    />
                    <span className="bar"></span>
                </div>

                <div className="input-group">
                    <i className="fas fa-lock ic"></i>
                    <input
                     type="password" 
                     placeholder='Confirme a senha...' 
                     required
                     value={Confsenha}
                     onChange={event => setConfsenha(event.target.value)}
                     />
                    <span className="bar"></span> <br/>
                </div>
                <div style={{ fontSize: 17, color: 'red', marginLeft: 17, marginTop: 10 }}>{passwordError}</div>

                <div className="input-group">
                   <button>
                       <i className="fab fa-telegram-plane"></i>
                   </button>
                </div>

                <div className="switch-login">
                <div>Já possui uma conta? </div><a href="/"> <span>Faça Login</span></a>
                </div>
            </form>
        </div>
    </div>

    </div>
    );
}