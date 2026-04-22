import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const steps = [
  { num: "01", title: "Выбираешь направление", desc: "IT, аналитика, дизайн, маркетинг или управление" },
  { num: "02", title: "Проходишь Skill Map", desc: "Персональный план развития и оценка текущих навыков" },
  { num: "03", title: "Выполняешь реальные проекты", desc: "Задачи от компаний с настоящими требованиями" },
  { num: "04", title: "Получаешь оффер", desc: "Full-time, part-time, стажировка, удалёнка или проект" },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Как это
                <br />
                работает
                <br />
                <span className="text-primary">на практике</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                SkillOrbit — первая платформа, где обучение неотделимо от трудоустройства. Ты учишься, решая задачи реальных компаний.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                Работодатели наблюдают за твоим прогрессом и делают офферы ещё в процессе обучения.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            {steps.map((step, i) => {
              const getRevealClass = () => {
                if (!isVisible) return i % 2 === 0 ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                return "translate-x-0 opacity-100"
              }
              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 border-l-2 border-primary/30 pl-4 transition-all duration-700 hover:border-primary md:gap-6 md:pl-6`
                    + ` ${getRevealClass()}`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <span className="font-mono text-xs text-primary/60 mt-1">{step.num}</span>
                  <div>
                    <div className="font-sans text-sm font-medium text-foreground md:text-base">{step.title}</div>
                    <div className="font-mono text-xs text-foreground/50">{step.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-12 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Начать обучение
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
            Смотреть проекты
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
