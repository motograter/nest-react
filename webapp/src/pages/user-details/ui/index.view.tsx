import { Button, Label } from "@/shared/ui"
import { useLoaderData, useNavigate } from "react-router-dom"

export const User = () => {
    const { data: user } = useLoaderData()
    const navigate = useNavigate()
  
    const onEditUserClick = () => {
      navigate('edit')
    }
    return (
      <div className="user-details flex flex-col">
        <Label>Name</Label>
        <span>{user.name}</span>
        <span>{user.username}</span>
        <div>
          <Button onClick={onEditUserClick} variant="blue" size={5}>
            Edit
          </Button>
        </div>
      </div>
    )
  }