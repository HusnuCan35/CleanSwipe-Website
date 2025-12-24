'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function SupportPage() {
    const t = useTranslations('support');

    const faqItems = t.raw('content.faq.items') as Array<{ question: string; answer: string }>;

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
                        💬
                    </motion.span>
                    <h1 className={styles.title}>{t('title')}</h1>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                    <p className={styles.description}>{t('description')}</p>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    className={styles.faqSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h2 className={styles.faqTitle}>{t('content.faq.title')}</h2>

                    <motion.div
                        className={styles.faqList}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.faqItem}
                                variants={itemVariants}
                            >
                                <div className={styles.faqQuestion}>
                                    <span className={styles.faqNumber}>{index + 1}</span>
                                    <h3>{item.question}</h3>
                                </div>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    className={styles.contactSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h2 className={styles.contactTitle}>{t('content.contact.title')}</h2>
                    <p className={styles.contactText}>{t('content.contact.text')}</p>

                    <div className={styles.contactCard}>
                        <a href={`mailto:${t('content.contact.email')}`} className={styles.contactLink}>
                            <span className={styles.contactIcon}>📧</span>
                            <span className={styles.contactEmail}>{t('content.contact.email')}</span>
                        </a>
                        <p className={styles.responseTime}>{t('content.contact.responseTime')}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
