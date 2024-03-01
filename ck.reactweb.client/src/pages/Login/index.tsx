import React, { useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const exampleUserData = {
    codigo_perfil: "048",
    descripcion_perfil: "Contralor grupo 1",
    modulos: {
        "Contraloría": [
            {
                codigo_formulario: "000722",
                descripcion_formulario: "Valorización de Partidas por Fecha",
                flag_tipo_acceso: "1",
                tipo_acceso: "Consulta"
            },
            {
                codigo_formulario: "000750",
                descripcion_formulario: "Órdenes de Tintorería Pendientes de Acabado",
                tipo_acceso: "Consulta",
                flag_tipo_acceso: "1"
            }
        ],
        "Textil": [
            {
                codigo_formulario: "000935",
                descripcion_formulario: "Control de Produccion",
                tipo_acceso: "Consulta",
                flag_tipo_acceso: "1"
            }
        ]
    }
};

interface LoginFormTypes {
    username: string,
    password: string
}

const LoginFormInitialState: LoginFormTypes = {
    username: '',
    password: ''
}

const LoginPage = () => {
    const [form, setForm] = useState<LoginFormTypes>(LoginFormInitialState);
    const navigate = useNavigate();

    const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/', { state: { userData: exampleUserData } });
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label className="login-label" htmlFor="username">Usuario:</label>
                    <input className="login-input"
                        name="username"
                        type="text"
                        id="username"
                        value={form.username}
                        onChange={handleChangeForm}
                    />
                </div>
                <div>
                    <label className="login-label" htmlFor="password">Contraseña:</label>
                    <input
                        className="login-input" // Aplica la clase login-input
                        name="password"
                        type="password"
                        id="password"
                        value={form.password}
                        onChange={handleChangeForm}
                    />
                </div>
                <button className="login-button" type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginPage;
