import { getAllLists } from "../../redux/store.js";
import { useSelector } from "react-redux";
import styles from './Lists.module.scss';
import { Link } from "react-router-dom";
import { getAllList } from "../../redux/store.js";
import ListForm from '../ListForm/ListForm.js';


const Lists = () => {
    const lists = useSelector(getAllList);
    return (
        <section className={styles.lists}>
          <h2 className={styles.heading}>Browse lists</h2>
          {lists.map(list => (
            <Link key={list.id} to={`/list/${list.id}`} className={styles.listLink}>
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </Link>
          ))}
          <ListForm />
        </section>
      );
}
export default Lists;