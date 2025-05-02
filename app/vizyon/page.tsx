import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function VisionPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Vizyonumuz</h1>
            <p className="text-lg text-muted-foreground">
              Teknoloji dünyasında öncü bir kuruluş olarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir
              ortak olmayı hedefliyoruz.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10" />
            <Image
              src="/images/vision-banner.png"
              alt="DertOps Vision"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white shadow-sm">Geleceği Şekillendiriyoruz</h2>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p>
              DertOps olarak vizyonumuz, teknoloji dünyasında öncü bir kuruluş olarak, işletmelerin dijital dönüşüm
              süreçlerinde güvenilir bir ortak olmaktır. Yenilikçi çözümlerimizle müşterilerimizin teknolojik
              altyapılarını güçlendirerek, onların rekabet avantajı elde etmelerini sağlıyoruz.
            </p>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/vision-innovation.png" alt="İnovasyon" fill className="object-cover" />
              </div>
              <div>
                <p>
                  Bulut bilişim, DevOps ve IoT alanlarındaki uzmanlığımızla, işletmelerin karşılaştığı teknolojik
                  zorlukları aşmalarına yardımcı oluyoruz. Müşterilerimizin ihtiyaçlarını anlamak, onlara özel çözümler
                  sunmak ve uzun vadeli iş ortaklıkları kurmak için çalışıyoruz.
                </p>
              </div>
            </div>

            <h3>Değerlerimiz</h3>

            <ul>
              <li>
                <strong>İnovasyon:</strong> Sürekli olarak yeni teknolojileri araştırıyor ve müşterilerimize en
                yenilikçi çözümleri sunuyoruz.
              </li>
              <li>
                <strong>Kalite:</strong> Her projede en yüksek kalite standartlarını uygulayarak, müşterilerimize
                güvenilir ve dayanıklı sistemler sunuyoruz.
              </li>
              <li>
                <strong>İşbirliği:</strong> Müşterilerimizle yakın işbirliği içinde çalışarak, onların ihtiyaçlarını tam
                olarak anlıyor ve bu doğrultuda çözümler geliştiriyoruz.
              </li>
              <li>
                <strong>Sürdürülebilirlik:</strong> Çevresel etkimizi minimize eden ve uzun vadeli değer yaratan
                çözümler sunmayı hedefliyoruz.
              </li>
            </ul>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3>Hedeflerimiz</h3>
                <p>
                  Önümüzdeki beş yıl içinde, Türkiye'nin önde gelen teknoloji çözümleri sağlayıcılarından biri olmayı
                  hedefliyoruz. Uluslararası pazarlara açılarak, global ölçekte hizmet vermeyi ve dünya çapında tanınan
                  bir marka olmayı amaçlıyoruz.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/vision-goals.png" alt="Hedefler" fill className="object-cover" />
              </div>
            </div>

            <p>
              Ayrıca, teknoloji ekosistemine katkıda bulunmak için açık kaynak projelerine destek veriyor ve genç
              yeteneklerin gelişimine yardımcı oluyoruz. Teknoloji topluluğu içinde aktif bir rol oynayarak, bilgi
              paylaşımını teşvik ediyor ve sektörün gelişimine katkıda bulunuyoruz.
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Neden DertOps?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Uzman Ekip</h4>
                  <p className="text-muted-foreground">
                    Alanında uzman, deneyimli ve sürekli kendini geliştiren bir ekibe sahibiz.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Özelleştirilmiş Çözümler</h4>
                  <p className="text-muted-foreground">
                    Her işletmenin kendine özgü ihtiyaçlarına uygun çözümler geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Sürekli Destek</h4>
                  <p className="text-muted-foreground">
                    7/24 teknik destek ve bakım hizmetleriyle müşterilerimizin yanındayız.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Yenilikçi Yaklaşım</h4>
                  <p className="text-muted-foreground">
                    En son teknolojileri takip ederek, müşterilerimize rekabet avantajı sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Vizyonumuzu Paylaşıyor musunuz?</h3>
            <p className="text-muted-foreground mb-6">
              Teknolojik dönüşüm yolculuğunuzda size yardımcı olmak için buradayız.
            </p>
            <Button size="lg" asChild>
              <Link href="/iletisim" className="group">
                Bizimle İletişime Geçin
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
