import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { ProfileImage } from './ProfileImage'
import { Background3D } from './Background3D'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
    const { i18n } = useTranslation()
    const lang = (i18n.language === 'en' ? 'en' : 'es') as 'en' | 'es'
    const t = portfolioData.translations[lang].hero

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center lg:items-start max-w-5xl mx-auto px-6 pt-32 pb-20 overflow-hidden">
            <Background3D />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block text-primary font-mono text-sm mb-4 tracking-tighter">
                        {t.greeting}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                        {portfolioData.profile.name}
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-muted-foreground mb-8 leading-tight">
                        {t.subtitle}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
                        {t.description}
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12">
                            <Mail className="mr-2 h-4 w-4" /> Get in Touch
                        </Button>

                        <div className="flex gap-4">
                            <a href={portfolioData.profile.socials.github} target="_blank" className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all text-muted-foreground">
                                <Github size={20} />
                            </a>
                            <a href={portfolioData.profile.socials.linkedin} target="_blank" className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all text-muted-foreground">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="hidden lg:block relative z-10"
                >
                    <ProfileImage />
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full" />
        </section>
    )
}
