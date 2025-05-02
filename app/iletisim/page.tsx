"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-lg text-muted-foreground">
            Sorularınız veya projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden mb-12 h-64">
          <Image src="/images/contact-banner.png" alt="İletişim" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white shadow-sm max-w-md">Bizimle İletişime Geçin</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>İletişim Bilgileri</CardTitle>
                <CardDescription>Aşağıdaki kanallardan bize ulaşabilirsiniz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">info@dertops.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <p className="text-sm text-muted-foreground">+90 555 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Adres</h3>
                    <p className="text-sm text-muted-foreground">
                      Teknoloji Mahallesi, İnovasyon Caddesi No:42
                      <br />
                      Kadıköy, İstanbul
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/office-location.png" alt="Ofis Konumu" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Çalışma Saatleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Bize Mesaj Gönderin</CardTitle>
                <CardDescription>Formu doldurarak bize ulaşabilirsiniz</CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">
                      Mesajınız Gönderildi!
                    </h3>
                    <p className="text-green-700 dark:text-green-400">En kısa sürede size dönüş yapacağız.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setSubmitSuccess(false)}>
                      Yeni Mesaj Gönder
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          İsim Soyisim
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Konu
                      </label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mesaj
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
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
                          Gönderiliyor...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Gönder
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
