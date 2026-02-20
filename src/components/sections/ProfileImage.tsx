import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function ProfileImage() {
    return (
        <div className="relative group">
            {/* Decorative Blur Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square overflow-hidden rounded-2xl border-2 border-border bg-card"
            >
                <img
                    src={portfolioData.profile.avatar}
                    alt={portfolioData.profile.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </motion.div>

            {/* Modern Badge */}
            <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-lg shadow-2xl">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Available for work</span>
            </div>
        </div>
    )
}
