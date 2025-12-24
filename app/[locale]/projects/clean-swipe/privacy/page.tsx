'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function PrivacyPolicyPage() {
    const t = useTranslations('privacy');

    const sections = [
        'collection',
        'permissions',
        'analytics',
        'purchases',
        'advertising',
        'contact'
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
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className={styles.icon}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        🔒
                    </motion.span>
                    <h1 className={styles.title}>{t('title')}</h1>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                    <p className={styles.lastUpdated}>{t('lastUpdated')}</p>
                </motion.div>

                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {sections.map((section) => (
                        <motion.section
                            key={section}
                            className={styles.section}
                            variants={itemVariants}
                        >
                            <h2 className={styles.sectionTitle}>
                                {t(`content.${section}.title`)}
                            </h2>
                            <p className={styles.sectionText}>
                                {t(`content.${section}.text`)}
                            </p>
                            {section === 'contact' && (
                                <div className={styles.contactInfo}>
                                    <a href="mailto:support@cleanswipe.app" className={styles.contactLink}>
                                        📧 support@cleanswipe.app
                                    </a>
                                </div>
                            )}
                        </motion.section>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
