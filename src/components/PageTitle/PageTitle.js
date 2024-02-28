import styles from './PageTitle.module.scss';


const PageTitle = ({ children }) => {
    return (
      <h2 className={styles.pagetitle}>{children}</h2>
    );
  };
  
export default PageTitle;