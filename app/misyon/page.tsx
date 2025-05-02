import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Users, Shield, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MissionPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Misyonumuz</h1>
            <p className="text-lg text-muted-foreground">
              Müşterilerimize en yüksek kalitede teknoloji çözümleri sunarak, onların dijital dönüşüm yolculuklarında
              güvenilir bir ortak olmak.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 z-10" />
            <Image
              src="/images/mission-banner.png"
              alt="DertOps Mission"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white shadow-sm">Teknoloji ile Değer Yaratıyoruz</h2>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p>
              DertOps olarak misyonumuz, müşterilerimize en yüksek kalitede teknoloji çözümleri sunarak, onların dijital
              dönüşüm yolculuklarında güvenilir bir ortak olmaktır. İnovasyon, uzmanlık ve müşteri odaklı
              yaklaşımımızla, işletmelerin teknolojik altyapılarını güçlendirerek sürdürülebilir büyümelerine katkıda
              bulunuyoruz.
            </p>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/mission-expertise.png" alt="Uzmanlık" fill className="object-cover" />
              </div>
              <div>
                <p>
                  Bulut bilişim, DevOps ve IoT alanlarındaki derin bilgi ve deneyimimizle, müşterilerimizin karşılaştığı
                  karmaşık teknolojik zorlukları çözüyor ve onlara rekabet avantajı sağlıyoruz. Her müşterimizin
                  benzersiz ihtiyaçlarını anlamak için zaman ayırıyor ve bu doğrultuda özelleştirilmiş çözümler
                  sunuyoruz.
                </p>
              </div>
            </div>

            <h3>Temel İlkelerimiz</h3>

            <ul>
              <li>
                <strong>Müşteri Odaklılık:</strong> Müşterilerimizin ihtiyaçlarını ve beklentilerini anlamak, bizim için
                her şeyden önce gelir.
              </li>
              <li>
                <strong>Mükemmellik:</strong> Her projede en yüksek kalite standartlarını uygulayarak, müşterilerimize
                üstün hizmet sunmayı hedefliyoruz.
              </li>
              <li>
                <strong>Sürekli Öğrenme:</strong> Teknoloji dünyasındaki hızlı değişimlere ayak uydurmak için sürekli
                olarak kendimizi geliştiriyor ve yeni beceriler ediniyoruz.
              </li>
              <li>
                <strong>Etik Değerler:</strong> Tüm iş süreçlerimizde dürüstlük, şeffaflık ve etik değerlere bağlı
                kalıyoruz.
              </li>
            </ul>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3>Taahhüdümüz</h3>
                <p>
                  Müşterilerimize sunduğumuz her çözümde, onların uzun vadeli başarısını göz önünde bulunduruyoruz.
                  Sadece güncel ihtiyaçları karşılamakla kalmıyor, gelecekteki büyüme ve gelişim planlarını da
                  destekleyen ölçeklenebilir sistemler tasarlıyoruz.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/mission-commitment.png" alt="Taahhüdümüz" fill className="object-cover" />
              </div>
            </div>

            <p>
              Ayrıca, çevresel sürdürülebilirliğe olan bağlılığımız doğrultusunda, enerji verimli ve çevre dostu
              teknolojileri tercih ediyor ve karbon ayak izimizi minimize etmek için çalışıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Stratejik Yaklaşım</h3>
                <p className="text-muted-foreground">
                  İşletmenizin hedeflerine ulaşmasını sağlayacak stratejik teknoloji çözümleri geliştiriyoruz.
                </p>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image src="/images/mission-strategy.png" alt="Stratejik Yaklaşım" fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">İşbirliği</h3>
                <p className="text-muted-foreground">
                  Müşterilerimizle yakın işbirliği içinde çalışarak, onların ihtiyaçlarını tam olarak anlıyor ve bu
                  doğrultuda çözümler geliştiriyoruz.
                </p>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image src="/images/mission-collaboration.png" alt="İşbirliği" fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Güvenlik</h3>
                <p className="text-muted-foreground">
                  En yüksek güvenlik standartlarını uygulayarak, müşterilerimizin verilerini ve sistemlerini koruyoruz.
                </p>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image src="/images/mission-security.png" alt="Güvenlik" fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ölçülebilir Sonuçlar</h3>
                <p className="text-muted-foreground">
                  Veriye dayalı yaklaşımımızla, yatırımınızın getirisini maksimize ediyor ve ölçülebilir sonuçlar
                  sunuyoruz.
                </p>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image src="/images/mission-results.png" alt="Ölçülebilir Sonuçlar" fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Nasıl Çalışıyoruz?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Keşif ve Analiz</h4>
                      <p className="text-muted-foreground">
                        İşletmenizin ihtiyaçlarını, hedeflerini ve mevcut teknolojik altyapısını detaylı bir şekilde
                        analiz ediyoruz.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Strateji Geliştirme</h4>
                      <p className="text-muted-foreground">
                        Analiz sonuçlarına dayanarak, işletmenizin hedeflerine ulaşmasını sağlayacak özelleştirilmiş bir
                        teknoloji stratejisi geliştiriyoruz.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Uygulama</h4>
                      <p className="text-muted-foreground">
                        Belirlenen stratejiyi, en yüksek kalite standartlarını uygulayarak hayata geçiriyoruz.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sürekli İyileştirme</h4>
                      <p className="text-muted-foreground">
                        Uygulama sonrası performansı sürekli olarak izliyor ve gerektiğinde iyileştirmeler yapıyoruz.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/images/mission-workflow.png" alt="Çalışma Sürecimiz" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Misyonumuzu Paylaşıyor musunuz?</h3>
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
