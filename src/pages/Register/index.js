import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa"
import { MainPage } from "./style"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router';

import { firebaseApp } from '../../firebaseApi';

const Register = () => {

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").min(8, "Senha deve ter ao menos 8 caracteres"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });
        
    const history = useHistory();
    const onSubmitFunction = async (data) => {
        console.log('teste');
        await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                history.push('/login');
            });
    }

    return (
        <MainPage>
            <div className="gray__gradient" />
            <Link className="mobile__return" to="/">
                <FaArrowCircleLeft className="arrow__button" />
            </Link>
            <div className="text__box">
                <h1>Crie sua conta</h1>
            </div>
            <form className="input__box" onSubmit={handleSubmit(onSubmitFunction)}>
                <GrayInput type="text" placeholder={'Nome de Usuário'} />
                <GrayInput type="email" placeholder={'Email'} {...register('email')}/>
                <GrayInput type="number" placeholder={'Telefone'} />
                <GrayInput type="password" placeholder={'Senha'} {...register('password')}/>
                <GrayInput type="password" placeholder={'Confirme sua Senha'} />
                <BlueButton type="submit" text="Cadastrar" />
                <Link to="/login" className="smalltext margin">Já tem cadastro? <strong>Entre!</strong></Link>
            </form>
        </MainPage>
    )

}

export default Register