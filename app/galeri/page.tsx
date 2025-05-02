import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Cloud Migration Project",
      description: "Enterprise cloud migration for a financial services company",
      image: "/images/gallery-cloud-migration.png",
    },
    {
      id: 2,
      title: "DevOps Implementation",
      description: "CI/CD pipeline setup for a software development team",
      image: "/images/gallery-devops.png",
    },
    {
      id: 3,
      title: "IoT Monitoring System",
      description: "Smart factory monitoring solution with real-time analytics",
      image: "/images/gallery-iot.png",
    },
    {
      id: 4,
      title: "Kubernetes Deployment",
      description: "Container orchestration for a microservices architecture",
      image: "/images/gallery-kubernetes.png",
    },
    {
      id: 5,
      title: "Team Building Event",
      description: "Annual team retreat focused on innovation and collaboration",
      image: "/images/gallery-team-event.png",
    },
    {
      id: 6,
      title: "Tech Conference",
      description: "DertOps presenting at a major technology conference",
      image: "/images/gallery-conference.png",
    },
    {
      id: 7,
      title: "Client Workshop",
      description: "Knowledge sharing session with enterprise clients",
      image: "/images/gallery-workshop.png",
    },
    {
      id: 8,
      title: "Office Space",
      description: "Our modern collaborative workspace in Istanbul",
      image: "/images/gallery-office.png",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Galeri</h1>
          <p className="text-lg text-muted-foreground">Projelerimizden ve etkinliklerimizden görüntüler</p>
        </div>

        <div className="relative rounded-xl overflow-hidden mb-12 h-64">
          <Image src="/images/gallery-banner.png" alt="Galeri" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white shadow-sm max-w-md">
                Çalışmalarımızdan Kareler
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
