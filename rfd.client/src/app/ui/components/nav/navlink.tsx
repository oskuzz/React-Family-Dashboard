import Link from 'next/link';
import { InputGroup, Card } from 'react-bootstrap';
import { navLinksTheme as theme } from '@/app/ui/assets/theme/themeColor';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function NavLink({
    href, name, icon
}: {
    href: string, name: string, icon: string, active?: boolean
}) {
    const pathname = usePathname();
    return (
        <Link href={href} className={clsx("d-flex navLink", {"active": pathname === href})}>
            <div className="icon">
                <i className={`${icon} fa-lg`}></i>
            </div>
            <label>{name}</label>
        </Link>
    )
}

export function NavLinkFiller() {
    return (
        <div className="d-flex grow navLink filler mb-3"></div>
    )
}