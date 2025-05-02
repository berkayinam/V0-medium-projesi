import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight, Code, Globe, Laptop, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">AwesomeUI</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button size="sm">
                Sign up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Yeni Nesil Web Tasarımı
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Mükemmel kullanıcı deneyimi için modern web çözümleri
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Etkileyici, hızlı ve kullanıcı dostu web siteleri ile işletmenizi bir üst seviyeye taşıyın.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="group" size="lg">
                    Hemen Başlayın
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Demo İzleyin
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Ücretsiz deneme</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Kurulum gerektirmez</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>7/24 Destek</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
                <div className="relative rounded-lg border bg-background p-4 shadow-lg">
                  <div className="flex h-8 items-center border-b">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-6 p-4">
                    <div className="h-24 rounded-lg bg-muted p-4">
                      <div className="h-4 w-3/4 rounded bg-muted-foreground/20" />
                      <div className="mt-2 h-4 w-1/2 rounded bg-muted-foreground/20" />
                      <div className="mt-4 h-8 w-1/3 rounded bg-primary/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 rounded-lg bg-muted p-4">
                        <div className="h-4 w-3/4 rounded bg-muted-foreground/20" />
                        <div className="mt-2 h-4 w-1/2 rounded bg-muted-foreground/20" />
                        <div className="mt-4 h-16 w-full rounded bg-muted-foreground/10" />
                      </div>
                      <div className="h-32 rounded-lg bg-muted p-4">
                        <div className="h-4 w-3/4 rounded bg-muted-foreground/20" />
                        <div className="mt-2 h-4 w-1/2 rounded bg-muted-foreground/20" />
                        <div className="mt-4 h-16 w-full rounded bg-muted-foreground/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Özellikler
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Neden bizi tercih etmelisiniz?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Modern web teknolojileri ile geliştirilen çözümlerimiz, işletmenizin online varlığını güçlendirir.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow transition-all hover:shadow-lg">
                <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-primary/10 transition-all group-hover:scale-110" />
                <div className="relative">
                  <Laptop className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Responsive Tasarım</h3>
                  <p className="mt-2 text-muted-foreground">
                    Tüm cihazlarda mükemmel görünen, kullanıcı dostu arayüzler tasarlıyoruz.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow transition-all hover:shadow-lg">
                <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-primary/10 transition-all group-hover:scale-110" />
                <div className="relative">
                  <Code className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Modern Teknolojiler</h3>
                  <p className="mt-2 text-muted-foreground">
                    Next.js, React ve Tailwind CSS ile hızlı ve modern web uygulamaları geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow transition-all hover:shadow-lg">
                <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-primary/10 transition-all group-hover:scale-110" />
                <div className="relative">
                  <Globe className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">Global Erişim</h3>
                  <p className="mt-2 text-muted-foreground">
                    CDN altyapımız sayesinde dünyanın her yerinden hızlı erişim sağlayın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Referanslar
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Müşterilerimiz ne diyor?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Binlerce mutlu müşteri ile çalışmanın gururunu yaşıyoruz.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Avatar"
                    className="rounded-full border"
                    width={60}
                    height={60}
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Ahmet Yılmaz</h3>
                    <p className="text-sm text-muted-foreground">CEO, Tech Solutions</p>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-muted-foreground">
                  "Web sitemizi yeniledikten sonra dönüşüm oranlarımız %40 arttı. Profesyonel ekip ve mükemmel tasarım
                  için teşekkürler!"
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Avatar"
                    className="rounded-full border"
                    width={60}
                    height={60}
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Ayşe Kaya</h3>
                    <p className="text-sm text-muted-foreground">Marketing Director, E-Commerce Inc.</p>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-muted-foreground">
                  "Mobil uyumlu tasarım ve hızlı yükleme süreleri sayesinde kullanıcı deneyimimiz çok gelişti.
                  Kesinlikle tavsiye ediyorum!"
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Avatar"
                    className="rounded-full border"
                    width={60}
                    height={60}
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Mehmet Demir</h3>
                    <p className="text-sm text-muted-foreground">Founder, StartupX</p>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-muted-foreground">
                  "Başlangıçtan itibaren harika bir iş çıkardılar. Teknik bilgileri ve yaratıcı çözümleri ile projemizi
                  zamanında tamamladılar."
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Avatar"
                    className="rounded-full border"
                    width={60}
                    height={60}
                  />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Zeynep Aydın</h3>
                    <p className="text-sm text-muted-foreground">CTO, Digital Agency</p>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                      <StarIcon className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-muted-foreground">
                  "SEO dostu yapı ve performans optimizasyonları sayesinde arama motorlarında üst sıralara çıktık.
                  Harika bir iş ortağı!"
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Fiyatlandırma
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">İhtiyacınıza uygun planlar</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Her bütçeye uygun, ölçeklenebilir çözümler sunuyoruz.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="relative rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Başlangıç</h3>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Popüler</div>
                </div>
                <div className="mb-4 text-4xl font-bold">
                  ₺499<span className="text-sm font-normal text-muted-foreground">/ay</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>5 sayfa web sitesi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Responsive tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Temel SEO optimizasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>E-posta desteği</span>
                  </li>
                </ul>
                <Button className="w-full">Hemen Başlayın</Button>
              </div>
              <div className="relative rounded-lg border-2 border-primary bg-background p-6 shadow-sm">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  EN ÇOK TERCİH EDİLEN
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Profesyonel</h3>
                  <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary">
                    Tavsiye Edilen
                  </div>
                </div>
                <div className="mb-4 text-4xl font-bold">
                  ₺999<span className="text-sm font-normal text-muted-foreground">/ay</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>15 sayfa web sitesi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Responsive tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Gelişmiş SEO optimizasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>7/24 destek</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>İçerik yönetim sistemi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Sosyal medya entegrasyonu</span>
                  </li>
                </ul>
                <Button className="w-full">Şimdi Başvurun</Button>
              </div>
              <div className="relative rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Kurumsal</h3>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Özel</div>
                </div>
                <div className="mb-4 text-4xl font-bold">
                  ₺2499<span className="text-sm font-normal text-muted-foreground">/ay</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Sınırsız sayfa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Özel tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Premium SEO paketi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Öncelikli 7/24 destek</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>E-ticaret entegrasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Özel API entegrasyonları</span>
                  </li>
                </ul>
                <Button className="w-full">İletişime Geçin</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Hemen başlayın ve işletmenizi büyütün
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Modern, hızlı ve kullanıcı dostu web sitesi ile rekabette öne geçin.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Ücretsiz Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                İletişime Geçin
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold">AwesomeUI</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Hakkımızda
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              İletişim
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Gizlilik Politikası
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AwesomeUI. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
