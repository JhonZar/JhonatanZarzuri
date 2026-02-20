import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolio'
import { Globe, Menu, X, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'

export function Navbar() {
    const { i18n } = useTranslation()
    const { theme, setTheme } = useTheme()
    const lang = (i18n.language === 'en' ? 'en' : 'es') as 'en' | 'es'
    const t = portfolioData.translations[lang].nav
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsOpen(false)
    }

    const navItems = [
        { name: t.about, href: '#about' },
        { name: t.experience, href: '#experience' },
        { name: t.projects, href: '#projects' },
        { name: t.contact, href: '#contact' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter"
                >
                    <span className="text-foreground">JZ</span>
                    <span className="text-primary">.dev</span>
                </motion.div>

                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                        >
                            <span className="text-primary mr-1">0{i + 1}.</span>
                            {item.name}
                        </motion.a>
                    ))}

                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                            className="text-xs font-mono border border-border hover:bg-muted"
                        >
                            <Globe className="h-3 w-3 mr-2" />
                            {i18n.language === 'en' ? 'ES' : 'EN'}
                        </Button>
                    </div>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-muted-foreground hover:text-primary"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                        {isOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-0 left-0 w-full h-screen bg-background/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
                            <X className="w-8 h-8" />
                        </Button>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-[200px]">
                            <Button
                                variant="outline"
                                onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                                className="w-full font-mono text-sm border-border"
                            >
                                <Globe size={16} className="mr-2" />
                                {i18n.language === 'en' ? 'Español' : 'English'}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
