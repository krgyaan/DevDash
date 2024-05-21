import { Button, Link, Tooltip } from "@nextui-org/react"

/* eslint-disable react/no-unescaped-entities */
const ErrorPage = () => {
  return (
    <div>
      <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
          <p className="text-2xl md:text-2xl lg:text-3xl font-bold tracking-wider text-gray-500 mt-4">
            Looks like you've found the doorway to the great nothing
          </p>
          <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
            Sorry about that! Please visit our hompage to get where you need to go.
          </p>
          <Link href="/" className="mt-3">
            <Tooltip showArrow={true} content="Back to home">
              <Button color="secondary" variant="shadow">Take me there</Button>
            </Tooltip>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
