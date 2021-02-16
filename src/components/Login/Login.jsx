import { connect } from 'react-redux'
import s from './Login.module.css'
import { onPass, offPass, toggleActivePass, toggleActiveLogin, auth} from '../../redux/actions'
import { createRef } from 'react'
import { NavLink } from 'react-router-dom'

const Login = (props) => {

    const eye = props.hiddenPass ? (props.activePass ? <img onClick={props.onPass} src="./img/eye-off-blue.svg" alt=""/> : <img onClick={props.onPass} src="./img/eye-off.svg" alt=""/>) : <img onClick={props.offPass} src="./img/eye.svg" alt=""/>

    const login = createRef()
    const pass = createRef()

    const toggle = (e) => {
        if (e.target.classList.length == 1 && e.target.attributes['name'].value === 'pass') {
            props.toggleActivePass(true)
        } else {
            props.toggleActivePass(false)
        }

        if (e.target.classList.length == 1 && e.target.attributes['name'].value === 'login') {
            props.toggleActiveLogin(true)
        } else {
            props.toggleActiveLogin(false)
        }
    }

    const auth = () => {
        props.auth({
            login: login.current.value,
            pass: pass.current.value
        })
    }

    return (
        <div className={s.loginWrapper}>
            <div className={s.LoginBlock}>
                <div className={s.logo}>
                    <img src="./img/logo.svg" alt=""/>
                </div>
                <h3 className={s.title}>Вход</h3>
                <div className={s.auth}>
                    <div className={s.form}>
                        <label htmlFor="login" className={s.label}>Логин</label>
                        <div name='login' onClick={toggle} className={props.activeLogin ? s.active + ' ' + s.wrapper : s.wrapper} onClick={toggle}>
                            <input ref={login} className={s.input} name='login' onClick={props.offPass} type="text"/>
                        </div>
                    </div>
                    <div className={s.form}>
                        <label className={s.label}>Пароль</label>
                        <div name='pass' className={props.activePass ? s.active + ' ' + s.wrapper : s.wrapper} onClick={toggle}>
                            {props.hiddenPass ? <input ref={pass} className={s.input} name='pass' type="password"/> : <input ref={pass} className={s.input} name='pass' type="text"/>}
                            <button className={s.eye}>{eye}</button> 
                        </div>
                    </div>
                    <NavLink to='/' onClick={auth} className={s.login}>Войти</NavLink>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        hiddenPass: state.login.hiddenPass,
        activePass: state.login.activePass,
        activeLogin: state.login.activeLogin
    }
}

const mapDispachToProps = {
    onPass,
    offPass,
    toggleActivePass,
    toggleActiveLogin,
    auth
}

export default connect(mapStateToProps, mapDispachToProps)(Login)