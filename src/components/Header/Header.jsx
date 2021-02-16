import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { search, updateTotalResults, updateVideos, changeSearchName, changeInput, changeModalComp } from '../../redux/actions'

const Header = (props) => {

    const toStart = () => {
        props.search(false)
        props.updateTotalResults(0)
        props.updateVideos([])
        props.changeSearchName('')
        props.changeInput('')
        props.changeModalComp(false)
    }

    const exit = () => {
        localStorage.removeItem('token')
    }

    return (
        <header className={s.header}>
            <div className={s.tabs}>
                <NavLink onClick={toStart} className={s.link} to='/login'>
                    <div className={s.logo}>
                        <img src="./img/logo.svg" alt=""/>
                    </div>
                </NavLink>
                <nav className={s.nav}>
                    <div className={s.navItem}>
                        <NavLink activeClassName={s.active} exact to='/'>Поиск</NavLink>
                    </div>
                    <div className={s.navItem}>
                        <NavLink activeClassName={s.active} to='/favorites'>Избранное</NavLink>
                    </div>
                </nav>
            </div>
            <div className={s.exit}>
                <NavLink to='/' onClick={exit} className={s.exit}>Выйти</NavLink>
            </div>
        </header>
    )
}

const mapDispatchToProps = {
    search,
    updateTotalResults,
    updateVideos,
    changeSearchName,
    changeInput,
    changeModalComp
}

export default connect(null, mapDispatchToProps)(Header)