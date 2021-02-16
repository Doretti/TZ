import { connect } from 'react-redux'
import s from './Favorites.module.css'
import Favorite from '../Favorite/Favorite'

const Favorites = (props) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Избранное</h2>
            <div className={s.favorites}>
                {props.favs.map((item, index) => {
                    return <Favorite title={item.req} index={index} name={item.name}/>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favs: state.fav.favs
    }
}

export default connect(mapStateToProps, null)(Favorites)