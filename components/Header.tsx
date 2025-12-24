'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

export default function Header() {
    const t = useTranslations('nav');
    const locale = useLocale();

    return (
        <motion.header
            className={styles.header}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container ${styles.container}`}>
                <Link href={`/${locale}`} className={styles.logo}>
                    <motion.div
                        className={styles.logoIcon}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>HC</span>
                    </motion.div>
                    <span className={styles.logoText}>Hüsnü Can Çoban</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href={`/${locale}`} className={styles.navLink}>
                        {t('home')}
                    </Link>
                    <Link href={`/${locale}#projects`} className={styles.navLink}>
                        {t('projects')}
                    </Link>
                    <LanguageSwitcher />
                </nav>
            </div>
        </motion.header>
    );
}
