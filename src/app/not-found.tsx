import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets : ["cyrillic"]
})

export default function NotFound() {
  return(
    <main className="w-screen h-[70vh] flex items-center justify-center">
      <div className={raleway.className}>
        <h1 className=' text-2xl text-center'>404 - Page Not Found</h1>
      </div>
    </main>
  )
}