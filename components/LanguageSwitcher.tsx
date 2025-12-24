'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const t = useTranslations('language');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <div className={styles.switcher}>
            <motion.button
                className={`${styles.option} ${locale === 'en' ? styles.active : ''}`}
                onClick={() => switchLocale('en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                EN
            </motion.button>
            <span className={styles.divider}>/</span>
            <motion.button
                className={`${styles.option} ${locale === 'tr' ? styles.active : ''}`}
                onClick={() => switchLocale('tr')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                TR
            </motion.button>
        </div>
    );
}
