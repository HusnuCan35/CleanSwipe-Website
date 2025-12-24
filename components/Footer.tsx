'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {currentYear} Hüsnü Can Çoban. {t('rights')}
                    </p>
                    <p className={styles.madeWith}>
                        {t('madeWith')} <span className={styles.heart}>❤️</span>
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
