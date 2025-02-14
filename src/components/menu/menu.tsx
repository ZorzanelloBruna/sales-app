'use client';
import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
    return(
        <aside className={`${styles.customAside} column is-narrow-mobile is-fullheight section is-hidden-mobile has-text-centered`}>
            <p className="menu-label is-hidden-touch has-text-weight-bold mb-4">
                MINHAS VENDAS
            </p>
            <ul className="menu-list">
                <MenuItem href="/" label="Home" icon="fas fa-home"/>
                <MenuItem href="/produtos/cadastro" label="Cadastro" icon="fas fa-file-alt"/>
                <MenuItem href="/configuracoes/produto" label="Configurações" icon="fas fa-cog fa-spin"/>
                <MenuItem href="/" label="Sair" icon="fas fa-sign-out-alt"/>
            </ul>
        </aside>
    );
}

interface MenuItemProps {
    href: string;
    label: string;
    icon: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon }) => {
    return(
        <li className={styles.menuItem}>
            <Link href={href} className="is-flex is-align-items-center gap-2">
                <span className="icon">
                    <i className={icon}></i>
                </span> 
                {label}     
            </Link>
        </li>
    );
};
