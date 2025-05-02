import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Berkay İnam",
      role: "DevOps Engineer",
      bio: "Berkay, 42 Ecole İstanbul'da Software ve Computer Engineering eğitimi almaktadır. Yüksek öğreniminde C, C++ (98 standard), Containerization, Django Backend API ve Linux üzerine yoğunlaşmıştır. Algoritma düşünebilen ve pratik çözümler üretebilen bir mühendis olma yolunda ilerlemektedir.",
      image: "/images/team-berkay.png",
      github: "https://github.com/berkayinam",
      linkedin: "https://www.linkedin.com/in/berkay-inam-b16b391ba/",
      email: "berkay_inam@hotmail.com",
    },
    {
      id: 2,
      name: "Adem Berke Nargul",
      role: "Cloud Solutions Architect",
      bio: "Adem, bulut mimarisi ve çözümleri konusunda uzmanlaşmış bir mühendistir. AWS ve Azure platformlarında geniş deneyime sahiptir ve müşterilere ölçeklenebilir, güvenli ve maliyet etkin bulut stratejileri sunmaktadır.",
      image: "/images/team-adem.png",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "adem@dertops.com",
    },
    {
      id: 3,
      name: "Melih Karagöz",
      role: "IoT Specialist",
      bio: "Melih, IoT teknolojileri ve akıllı sistemler konusunda uzmanlaşmıştır. Sensör ağları, veri toplama ve analiz sistemleri tasarlayarak endüstriyel süreçlerin optimizasyonuna katkıda bulunmaktadır.",
      image: "/images/team-melih.png",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "melih@dertops.com",
    },
    {
      id: 4,
      name: "Mehmet Eren Akbulut",
      role: "Backend Developer",
      bio: "Eren, güçlü backend sistemleri ve API'ler geliştirme konusunda uzmanlaşmıştır. Mikroservis mimarileri ve veritabanı optimizasyonu konularında derin bilgiye sahiptir.",
      image: "/images/team-eren.png",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "eren@dertops.com",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ekibimiz</h1>
          <p className="text-lg text-muted-foreground">
            DertOps'un arkasındaki uzman ekiple tanışın. Teknoloji tutkunu profesyonellerden oluşan ekibimiz,
            müşterilerimize en iyi çözümleri sunmak için çalışıyor.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden mb-12 h-64 md:h-80">
          <Image src="/images/team-banner.png" alt="DertOps Team" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white shadow-sm max-w-md">Uzman Ekibimizle Tanışın</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden bg-background/60 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <Link
                    href={member.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Ekip Kültürümüz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                DertOps'ta işbirliği, sürekli öğrenme ve inovasyonu teşvik eden bir kültür oluşturmaya önem veriyoruz.
                Ekip üyelerimizin kişisel ve profesyonel gelişimlerini destekliyor, onların potansiyellerini en üst
                düzeye çıkarmalarına yardımcı oluyoruz.
              </p>
              <p className="text-muted-foreground">
                Açık iletişim, karşılıklı saygı ve ortak hedeflere olan bağlılık, ekip kültürümüzün temel taşlarını
                oluşturuyor. Bu değerler doğrultusunda, müşterilerimize en iyi hizmeti sunmak için birlikte çalışıyoruz.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/team-culture.png" alt="Ekip Kültürü" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
