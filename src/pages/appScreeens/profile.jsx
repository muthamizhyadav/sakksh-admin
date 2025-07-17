import { useParams } from "react-router-dom";


const Profile = ()=>{
     const {id}  = useParams()
     

    return(
        <div className="space-x-4">
            <p className=" text-2xl font-bold  items-center">Profile Page</p>
            <p>{id}</p>
        </div>

    )
}
export  default Profile;