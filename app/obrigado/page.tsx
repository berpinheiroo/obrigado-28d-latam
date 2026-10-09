import { CheckCircle, Mail, Lock, ExternalLink, MessageCircle, Shield, Phone } from "lucide-react"

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="size-16 sm:size-20 md:size-24 rounded-full bg-cta-green/20 flex items-center justify-center">
              <CheckCircle className="size-9 sm:size-11 md:size-14 text-cta-green" aria-hidden="true" />
            </div>
          </div>

          {/* Congratulations Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-cta-green">¡FELICITACIONES!</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-balance">
            ¡Tu Desafío de 28 Días Comienza Ahora!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Tomaste una decisión que va a transformar tu vida. Bienvenido al
            <span className="text-cta-green font-semibold"> Desafío 28 Días</span>. Ahora formas parte de un grupo
            selecto de personas comprometidas con la evolución física y mental.
          </p>
        </div>
      </section>

      {/* Access Instructions Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-cta-green/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-balance">
              Cómo Acceder al <span className="text-cta-green">Desafío 28 Días</span>
            </h3>

            {/* Step 1 */}
            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="size-8 sm:size-10 rounded-full bg-cta-green/20 flex items-center justify-center shrink-0">
                <span className="text-cta-green font-bold text-sm sm:text-base">1</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-base sm:text-lg mb-2">Accede a la plataforma</h4>
                <a
                  href="https://sparta.cademi.com.br/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cta-green/10 border border-cta-green/30 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-cta-green active:bg-cta-green/20 sm:hover:bg-cta-green/20 transition-colors text-sm sm:text-base break-all"
                >
                  <ExternalLink className="size-4 sm:size-5 shrink-0" aria-hidden="true" />
                  <span className="font-medium">sparta.cademi.com.br/auth/login</span>
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="size-8 sm:size-10 rounded-full bg-cta-green/20 flex items-center justify-center shrink-0">
                <span className="text-cta-green font-bold text-sm sm:text-base">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base sm:text-lg mb-2">Inicia sesión con tus datos</h4>
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-2.5 sm:gap-3 bg-secondary/50 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3">
                    <Mail className="size-4 sm:size-5 text-cta-green shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <span className="text-muted-foreground text-xs sm:text-sm">Email:</span>
                      <p className="font-medium text-sm sm:text-base">El mismo email usado en la compra</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 bg-secondary/50 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3">
                    <Lock className="size-4 sm:size-5 text-cta-green shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-muted-foreground text-xs sm:text-sm">Contraseña:</span>
                      <p className="font-mono font-bold text-base sm:text-lg text-cta-green">#sparta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="size-8 sm:size-10 rounded-full bg-cta-green/20 flex items-center justify-center shrink-0">
                <span className="text-cta-green font-bold text-sm sm:text-base">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">Comienza tu transformación</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Explora los entrenamientos, conéctate con la comunidad e inicia tu ¡Desafío de 28 Días!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href="https://sparta.cademi.com.br/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse inline-block w-full py-3.5 sm:py-4 px-5 sm:px-8 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg text-center bg-cta-green active:bg-cta-green-hover sm:hover:bg-cta-green-hover text-white transition-all duration-300 active:scale-[0.98] sm:hover:scale-[1.02] min-h-[52px] sm:min-h-[56px]"
              >
                ACCEDER AL DESAFÍO 28 DÍAS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="size-12 sm:size-14 rounded-full bg-cta-green/20 flex items-center justify-center">
                <MessageCircle className="size-6 sm:size-7 text-cta-green" aria-hidden="true" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">¿Necesitas Ayuda?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              Nuestro equipo de soporte está listo para ayudarte con cualquier duda.
            </p>
            <a
              href="mailto:suporte@floripacalistenia.com.br"
              className="inline-flex items-center gap-2 text-cta-green active:text-cta-green-hover sm:hover:text-cta-green-hover transition-colors font-medium text-sm sm:text-base break-all"
            >
              <Mail className="size-4 sm:size-5 shrink-0" aria-hidden="true" />
              suporte@floripacalistenia.com.br
            </a>
            <div className="mt-4">
              <a
                href="https://wa.me/5548961369727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta-green active:bg-cta-green-hover sm:hover:bg-cta-green-hover text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm sm:text-base"
              >
                <Phone className="size-4 sm:size-5 shrink-0" aria-hidden="true" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <Shield className="size-8 sm:size-10 text-cta-green" aria-hidden="true" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-balance">
            Eres Parte del <span className="text-cta-green">Desafío 28 Días</span>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            En 28 días vas a descubrir hasta dónde puede llegar tu cuerpo usando solo tu peso. Sin gimnasio, sin
            equipos — solo movimiento, constancia y progresión real en calistenia.
            <span className="block mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-foreground">
              28 días. Un reto. Tu mejor versión. ¡Arrancamos!
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-cta-green font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Floripa Calistenia</p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Transformando vidas a través del movimiento desde 2019
          </p>
        </div>
      </footer>
    </main>
  )
}
