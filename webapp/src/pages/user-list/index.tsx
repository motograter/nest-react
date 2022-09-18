import { redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { Table } from '@/shared/ui'

export const UserList = () => {
  const loader = useLoaderData()
  const navigate = useNavigate()
 console.log(loader)
  return (
    <Table
      data={loader.data}
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
  )
}
