import { API_URL } from '@/shared/config'
import axios from 'axios'
import { LoaderFunctionArgs } from 'react-router-dom'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const getUser = axios.get(`${API_URL}users/${params.id}`)
  const getPosts = axios.get(`${API_URL}posts?userId=${params.id}`)
  const [{ data: user }, { data: posts }] = await Promise.all([
    getUser,
    getPosts
  ])
  return { data: { ...user, posts: posts } }
}
