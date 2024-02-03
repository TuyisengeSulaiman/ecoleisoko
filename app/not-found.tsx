import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-[700px] text-center'>
      <h2 className='text-3xl'>Impossible de trouver la page que vous recherchez</h2>
      <Link href="/" className={buttonVariants()}>Rentrer à la maison</Link>
    </div>
  )
}