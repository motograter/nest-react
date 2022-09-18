import { API_URL } from '@/shared/config'
import axios from 'axios'
import { LoaderFunctionArgs } from 'react-router-dom'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return await axios.get(`${API_URL}users/${params.id}`)
}

export const action = async ({ request, params }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  console.log(updates)
  await axios.patch(`${API_URL}users/${params.id}`, {
    data: updates
  })
}
