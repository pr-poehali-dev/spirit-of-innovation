import { useNavigate } from "react-router-dom"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const team = [
  {
    name: "Скрипник Юлия",
    role: "Руководитель проекта",
    icon: "Star",
    initials: "ЮС",
  },
  {
    name: "Колесник Алина",
    role: "Главный разработчик",
    icon: "Code2",
    initials: "АК",
  },
  {
    name: "Матвеева Татьяна",
    role: "Маркетолог",
    icon: "Megaphone",
    initials: "ТМ",
  },
  {
    name: "Пичкалев Илья",
    role: "Начальник службы безопасности",
    icon: "Shield",
    initials: "ИП",
  },
]

export default function Team() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <GrainOverlay />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-md transition-all duration-300 hover:bg-primary/30">
            <span className="font-sans text-xl font-bold text-primary">S</span>
          </div>
          <span className="font-sans text-xl font-semibold tracking-tight text-foreground">
            SkillOrbit
          </span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-sans text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </button>
      </nav>

      {/* Main */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 md:px-12">
        <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <p className="font-mono text-xs text-primary">Люди</p>
            </div>
            <h1 className="font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Наша команда
            </h1>
            <p className="mt-3 text-foreground/60">
              Те, кто создаёт SkillOrbit каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {team.map((member, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-foreground/10 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/20 border border-primary/20">
                  <span className="font-sans text-base font-bold text-primary">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-base font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="font-mono text-xs text-foreground/50 mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <MagneticButton variant="primary" onClick={() => navigate("/start?role=student")}>
              Присоединиться
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => navigate("/")}>
              На главную
            </MagneticButton>
          </div>
        </div>
      </main>
    </div>
  )
}
