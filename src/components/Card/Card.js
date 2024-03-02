import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { clsx } from 'clsx';
import { tooglecardfavorite, removeCard }  from '../../redux/cardsRedux';


const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(tooglecardfavorite(props.id));
    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard (props.id));
    }


    return (
        <li className={styles.card}>
            <span>{props.title}</span>
            <button
                type="button"
                className={clsx(styles.button, props.isFavorite && styles.favorite)}
                onClick={handleToggleFavorite}
            >
                <i className={clsx('fa', { 'fa-star': props.isFavorite, 'fa-star-o': !props.isFavorite }, styles.icon)}></i>
            </button>
            <button type="button" onClick={handleRemove}>
                <i className='fa fa-trash'></i>
            </button>
        </li>
    );
};

export default Card;