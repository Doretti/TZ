import s from './Video.module.css'

const Video = props => {
    return (
        <a href={props.href} className={props.sort == 'list' ? s.card + ' ' + s.list : s.card}>
            <img className={props.sort == 'list' ? s.img + ' ' + s.listImg : s.img} src={props.img} alt=""/>
            <div className={s.info}>
                <div className={props.sort == 'list' ? s.title + ' ' + s.listTitle : s.title}>{props.title}</div>
                <div className={s.disc}>{props.disc}</div>
            </div>
        </a>
    )
}

export default Video