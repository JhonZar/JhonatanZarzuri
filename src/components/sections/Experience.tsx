import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { useState } from 'react'

export function Experience() {
    const { i18n } = useTranslation()
    const lang = (i18n.language === 'en' ? 'en' : 'es') as 'en' | 'es'
    const t = portfolioData.translations[lang].experience
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section id="experience" className="py-32 max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
                    <span className="text-primary font-mono text-xl mr-2">02.</span>
                    {t.title}
                </h2>
                <div className="h-[1px] w-full bg-border" />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border min-w-[160px]">
                    {t.items.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-4 py-3 text-sm font-mono text-left transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap
                ${activeTab === i
                                    ? 'text-primary border-primary bg-primary/5'
                                    : 'text-muted-foreground border-transparent hover:text-foreground hover:bg-muted'}`}
                        >
                            {item.company}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 min-h-[300px]">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-bold text-foreground">
                            {t.items[activeTab].role} <span className="text-primary">@ {t.items[activeTab].company}</span>
                        </h3>
                        <p className="text-sm font-mono text-muted-foreground mb-6">{t.items[activeTab].period}</p>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {t.items[activeTab].description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {t.items[activeTab].tech.map(tech => (
                                <span key={tech} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
