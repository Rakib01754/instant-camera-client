import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const useUser = () => {
    const { user } = useContext(AuthContext);
    const [filterdUser, setFiltereUser] = useState({})
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/user?email=${user?.email}`)
                .then((response) => {
                    setFiltereUser(response.data);
                });
        }
    }, [user])
    return [filterdUser]
}
export default useUser;