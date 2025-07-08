// components/LoadingScreen.jsx
import { useProgress } from '@react-three/drei'

const LoadingScreen = () => {
  const { progress } = useProgress()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-2xl font-bold">
      Loading... {Math.floor(progress)}%
    </div>
  )
}

export default LoadingScreen;
