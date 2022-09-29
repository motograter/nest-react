import { ReactComponent as DeathStar } from '@/shared/design/assets/death-star.svg'
import { useRouteError } from 'react-router-dom'

export const NoFound = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="text-red-400">
      <span>Something went wrong 404</span>
      <DeathStar />
    </div>
  )
}
