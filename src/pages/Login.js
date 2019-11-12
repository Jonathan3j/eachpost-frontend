import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './Login.css';
import { Link } from 'react-router-dom';
import api from '../Services/api';

export default function Login(){
// JS da página

useEffect(() => {
  var inputs = document.getElementsByClassName('inpu');
    var spans = document.getElementsByClassName('span');
    
      inputs[0].addEventListener('keyup', function(){
  
        if(this.value.length >= 1){
          spans[0].classList.add('fica');
        }
  
        else{
          spans[0].classList.remove('fica');
        }
  
      });
  
      inputs[1].addEventListener('keyup', function(){
  
        if(this.value.length >= 1){
          spans[1].classList.add('fica');
          
        }
  
        else{
          spans[1].classList.remove('fica');
        }
  
      });

});

    const [Username, setUsername] = useState('');
    const [Senha, setSenha] = useState('');
    const [UserInexis, setUserInexis]= useState('');

    async function handleSubmit(e){
        e.preventDefault();
        
        const response = await api.post('/Login', {
            username: Username,
            senha: Senha,
        });

        const { senha, Nome } = response.data;

        if(Username === Nome && Senha === senha){
          console.log("usuário existe");
          setUserInexis("");
        }else{
          setUserInexis("Usuário inexistente");
        }

        
}

    // JS da página
    
    return(
//---------------------------------
<div className="container" >
<section>
  <div className="onda"></div>
</section>

<form 
  action="index.html" 
  className="login-form" 
  >

<img src={logo} height="85px" width="250px" alt="eachpost"/>

  <div className='txtb'>
    <input 
    type='text' 
    className = "username inpu"
    value = {Username}
    onChange = {event => setUsername(event.target.value)}
    />
    <div className = "span_user span">Usuário</div>
    <span></span>
  </div>

  <div className="txtb">
    <input 
    type='password' 
    className = "password inpu"
    value = {Senha}
    onChange = {event => setSenha(event.target.value)}
    />
    <div className = "span_passwd span">Senha</div>
    <span></span>
  </div>
  <div style={{ fontSize: 17, color: 'red', marginLeft: 60}}>{UserInexis}</div>
  <input 
    type="button" 
    className="logbtn" 
    value="Login"
    onClick={handleSubmit}
    ></input>

  <div className="bottom-text">
   <div>Não tem uma conta?</div> <Link className = 'Link' to="/Cadastro">Cadastre-se</Link>
  </div>

</form>

</div>

//----------------------------------------------------
    );
}
