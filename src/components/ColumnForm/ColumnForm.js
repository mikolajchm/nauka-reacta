import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';


const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
     };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title:
            <label> 
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </label>         
            Icon:
            <label> 
                <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            </label>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;