import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updatesearchstring } from '../../redux/store';

const SearchForm = () => {
    const searchString = useSelector(state => state.searchString);
    const [searchValue, setSearchValue] = useState(searchString); 
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(updatesearchstring('')); 
    }, [dispatch]);
    
    const handleInputChange = (e) => {
        setSearchValue(e.target.value); 
    };

   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(updatesearchstring( searchValue));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
                placeholder="Search..." 
                value={searchValue} 
                onChange={handleInputChange} 
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
