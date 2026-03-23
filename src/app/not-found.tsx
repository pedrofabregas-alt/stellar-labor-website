import Button from '@/components/ui/Button'
import StarMotif from '@/components/brand/StarMotif'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream">
      <div className="max-w-md mx-auto px-5 text-center">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-serif text-stone">404</span>
          <StarMotif size={20} className="text-emerald absolute -top-2 -right-4" />
        </div>
        <h1 className="text-3xl text-ink mb-4">Page Not Found</h1>
        <p className="text-ink-subtle">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}
