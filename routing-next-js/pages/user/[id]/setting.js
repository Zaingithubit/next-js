import { useRouter } from "next/router"
const setting = () => {
    const {query} = useRouter()
  return (
    <div>
        <h2>setting pagex {query.id}</h2>      
    </div>
  )
}

export default setting
