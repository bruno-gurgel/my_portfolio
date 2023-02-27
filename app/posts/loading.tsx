export default function Loading() {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div role="status" className="max-w-sm animate-pulse mb-5" key={i}>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-3"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2.5"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ))}
    </>
  )
}
