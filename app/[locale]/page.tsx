'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
    const t = useTranslations();

    const projects = [
        {
            id: 'clean-swipe',
            name: t('projects.cleanSwipe.name'),
            tagline: t('projects.cleanSwipe.tagline'),
            iconImage: '/images/clean-swipe-logo.png',
            gradient: 'linear-gradient(135deg, #6366f1, #a855f7)'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <motion.div
                            className={styles.badge}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            ✨ {t('hero.subtitle')}
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {t('hero.title')}
                        </motion.h1>

                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            {t('hero.description')}
                        </motion.p>
                    </motion.div>

                    {/* Floating Elements */}
                    <div className={styles.floatingElements}>
                        <motion.div
                            className={styles.floatingOrb1}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                        <motion.div
                            className={styles.floatingOrb2}
                            animate={{
                                y: [0, 20, 0],
                                x: [0, -15, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                        <motion.div
                            className={styles.floatingOrb3}
                            animate={{
                                y: [0, -15, 0],
                                x: [0, -10, 0],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={styles.projects}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
                        <p className={styles.sectionSubtitle}>{t('projects.subtitle')}</p>
                    </motion.div>

                    <div className={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
