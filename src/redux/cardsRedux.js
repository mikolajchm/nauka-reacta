import shortid from "shortid";
import strContains from "../utils/strContains.js";


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));


export const getFavoriteCard = ({cards}) => cards.filter(card => card.isFavorite === true);

// action creators
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const removeCard = payload => ({ type: 'REMOVE_CARD', payload });
export const tooglecardfavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_CARD':
        return [...statePart, { ...action.payload, id: shortid() }];
        case 'REMOVE_CARD':
        return statePart.filter((card) => card.id !== action.payload);
      case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }
}

export default cardsReducer;