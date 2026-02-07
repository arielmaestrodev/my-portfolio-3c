import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold">Portfolio</h2>
            <p className="text-sm">Cebu, City</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-bold">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold">Blogs</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Blog 1</Link>
              </li>
              <li>
                <Link href="/about">Blog 2</Link>
              </li>
              <li>
                <Link href="/projects">Blog 3</Link>
              </li>
              <li>
                <Link href="/blog">Blog 4</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold">Contact Links</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Email: test@gmail.com</Link>
              </li>
              <li>
                <Link href="/about">Phone: +63 123 3214</Link>
              </li>
              <li>
                <Link href="/projects">GitHub</Link>
              </li>
              <li>
                <Link href="/blog">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}