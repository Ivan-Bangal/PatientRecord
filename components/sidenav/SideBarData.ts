import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";

interface LinkItemProps {
    name: string;
    icon: IconType;
    href:string;
}

export const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Processos', icon: FiTrendingUp, href: '/process' },
    { name: 'Pacientes', icon: FiCompass, href: '/patients' },
    { name: 'Relatorios', icon: FiStar, href: '/' },
];