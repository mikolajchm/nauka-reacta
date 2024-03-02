import PageTitle from '../PageTitle/PageTitle.js';
import styles from './Favorite.module.scss';
import { getFavoriteCard } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';

const Favorite = () => {
    const cards = useSelector(state => getFavoriteCard(state));

    if(cards.length === 0) return <h1 className={styles.title}>NO CARDS ...</h1>
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.card}>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            </article>
        </div>
    )
}

export default Favorite;