export default function About() {
  return (
    <main className="md:pt-32 md:pl-32 md:pr-80 pt-10 pl-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
        Who am I
      </h1>
      <p className="mb-3 font-light text-gray-400">
        Hey, I'm Bruno, I am a software developer and I am currently working at{' '}
        <a
          href="https://smarthis.com/en"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-500 hover:underline"
        >
          Smarthis
        </a>{' '}
        as a frontend lead developer.
      </p>
      <p className="mb-3 font-light text-gray-400">
        I have started working with programming since 2019, and coming from a
        job where I had to force myself to work and counted the hours to go
        home, I can say that these last few years have been the best of my life.
      </p>
      <p className="mb-3 font-light text-gray-400">
        In programming, you are the owner of your future, you can choose
        whatever you want to learn, I am sure that there are courses and videos
        and other resources for everything you want to learn.
      </p>
      <p className="mb-3 font-light text-gray-400">
        This sense of community and will to help each other is something
        amazing, specially when you have moved from another career.
      </p>
      <hr className="my-8" />
      <p className="mb-3 font-light text-gray-400">
        I am currently moving the codebase from Django to Next.js, so most posts
        around here will be about the React universe. But I will always try to
        bring other areas of programming to the table, even risking to be wrong
        sometimes, but I guess that's the best way to learn.
      </p>
      <p className="mb-3 font-light text-gray-400">
        Thanks a lot for stopping by, I hope you enjoy the content.
      </p>
    </main>
  )
}
