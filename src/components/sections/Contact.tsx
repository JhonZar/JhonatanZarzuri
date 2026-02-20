import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolio'

export function Contact() {
    const { i18n } = useTranslation()

    return (
        <section id="contact" className="py-40 max-w-2xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <span className="text-primary font-mono text-sm mb-4 inline-block tracking-widest uppercase">04. What's Next?</span>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Get In Touch</h2>
                <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
                    {i18n.language === 'en'
                        ? "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
                        : "Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré lo posible por responderte!"}
                </p>

                <a href={`mailto:${portfolioData.profile.email}`}>
                    <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 px-12 h-16 text-lg font-mono transition-all duration-300">
                        Say Hello
                    </Button>
                </a>
            </motion.div>

            <div className="mt-24 flex justify-center gap-8 text-muted-foreground">
                {Object.entries(portfolioData.profile.socials).map(([key, url]) => (
                    <a key={key} href={url} target="_blank" className="hover:text-primary transition-colors uppercase font-mono text-[10px] tracking-[0.2em]">{key}</a>
                ))}
            </div>
        </section>
    )
}
