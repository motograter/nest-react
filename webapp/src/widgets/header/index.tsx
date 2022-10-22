import { ThemeSwitcher } from '@/shared/ui'

export const Header = () => {
  return (
    <header className="h-16 bg-[color:var(--colors-shark)] flex items-center">
      <ThemeSwitcher />
    </header>
  )
}
