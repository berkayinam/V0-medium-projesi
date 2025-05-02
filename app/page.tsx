import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Server, Cpu, ArrowRight, Code, BarChart, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-[-1]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Modern <span className="text-primary">Cloud</span> ve <span className="text-primary">DevOps</span>{" "}
                Çözümleri
              </h1>
              <p className="text-xl text-muted-foreground">
                İşletmenizi dijital dönüşüm yolculuğunda destekleyen profesyonel çözümler sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/iletisim">Bizimle Çalışın</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/hizmetler">Hizmetlerimiz</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
              <div className="relative bg-background rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/hero-cloud.png"
                  alt="DertOps Cloud Solutions"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vizyon" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-lg text-muted-foreground">
              Teknoloji dünyasında öncü bir kuruluş olarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir
              ortak olmayı hedefliyoruz. Yenilikçi çözümlerimizle müşterilerimizin teknolojik altyapılarını
              güçlendirerek, onların rekabet avantajı elde etmelerini sağlıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/60 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/cloud-services.png" alt="Bulut Dönüşümü" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Bulut Dönüşümü</h3>
                <p className="text-muted-foreground">
                  İşletmenizin ihtiyaçlarına uygun bulut stratejileri geliştirerek, altyapınızı modernize ediyoruz.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/60 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/devops-culture.png" alt="DevOps Kültürü" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">DevOps Kültürü</h3>
                <p className="text-muted-foreground">
                  Geliştirme ve operasyon süreçlerinizi entegre ederek, yazılım geliştirme yaşam döngünüzü
                  hızlandırıyoruz.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/60 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/iot-solutions.png" alt="IoT Çözümleri" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">IoT Çözümleri</h3>
                <p className="text-muted-foreground">
                  Nesnelerin interneti teknolojileriyle işletmenize değer katacak akıllı sistemler tasarlıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="misyon" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-30"></div>
                <div className="relative bg-background rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/images/mission-team.png"
                    alt="DertOps Mission"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold">Misyonumuz</h2>
              <p className="text-lg text-muted-foreground">
                Müşterilerimize en yüksek kalitede teknoloji çözümleri sunarak, onların dijital dönüşüm yolculuklarında
                güvenilir bir ortak olmak. İnovasyon, uzmanlık ve müşteri odaklı yaklaşımımızla, işletmelerin teknolojik
                altyapılarını güçlendirerek sürdürülebilir büyümelerine katkıda bulunmak.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Güvenlik Odaklı</h3>
                    <p className="text-muted-foreground">
                      En yüksek güvenlik standartlarıyla sistemlerinizi koruyoruz.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sürekli İnovasyon</h3>
                    <p className="text-muted-foreground">
                      Teknolojik gelişmeleri yakından takip ederek çözümlerimizi sürekli geliştiriyoruz.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-1 rounded-full">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ölçülebilir Sonuçlar</h3>
                    <p className="text-muted-foreground">
                      Veriye dayalı yaklaşımımızla, yatırımınızın getirisini maksimize ediyoruz.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Examples Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projelerimiz</h2>
            <p className="text-lg text-muted-foreground">Müşterilerimize sunduğumuz çözümlerden bazı örnekler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden bg-background/60 backdrop-blur-sm">
              <div className="relative h-48">
                <Image src="/images/project-ecommerce.png" alt="E-Ticaret Projesi" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Ticaret Platformu</h3>
                <p className="text-muted-foreground mb-4">
                  Büyük ölçekli bir e-ticaret platformu için bulut altyapı optimizasyonu.
                </p>
                <Button variant="outline" size="sm" className="group" asChild>
                  <Link href="/projeler/1">
                    Detaylar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-background/60 backdrop-blur-sm">
              <div className="relative h-48">
                <Image src="/images/project-manufacturing.png" alt="Üretim Projesi" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Üretim İzleme Sistemi</h3>
                <p className="text-muted-foreground mb-4">
                  Üretim sektöründe faaliyet gösteren bir firma için IoT tabanlı izleme sistemi.
                </p>
                <Button variant="outline" size="sm" className="group" asChild>
                  <Link href="/projeler/2">
                    Detaylar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-background/60 backdrop-blur-sm">
              <div className="relative h-48">
                <Image src="/images/project-finance.png" alt="Finans Projesi" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Finans DevOps</h3>
                <p className="text-muted-foreground mb-4">
                  Finans sektöründe CI/CD pipeline ve DevOps süreçlerinin otomasyonu.
                </p>
                <Button variant="outline" size="sm" className="group" asChild>
                  <Link href="/projeler/3">
                    Detaylar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/projeler">
                Tüm Projelerimiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">İş Ortaklarımız</h2>
            <p className="text-lg text-muted-foreground">Güvenilir teknoloji partnerleriyle çalışıyoruz</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center p-4">
              <Image
                src="/images/partner-aws.png"
                alt="AWS Partner"
                width={160}
                height={80}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center p-4">
              <Image
                src="/images/partner-azure.png"
                alt="Microsoft Azure Partner"
                width={160}
                height={80}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center p-4">
              <Image
                src="/images/partner-google.png"
                alt="Google Cloud Partner"
                width={160}
                height={80}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center p-4">
              <Image
                src="/images/partner-kubernetes.png"
                alt="Kubernetes Partner"
                width={160}
                height={80}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
