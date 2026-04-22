import { useReveal } from "@/hooks/use-reveal"
import { useNavigate } from "react-router-dom"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Контакты
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Свяжитесь с нами</p>
        </div>

        <div
          className={`mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <a
            href="mailto:hello@skillorbit.ru"
            className="group flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/5 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 transition-all duration-300 group-hover:bg-primary/30">
              <Icon name="Mail" size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-mono text-xs text-foreground/50 mb-0.5">Email</p>
              <p className="font-sans text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                hello@skillorbit.ru
              </p>
            </div>
          </a>

          <a
            href="tel:+79999999999"
            className="group flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/5 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 transition-all duration-300 group-hover:bg-primary/30">
              <Icon name="Phone" size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-mono text-xs text-foreground/50 mb-0.5">Телефон</p>
              <p className="font-sans text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                +7 (999) 999 99 99
              </p>
            </div>
          </a>
        </div>

        <div
          className={`flex flex-wrap gap-3 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => navigate("/start?role=student")}>
            Начать обучение
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => navigate("/start?role=employer")}>
            Стать работодателем
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
