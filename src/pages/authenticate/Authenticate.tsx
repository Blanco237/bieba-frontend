import { Navigate, useSearchParams } from "react-router-dom"
import STORAGE_KEYS from "../../constants/storage";

const Authenticate = () => {
    const [searchParams] = useSearchParams()
    localStorage.setItem(STORAGE_KEYS.API_KEY, searchParams.get('ks') as string)

    return (
        <Navigate to={'/auth'} />
    )
}

export default Authenticate;