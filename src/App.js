import React from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import Sample from './components/Sample';

const App = () => {

    const signUp = () => {
        alert("Button Clicked");
    }

    return (
        <div className = 'form'>
            <div className='container'>
            <h1 id = 'label'>SignUp</h1>
            <div id = 'textbox'>
                <Inputfield type={'text'} placeholder={'Username'} className = {'username'}/>
            </div>
            <div id = 'email'>
                <Inputfield type = 'email' placeholder = 'email' className = 'email' />
            </div>
            <div id = 'pass'>
                <Inputfield type = 'password' placeholder = 'password' className = 'pass' />
            </div>
            <div id = 'pass'>
                <Inputfield type = 'password' placeholder = 'confirm password' className = 'cpass' />
            </div>
            <div id = 'my-button'>
                <button 
                type = 'submit' 
                className = 'my-button'
                onClick = {signUp}
                >SignUp</button>
            </div>
            <div>
                <Sample/>
            </div>
            </div>
        </div>
    );
}

export default App;