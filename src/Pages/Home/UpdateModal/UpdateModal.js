import { useParams } from "react-router-dom";

const UpdateModal = () => {
    const id = useParams();
    return (
        <div>
            {id}
            update modal
        </div>
    );
};

export default UpdateModal;