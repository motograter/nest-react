import { Button, Input, Label } from '@/shared/ui'
import { Form, useLoaderData } from 'react-router-dom'

export const UserEdit = () => {
  const { data } = useLoaderData()

  return (
    <div className="user-edit">
      <Form method="patch" id="user-form">
        <div>
          <Label text="bold">Name</Label>
          <Input type="text" name="name" id="name" defaultValue={data.name} />
        </div>

        <div>
          <Label text="bold">User Name</Label>
          <Input
            type="text"
            name="uername"
            id="username"
            defaultValue={data.username}
          />
        </div>
        <div>
          <Button type="submit" variant="green" size="3">
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  )
}
