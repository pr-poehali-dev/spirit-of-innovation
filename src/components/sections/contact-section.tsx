import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const graduates = [
  { name: "Алексей М.", role: "Frontend Developer", company: "Яндекс", format: "Full-time", direction: "IT" },
  { name: "Мария К.", role: "Data Analyst", company: "Сбер", format: "Стажировка → Оффер", direction: "Аналитика" },
  { name: "Дмитрий Л.", role: "Product Designer", company: "Авито", format: "Part-time", direction: "Дизайн" },
  { name: "Анна Р.", role: "Performance Marketer", company: "Ozon", format: "Удалёнка", direction: "Маркетинг" },
  { name: "Иван С.", role: "Project Manager", company: "VK", format: "Full-time", direction: "Управление" },
  { name: "Ольга П.", role: "ML Engineer", company: "Tinkoff", format: "Проект → Оффер", direction: "Аналитика" },
]

const filterTabs = ["Все", "IT", "Аналитика", "Дизайн", "Маркетинг", "Управление"]

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [activeFilter, setActiveFilter] = useState("Все")

  const filtered = activeFilter === "Все"
    ? graduates
    : graduates.filter((g) => g.direction === activeFilter)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Выпускники
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Они уже работают</p>
        </div>

        <div
          className={`mb-6 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200 ${
                activeFilter === tab
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-foreground/20 text-foreground/50 hover:border-foreground/40 hover:text-foreground/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {filtered.map((g, i) => (
            <div
              key={i}
              className="group rounded-xl border border-foreground/10 bg-foreground/5 p-3 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 md:p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-sans text-xs font-bold text-primary">
                  {g.name[0]}
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{g.name}</p>
                  <p className="font-mono text-xs text-foreground/50">{g.direction}</p>
                </div>
              </div>
              <p className="font-sans text-xs text-foreground/80 md:text-sm">{g.role}</p>
              <p className="font-mono text-xs text-foreground/50">{g.company}</p>
              <span className="mt-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                {g.format}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 md:mt-8 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <MagneticButton size="lg" variant="primary">
            Начать обучение
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary">
            Стать работодателем
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
