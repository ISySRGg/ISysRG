import Image from "next/image"


export default function Page() {
  const galleryImages = [
    "/assets/images/haifest1.jpeg",
    "/assets/images/haifest2.jpeg",
    "/assets/images/haifest3.jpeg",
  ]

  return (
    <section className="container pt-6 pb-16">
      {/* Header */}
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Festival Inovasi Kesehatan (HAI FEST)
        </h1>
      </div>

      {/* Gallery Foto */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border transition hover:shadow-lg"
          >
            <Image
              src={img}
              alt={`HAI FEST ${index + 1}`}
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Informasi singkat */}
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-xl font-semibold">Tentang Acara</h2>

        <p className="text-muted-foreground">
          Festival Inovasi Kesehatan (Health Innovation Festival, HAI FEST)
          Tahun 2025 resmi dibuka pada Senin, 8 Desember 2025 di Balai Kartini,
          Jakarta. Mengusung tema “Innovate, Empower, Connect – Towards a
          Healthier Tomorrow: Generasi Sehat, Masa Depan Hebat, Dengan
          SATUSEHAT”, acara ini menghadirkan berbagai inovasi kesehatan dari
          institusi pendidikan, pemerintah, dan industri yang berkolaborasi
          untuk memperkuat transformasi kesehatan nasional.
        </p>
      </div>

    </section>
  )
}
