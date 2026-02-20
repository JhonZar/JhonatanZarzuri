import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Folder, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export function Projects() {
    const { i18n } = useTranslation()
    const lang = (i18n.language === 'en' ? 'en' : 'es') as 'en' | 'es'
    const t = portfolioData.translations[lang].projects

    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    const openGallery = (projectIndex: number) => {
        setSelectedProject(projectIndex)
        setCurrentImgIndex(0)
    }

    const closeGallery = () => {
        setSelectedProject(null)
    }

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        const project = t.items[selectedProject!]
        if (project.images) {
            setCurrentImgIndex((prev) => (prev + 1) % project.images!.length)
        }
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        const project = t.items[selectedProject!]
        if (project.images) {
            setCurrentImgIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length)
        }
    }

    return (
        <section id="projects" className="py-32 max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
                    <span className="text-primary font-mono text-xl mr-2">03.</span>
                    {t.title}
                </h2>
                <div className="h-[1px] w-full bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.items.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-card backdrop-blur-sm border border-border p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-muted flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Folder size={24} />
                            </div>
                        </div>

                        {/* Project Image Preview (if available) */}
                        {project.images && project.images.length > 0 && (
                            <div
                                className="relative mb-6 overflow-hidden rounded-xl aspect-[16/9] cursor-pointer group/img"
                                onClick={() => openGallery(i)}
                            >
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-background/80 p-2 rounded-full text-primary backdrop-blur-sm">
                                        <Maximize2 size={24} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                            {project.tech.map(tech => (
                                <span key={tech} className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Premium Lightbox Gallery */}
            <AnimatePresence>
                {selectedProject !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={closeGallery}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-primary transition-colors z-50"
                            onClick={closeGallery}
                        >
                            <X size={32} />
                        </button>

                        <div
                            className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[70vh] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImgIndex}
                                        src={t.items[selectedProject].images![currentImgIndex]}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                                    />
                                </AnimatePresence>

                                {t.items[selectedProject].images!.length > 1 && (
                                    <>
                                        <button
                                            className="absolute left-0 md:-left-16 p-3 rounded-full bg-card/50 border border-border text-foreground hover:text-primary hover:border-primary transition-all"
                                            onClick={prevImage}
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            className="absolute right-0 md:-right-16 p-3 rounded-full bg-card/50 border border-border text-foreground hover:text-primary hover:border-primary transition-all"
                                            onClick={nextImage}
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="text-center">
                                <h4 className="text-xl font-bold text-foreground">{t.items[selectedProject].title}</h4>
                                <p className="text-muted-foreground font-mono text-sm mt-1">
                                    {currentImgIndex + 1} / {t.items[selectedProject].images!.length}
                                </p>
                            </div>

                            <div className="flex gap-2 overflow-x-auto pb-2 px-4 max-w-full">
                                {t.items[selectedProject].images!.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImgIndex(idx)}
                                        className={`relative w-20 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${currentImgIndex === idx ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

