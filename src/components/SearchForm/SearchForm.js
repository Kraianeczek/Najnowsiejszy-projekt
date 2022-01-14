import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.SearchForm}>
            <TextInput placeholder="Search..." />
            <Button>Search <span className='fa fa-search'></span></Button>
        </form>
    );
  };

  export default SearchForm;