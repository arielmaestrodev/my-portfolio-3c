import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b py-6 border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-lg font-bold">Portfolio</h1>
          </div>

          {/* Navigations */}
          <nav>
            <ul className="flex items-center gap-4">
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
          </nav>

          {/* Contact Us */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </header>
  )
}