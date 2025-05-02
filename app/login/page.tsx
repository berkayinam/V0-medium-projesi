"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, LogIn } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Here you would typically authenticate with your backend
      console.log("Login attempt with:", formData)
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="w-full max-w-md px-4">
        <Card className="border-muted/40 shadow-lg overflow-hidden">
          <div className="relative h-32">
            <Image src="/images/login-banner.png" alt="Login" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 flex items-end justify-center pb-4">
              <Cloud className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Giriş Yap</CardTitle>
            <CardDescription>DertOps hesabınıza giriş yapın</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ornek@dertops.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Şifre</Label>
                  <Link href="/sifremi-unuttum" className="text-xs text-primary hover:underline">
                    Şifremi Unuttum
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Giriş Yapılıyor...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    Giriş Yap
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <span>Hesabınız yok mu? </span>
              <Link href="/kayit-ol" className="text-primary hover:underline">
                Kayıt Olun
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
