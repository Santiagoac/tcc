import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
  id="introduction"
  aria-label="Introduction"
  className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
>
  <Container className="text-lg tracking-tight text-slate-700">
    <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
      "Tal Cual Capital: Tu socio financiero confiable para el crecimiento empresarial"
    </p>
    <p className="mt-4">
      En Tal Cual Capital entendemos las necesidades financieras de las pymes. Nuestro objetivo es brindarte soluciones financieras adaptadas a tus requerimientos para impulsar el crecimiento de tu empresa.
    </p>
    <p className="mt-4">
      ¿Necesitas financiamiento para expandir tu negocio, invertir en activos o gestionar tu flujo de efectivo? Nosotros te ayudamos. Nuestro equipo de expertos financieros está listo para ofrecerte asesoramiento personalizado y soluciones financieras flexibles.
    </p>
    <p className="mt-4">
      En Tal Cual Capital, te enseñamos cómo aprovechar al máximo tus recursos financieros y tomar decisiones acertadas. Aprenderás a optimizar tu presupuesto, administrar tus deudas y establecer estrategias financieras sólidas.
    </p>
    <ul role="list" className="mt-8 space-y-3">
      {[
        'Financiamiento a medida para tus necesidades específicas',
        'Tasas competitivas y plazos flexibles',
        'Asesoramiento financiero personalizado',
        'Rápido proceso de solicitud y aprobación',
        'Transparencia y confidencialidad en cada transacción',
      ].map((feature) => (
        <li key={feature} className="flex">
          <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
          <span className="ml-4">{feature}</span>
        </li>
      ))}
    </ul>
    <p className="mt-8">
      Confía en Tal Cual Capital para satisfacer tus necesidades financieras y potenciar el crecimiento de tu empresa. Estamos comprometidos con tu éxito empresarial.
    </p>
    <p className="mt-10">
      <Link
        href="#contact"
        className="text-base font-medium text-blue-600 hover:text-blue-800"
      >
        Contáctanos ahora para conocer cómo podemos ayudarte {' '}
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </p>
  </Container>
</section>
  )
}
