import { Link } from 'react-router-dom'
import Versions from '../components/Versions'
// import electronLogo from '../assets/electron.svg'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home(): JSX.Element {
  const z = import.meta.env.RENDERER_VITE_KEY
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping') + z

  return (
    <div className="w-full h-screen flex flex-col px-5 space-y-8 items-center justify-center">
      <h1 className="text-5xl font-bold text-center">
        Electron-Vite template with ShadcnUI and Tailwindcss
      </h1>
      <p className="text-lg font-semibold">Start edit code in `src/rerender/src/App.tsx`</p>
      <Button asChild>
        <Link to="/" className="flex gap-2">
          Get Started <ArrowRight />{' '}
        </Link>
      </Button>
      <Button asChild>
        <Link to="/test" className="flex gap-2">
          Page test <ArrowRight />{' '}
        </Link>
      </Button>
      <Versions></Versions>
    </div>
  )
}
