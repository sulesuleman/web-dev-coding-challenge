import { useNavigate } from 'react-router-dom';
import { useSearchContext } from 'context';


const UseFetchHome = () => {
    const { search } = useSearchContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/artists`);
        }
        else {
            e.preventDefault();
        }
    }
    return { handleSubmit };
};

export default UseFetchHome;
