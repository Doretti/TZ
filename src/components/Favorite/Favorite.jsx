import { connect } from 'react-redux'
import Modal from '../Modal/Modal'
import s from './Favorite.module.css'
import { toggleModal, updateTotalResults, updateVideos, search, changeSearchName, deleteFav } from '../../redux/actions'
import { NavLink } from 'react-router-dom'

const Favorite = (props) => {

    const edit = () => {
        props.toggleModal(true)
    }

    const search = () => {
        props.changeSearchName(props.title)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${props.title}&key=AIzaSyAMpJg5ssupo8M_rmSFZh1UnDHEKSQeqQk`).then(response => {return response.json()})
                .then(data => {
                    props.updateTotalResults(data.pageInfo.totalResults)
                    props.updateVideos(data.items)
                })
        props.search(true)
    }

    const del = () => {
        props.deleteFav(props.index)
    }

    return (
        <div className={s.item}>
            <NavLink exact to='/' onClick={search} className={s.title}>
                {props.title}
            </NavLink>
            <div className={s.btns}>
                <div className={s.change} onClick={edit}>Изменить</div>
                <div className={s.del} onClick={del}>Удалить</div>
            </div>
            {props.modal ? <Modal req={props.title} name={props.name} type='edit' f='Не изменять' s='Изменить' /> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.search.modal
    }
}

const mapDispatchToProps = {
    toggleModal,
    updateTotalResults,
    updateVideos,
    search,
    changeSearchName,
    deleteFav
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorite)