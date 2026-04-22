import { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

type Role = "student" | "employer" | "partner" | null

const roles = [
  {
    id: "student" as Role,
    label: "Студент",
    description: "Хочу учиться и найти работу",
    icon: "GraduationCap",
  },
  {
    id: "employer" as Role,
    label: "Работодатель",
    description: "Ищу стажёров и молодых специалистов",
    icon: "Briefcase",
  },
  {
    id: "partner" as Role,
    label: "Партнёр",
    description: "Хочу сотрудничать с платформой",
    icon: "Handshake",
  },
]

const placeholders: Record<string, string> = {
  student: "Расскажи о себе: чему хочешь научиться, какие у тебя цели?",
  employer: "Расскажи о компании и какие специалисты вам нужны",
  partner: "Расскажи о предложении или задай вопрос",
}

export default function Start() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [role, setRole] = useState<Role>(null)

  useEffect(() => {
    const r = searchParams.get("role") as Role
    if (r && ["student", "employer", "partner"].includes(r)) setRole(r)
  }, [searchParams])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!role || !name || !email || !message) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      <GrainOverlay />

      {/* Gradient blobs */}
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
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 pt-4 md:px-12">
        {submitted ? (
          <div className="flex flex-col items-center gap-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
              <Icon name="CheckCircle" size={40} className="text-primary" />
            </div>
            <div>
              <h2 className="font-sans text-3xl font-semibold text-foreground mb-2">
                Заявка отправлена!
              </h2>
              <p className="text-foreground/60 max-w-sm">
                Мы получили твою заявку и свяжемся с тобой на{" "}
                <span className="text-primary">{email}</span> в ближайшее время.
              </p>
            </div>
            <MagneticButton variant="ghost" onClick={() => navigate("/")}>
              Вернуться на главную
            </MagneticButton>
          </div>
        ) : (
          <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Title */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                <p className="font-mono text-xs text-primary">Регистрация</p>
              </div>
              <h1 className="font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
                Начать
              </h1>
              <p className="mt-3 text-foreground/60">
                Выбери роль и оставь заявку — мы свяжемся с тобой
              </p>
            </div>

            {/* Role selector */}
            <div className="mb-8 grid grid-cols-3 gap-3">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 ${
                    role === r.id
                      ? "border-primary bg-primary/15 text-foreground"
                      : "border-border bg-card/50 text-foreground/60 hover:border-primary/40 hover:bg-card hover:text-foreground"
                  }`}
                >
                  <Icon
                    name={r.icon}
                    size={24}
                    className={role === r.id ? "text-primary" : ""}
                  />
                  <span className="font-sans text-sm font-medium">{r.label}</span>
                  <span className="hidden font-sans text-xs leading-tight text-foreground/50 md:block">
                    {r.description}
                  </span>
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs text-foreground/50 uppercase tracking-widest">
                    Имя
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    required
                    className="rounded-lg border border-border bg-card/50 px-4 py-3 font-sans text-sm text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-primary/50 focus:bg-card"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs text-foreground/50 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ivan@example.com"
                    required
                    className="rounded-lg border border-border bg-card/50 px-4 py-3 font-sans text-sm text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-primary/50 focus:bg-card"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs text-foreground/50 uppercase tracking-widest">
                  {role === "student"
                    ? "О себе"
                    : role === "employer"
                    ? "О компании"
                    : "Сообщение"}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    role
                      ? placeholders[role]
                      : "Сначала выбери роль выше..."
                  }
                  required
                  rows={4}
                  disabled={!role}
                  className="resize-none rounded-lg border border-border bg-card/50 px-4 py-3 font-sans text-sm text-foreground placeholder-foreground/30 outline-none transition-colors focus:border-primary/50 focus:bg-card disabled:opacity-40"
                />
              </div>

              <MagneticButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={!role || !name || !email || !message || loading}
                className="mt-2 w-full justify-center"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Icon name="Loader2" size={16} className="animate-spin" />
                    Отправляем...
                  </span>
                ) : (
                  "Отправить заявку"
                )}
              </MagneticButton>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}