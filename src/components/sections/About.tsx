import { useTranslation } from 'react-i18next'
import { portfolioData } from '@/data/portfolio'

export function About() {
    const { i18n } = useTranslation()
    const lang = (i18n.language === 'en' ? 'en' : 'es') as 'en' | 'es'
    const t = portfolioData.translations[lang].about

    const skills = ["React", "TypeScript", "Laravel", "Django", "PostgreSQL", "Tailwind CSS", "AWS", "Testing"]

    return (
        <section id="about" className="py-32 max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
                    <span className="text-primary font-mono text-xl mr-2">01.</span>
                    {t.title}
                </h2>
                <div className="h-[1px] w-full bg-border" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                    <p>{t.p1}</p>
                    <p>{t.p2}</p>

                    <div>
                        <p className="text-sm font-mono text-primary mb-4">{t.skillsTitle}</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
                            {skills.map(skill => (
                                <li key={skill} className="flex items-center gap-2">
                                    <span className="text-primary text-xs">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile profile pic (hidden on desktop because it's in Hero) */}
                <div className="lg:hidden">
                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={portfolioData.profile.avatar} alt={portfolioData.profile.name} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}
