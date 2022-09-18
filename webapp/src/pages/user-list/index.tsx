import { Form, useLoaderData, useNavigate } from 'react-router-dom'
import { Input, Table } from '@/shared/ui'

export const UserList = () => {
  const { users, name } = useLoaderData()
  const navigate = useNavigate()
  return (
    <div className="user-list p-4">
      <Form id="search-user" role="search">
        <Input
          id="name"
          name="name"
          type="search"
          aria-label="Search contacts"
          placeholder="Search"
          defaultValue={name}
        />
      </Form>

      <Table
        data={users}
        columns={[
          { title: 'Id', itemField: 'id' },
          { title: 'Name', itemField: 'name' },
          { title: 'Contact', itemField: 'email' },
          { title: 'Phone', itemField: 'phone' },
          { title: 'Site', itemField: 'website' },
          { title: 'Action' }
        ]}
        onRowClick={(e, id) => {
          navigate(`${id}`)
        }}
        stripped
      />
    </div>
  )
}
