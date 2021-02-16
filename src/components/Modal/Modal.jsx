import { connect } from 'react-redux'
import s from './Modal.module.css'
import React, { createRef } from 'react'
import { toggleModal, changeRange, addFav, changeFav, changeName, changeModalComp } from '../../redux/actions'

const Modal = (props) => {

    const range = createRef()

    const input = createRef()
    const req = createRef()

    const changeRange = (e) => {
        props.changeRange(range.current.value)
    }

    const first = () => {
        props.toggleModal(false)
    }

    const second = () => {
        if (props.type == 'search') {
            if (input.current.value && req.current.value) {
                props.toggleModal(false)
                props.addFav({
                    req: req.current.value,
                    name: input.current.value
                })
                props.changeModalComp(true)

            }
        } else {
            if (input.current.value) {
                props.toggleModal(false)
                changeFav({
                    index: props.index,
                    name: input.current.value
                })
            }
        }
    }

    return (
        <div className={props.type == 'edit' ? s.wrapper + ' ' + s.mainWrap : s.wrapper}>
            <div className={s.modal}>
                <div className={s.modalTitle}>{props.s} запрос</div>
                <form className={s.form}>
                    <label className={s.modalLabel}>Запрос</label>
                    <div className={s.modalWrapper}>
                        <input className={s.req} ref={req} type="text" disabled value={props.req}/>
                    </div>
                </form>
                <form className={s.form}>
                    <label htmlFor='name' className={s.modalLabel}><span>*</span>Название</label>
                    <div className={s.modalWrapper}>
                        <input ref={input} id='name' type="text" placeholder='Укажите название' value={props.name}/>
                    </div>
                </form>
                <form className={s.form}>
                    <label className={s.modalLabel}>Сортировать по</label>
                    <div className={s.modalWrapper}>
                        <input type="text" placeholder='Без сортировки' disabled/>
                    </div>
                </form>
                <form className={s.form + ' ' + s.rangeForm}>
                    <label className={s.modalLabel}>Максимальное количество</label>
                    <div className={s.range}>
                        <input onChange={changeRange} defaultValue='25' ref={range} type="range" min="1" max="50" step="1" />
                        <div className={s.value}>{props.rangeValue}</div>
                    </div>
                </form>
                <div className={s.buttons}>
                    <button onClick={first} className={s.first + ' ' + s.btn}>{props.f}</button>
                    <button onClick={second} className={s.second + ' ' + s.btn}>{props.s}</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.search.modal,
        rangeValue: state.search.rangeValue,
        favs: state.fav.favs
    }
}

const mapDispatchToProps = {
    toggleModal,
    changeRange,
    addFav,
    changeFav,
    changeName,
    changeModalComp
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)