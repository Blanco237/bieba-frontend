import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import API from '../api'

const Test = () => {
    const [searchParams] = useSearchParams()
    
    console.log(decodeURIComponent(searchParams.get('code')!))

    useEffect(() => {
        const code = decodeURIComponent(searchParams.get('code')!)
        const fetchUser = async () => {
            const response = await API.post('/organization/get-user', { code });
            const user = response.data;
            console.log(user)
        }

        fetchUser();
    }, [])

    return (
    <div>Test</div>
  )
}

export default Test