import { useNavigate } from 'react-router-dom';
import { useSearchContext } from 'context';


const UseFetchHome = () => {
    const { search, _HandleSearchSubmit } = useSearchContext();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (search) {
            _HandleSearchSubmit();
            navigate(`/artists`);
        }
    }

    return { handleSubmit };
};

export default UseFetchHome;
