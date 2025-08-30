import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { EnrollmentForm } from '@/components/enrollment-form'

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className='flex flex-col items-center gap-8 py-8'>
        <div className="bg-white w-full">
          <EnrollmentForm />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
