import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { tooglecardfavorite } from '../../redux/store';
import { clsx } from 'clsx';

const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(tooglecardfavorite(props.id));
    };


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
        </li>
    );
};

export default Card;