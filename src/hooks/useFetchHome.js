import { useNavigate } from 'react-router-dom';
import { useSearchContext } from 'context';


const UseFetchHome = () => {
    const { search, _HandleSearchSubmit } = useSearchContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            _HandleSearchSubmit();
            navigate(`/artists`);
        }
        else {
            e.preventDefault();
        }
    }

    return { handleSubmit };
};

export default UseFetchHome;
