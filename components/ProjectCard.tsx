'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    id: string;
    name: string;
    tagline: string;
    icon?: string;
    iconImage?: string;
    gradient: string;
}

export default function ProjectCard({ id, name, tagline, icon, iconImage, gradient }: ProjectCardProps) {
    const t = useTranslations('projects');
    const locale = useLocale();

    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <Link href={`/${locale}/projects/${id}`} className={styles.link}>
                <div className={styles.iconWrapper} style={{ background: iconImage ? 'transparent' : gradient }}>
                    {iconImage ? (
                        <Image
                            src={iconImage}
                            alt={name}
                            width={64}
                            height={64}
                            className={styles.iconImage}
                        />
                    ) : (
                        <span className={styles.icon}>{icon}</span>
                    )}
                </div>
                <div className={styles.content}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.tagline}>{tagline}</p>
                </div>
                <motion.div
                    className={styles.arrow}
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                >
                    →
                </motion.div>
            </Link>
            <div className={styles.glow} style={{ background: gradient }} />
        </motion.div>
    );
}
