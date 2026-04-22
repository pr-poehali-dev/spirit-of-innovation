import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const directions = [
  {
    title: "IT-разработка",
    icon: "Code2",
    description: "Backend, frontend, мобильные приложения, DevOps. Работай над реальными продуктами в ведущих командах",
    professions: ["Frontend Developer", "Python Backend", "iOS/Android", "DevOps"],
    direction: "top",
    color: "text-blue-400",
  },
  {
    title: "Аналитика & Data",
    icon: "BarChart3",
    description: "Data Science, бизнес-аналитика, ML. Решай настоящие бизнес-задачи с реальными данными",
    professions: ["Data Analyst", "Data Scientist", "BI-аналитик", "Product Analyst"],
    direction: "right",
    color: "text-emerald-400",
  },
  {
    title: "Дизайн",
    icon: "Pen",
    description: "UI/UX, продуктовый дизайн, графика. Создавай интерфейсы для компаний из Forbes 500",
    professions: ["UI/UX Designer", "Product Designer", "Motion", "Brand"],
    direction: "left",
    color: "text-purple-400",
  },
  {
    title: "Маркетинг",
    icon: "Megaphone",
    description: "Digital-маркетинг, SMM, performance. Запускай кампании с реальным бюджетом от работодателей",
    professions: ["Performance", "SMM-специалист", "SEO", "Контент"],
    direction: "bottom",
    color: "text-pink-400",
  },
  {
    title: "Управление",
    icon: "Briefcase",
    description: "Project management, продуктовое мышление, Agile. Веди реальные проекты с командой",
    professions: ["Project Manager", "Product Manager", "Scrum Master", "Team Lead"],
    direction: "top",
    color: "text-orange-400",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Направления
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Выбери свой путь</p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {directions.map((dir, i) => (
            <DirectionCard key={i} dir={dir} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DirectionCard({
  dir,
  index,
  isVisible,
}: {
  dir: { title: string; icon: string; description: string; professions: string[]; direction: string; color: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (dir.direction) {
        case "left": return "-translate-x-16 opacity-0"
        case "right": return "translate-x-16 opacity-0"
        case "top": return "-translate-y-16 opacity-0"
        case "bottom": return "translate-y-16 opacity-0"
        default: return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group cursor-pointer rounded-xl border border-foreground/10 bg-foreground/5 p-4 transition-all duration-700 hover:border-primary/30 hover:bg-primary/5 md:p-5 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`mb-3 ${dir.color}`}>
        <Icon name={dir.icon as "Code2"} size={28} fallback="CircleAlert" />
      </div>
      <h3 className="mb-2 font-sans text-base font-medium text-foreground md:text-lg">{dir.title}</h3>
      <p className="mb-3 hidden text-xs leading-relaxed text-foreground/60 md:block">{dir.description}</p>
      <div className="flex flex-col gap-1">
        {dir.professions.map((prof) => (
          <span key={prof} className="font-mono text-xs text-foreground/40 transition-colors group-hover:text-foreground/60">
            → {prof}
          </span>
        ))}
      </div>
    </div>
  )
}
