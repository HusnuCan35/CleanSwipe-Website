'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function CleanSwipePage() {
    const t = useTranslations('projects.cleanSwipe');
    const locale = useLocale();

    const features = [
        { icon: '👆', title: t('features.swipe'), desc: t('features.swipeDesc') },
        { icon: '♾️', title: t('features.unlimited'), desc: t('features.unlimitedDesc') },
        { icon: '🎬', title: t('features.video'), desc: t('features.videoDesc') },
        { icon: '🧠', title: t('features.smartMode'), desc: t('features.smartModeDesc') },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className={styles.appIconWrapper}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <Image
                                src="/images/clean-swipe-logo.png"
                                alt="Clean Swipe Logo"
                                width={100}
                                height={100}
                                className={styles.appIconImage}
                            />
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {t('name')}
                        </motion.h1>

                        <motion.p
                            className={styles.tagline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            {t('tagline')}
                        </motion.p>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {t('description')}
                        </motion.p>

                        <motion.div
                            className={styles.buttons}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <motion.a
                                href="#"
                                className={`btn btn-primary ${styles.ctaButton}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                {t('cta')}
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        className={styles.mockup}
                        initial={{ opacity: 0, y: 50, rotateY: -15 }}
                        animate={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.phone}>
                            <div className={styles.phoneScreen}>
                                <video
                                    className={styles.demoVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="/videos/clean-swipe-demo.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className="container">
                    <motion.h2
                        className={styles.featuresTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('features.title')}
                    </motion.h2>

                    <motion.div
                        className={styles.featuresGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureCard}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <span className={styles.featureIcon}>{feature.icon}</span>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Legal & Support Links */}
            <section className={styles.legalSection}>
                <div className="container">
                    <div className={styles.legalGrid}>
                        {/* Privacy Policy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <Link href={`/${locale}/projects/clean-swipe/privacy`} className={styles.legalCard}>
                                <div className={styles.legalContent}>
                                    <span className={styles.legalIcon}>🔒</span>
                                    <div>
                                        <h3 className={styles.legalTitle}>{t('privacyPolicy')}</h3>
                                        <p className={styles.legalDesc}>
                                            {locale === 'tr'
                                                ? 'Verilerinizi nasıl koruyoruz'
                                                : 'How we protect your data'
                                            }
                                        </p>
                                    </div>
                                </div>
                                <span className={styles.legalArrow}>→</span>
                            </Link>
                        </motion.div>

                        {/* Terms of Use */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Link href={`/${locale}/projects/clean-swipe/terms`} className={styles.legalCard}>
                                <div className={styles.legalContent}>
                                    <span className={styles.legalIcon}>📜</span>
                                    <div>
                                        <h3 className={styles.legalTitle}>{t('termsOfUse')}</h3>
                                        <p className={styles.legalDesc}>
                                            {locale === 'tr'
                                                ? 'Kullanım koşullarımız'
                                                : 'Our terms and conditions'
                                            }
                                        </p>
                                    </div>
                                </div>
                                <span className={styles.legalArrow}>→</span>
                            </Link>
                        </motion.div>

                        {/* Support */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href={`/${locale}/projects/clean-swipe/support`} className={styles.legalCard}>
                                <div className={styles.legalContent}>
                                    <span className={styles.legalIcon}>💬</span>
                                    <div>
                                        <h3 className={styles.legalTitle}>{t('support')}</h3>
                                        <p className={styles.legalDesc}>
                                            {locale === 'tr'
                                                ? 'Yardım ve SSS'
                                                : 'Help & FAQ'
                                            }
                                        </p>
                                    </div>
                                </div>
                                <span className={styles.legalArrow}>→</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
