import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const projects = [
  {
    number: "01",
    company: "Яндекс",
    task: "Разработать систему рекомендаций для e-commerce платформы",
    category: "IT · Backend",
    format: "Стажировка",
    direction: "left",
  },
  {
    number: "02",
    company: "Сбер",
    task: "Провести анализ оттока клиентов и построить предиктивную модель",
    category: "Аналитика · ML",
    format: "Part-time",
    direction: "right",
  },
  {
    number: "03",
    company: "Авито",
    task: "Разработать дизайн-систему для мобильного приложения",
    category: "Дизайн · UI/UX",
    format: "Проект",
    direction: "left",
  },
  {
    number: "04",
    company: "Тинькофф",
    task: "Запустить digital-кампанию для нового банковского продукта",
    category: "Маркетинг",
    format: "Full-time",
    direction: "right",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Real Projects
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Реальные задачи от компаний</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; company: string; task: string; category: string; format: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-primary/30 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-primary/60 md:text-base">
          {project.number}
        </span>
        <div>
          <div className="mb-1 flex items-center gap-3">
            <h3 className="font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
              {project.company}
            </h3>
            <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary md:inline-block">
              {project.format}
            </span>
          </div>
          <p className="max-w-md font-mono text-xs text-foreground/50 md:text-sm">{project.task}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden font-mono text-xs text-foreground/40 md:block">{project.category}</span>
        <Icon name="ArrowRight" size={16} className="text-foreground/20 transition-colors group-hover:text-primary" />
      </div>
    </div>
  )
}
