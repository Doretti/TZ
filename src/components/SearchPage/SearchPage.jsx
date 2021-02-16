import { connect } from 'react-redux'
import s from './SearchPage.module.css'
import { 
        toggleActiveSearch, search, changeInput,
        updateTotalResults, updateVideos, switchSort,
        changeSearchName, toggleModal, changeModalComp
        } from '../../redux/actions'
import { createRef } from 'react'
import Video from '../Video/Video'
import Modal from '../Modal/Modal'
import { NavLink } from 'react-router-dom'


const SearchPage = (props) => {

    const input = createRef()
    const toggleSearch = (e) => {
        if (e.target.attributes.name.value === 'search') {
            props.toggleActiveSearch(true)
        }
    }

    const switchToList = () => {
        props.switchSort('list')
    }

    const switchToGrid = () => {
        props.switchSort('grid')
    }

    const openModal = () => {
        props.toggleModal(true)
    }
    
    const filterPanel = (<div className={s.filterPanel}>
                            <p>
                                Видео по запросу «<span>{props.searchName}</span>» 
                                <span className={s.counter}>{props.totalResults}</span>
                            </p>
                            <div className={s.filter}>
                                {props.sort === 'list' ? <img className={s.list} src='./img/grid-list/on/list.svg'/> : <img className={s.list} onClick={switchToList} src='./img/grid-list/off/list.svg'/>}
                                {props.sort === 'grid' ? <img className={s.grid} src='./img/grid-list/on/grid.svg'/> : <img className={s.grid} onClick={switchToGrid} src='./img/grid-list/off/grid.svg'/>}
                            </div>
                        </div>)

    const search = (e) => {
        props.changeSearchName(props.inputValue)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${props.inputValue}&key=AIzaSyAMpJg5ssupo8M_rmSFZh1UnDHEKSQeqQk`).then(response => {return response.json()})
                .then(data => {
                    props.updateTotalResults(data.pageInfo.totalResults)
                    props.updateVideos(data.items)
                })
        props.toggleActiveSearch(false)
        props.search(true)
        e.preventDefault();
    }

    const changeInput = () => {
        props.changeInput(input.current.value)
    }

    const link = () => {
        props.changeModalComp(false)
    }

    return (
        <div className={props.isSearch ? s.searchPage + ' ' + s.findPage : s.searchPage}>
            <h1 className={props.isSearch ? s.SearchTitle + ' ' + s.findResult : s.SearchTitle}>Поиск видео</h1>
            <form name='search' className={ props.activeSearch ? s.inputsWrapper + ' ' + s.active : s.inputsWrapper}>
                <input ref={input} name='search' onSubmit={search} onClick={toggleSearch} onChange={changeInput} className={s.inputSearch} type="text" value={props.inputValue} placeholder='Что хотите посмотреть?'/>
                <div className={s.heartWrapper}>
                    {props.searchName ? <img className={s.heart} onClick={openModal} src='./img/Heart.svg'/> : null}
                    { props.modalComp ? 
                    <div className={s.modalComp}>
                        <img src="./img/Tooltip.svg" alt=""/>
                        <p>Поиск сохранён в разделе «Избранное»</p>
                        <NavLink onClick={link} to='/favorites'>Перейти в избранное</NavLink>
                    </div>
                    : null
                    }
                </div>
                <button onClick={search} name='search' className={s.inputBtn}>Найти</button>
            </form>
            {props.videos.length ? filterPanel : null}
            <div className={props.sort == 'list' ? s.videos + ' ' + s.list : s.videos}>
                {
                    props.videos.map(video => {
                        return <Video sort={props.sort} img={video.snippet.thumbnails.high.url} title={video.snippet.title} disc={video.snippet.description} href={`https://www.youtube.com/watch?v=${video.id.videoId}`}/>
                    })
                }
            </div>
            { props.modal 
            ?   
            <Modal req={props.searchName} type='search' f='Не сохранять' s='Сохранить'/>
            : null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        inputValue: state.search.inputValue,
        activeSearch: state.search.activeSearch,
        videos: state.search.videos,
        totalResults: state.search.totalResults,
        sort: state.search.sort,
        isSearch: state.search.isSearch,
        searchName: state.search.searchName,
        modal: state.search.modal,
        modalComp: state.search.modalComp
    }
}

const mapDispatchToProps = {
    toggleActiveSearch,
    changeInput,
    updateTotalResults,
    updateVideos,
    switchSort,
    search,
    changeSearchName,
    toggleModal,
    changeModalComp
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)