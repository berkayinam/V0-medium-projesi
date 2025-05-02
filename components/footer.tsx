import Link from "next/link"
import { Cloud, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Cloud className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">DertOps</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Professional Cloud, DevOps, and IoT solutions for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">İletişim</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>info@dertops.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>+90 555 123 4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Sosyal Medya</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DertOps. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
