import Link from 'next/link';
import { InputGroup, Card } from 'react-bootstrap';
import { navLinksTheme as theme } from '@/app/ui/assets/theme/themeColor';

export default function SideNavigationLink({
    href, name, icon, active = false
}: {
    href: string, name: string, icon: string, active?: boolean
}) {

    const styles: { [key: string]: object } = {
        link: {
            width: "150px",
            "text-decoration": "none",
            "font-size": "large",
            color: (active ? theme.color.active : theme.color.default)
        },
        card: {
            background: (active ? theme.background.active : theme.background.default),
            "border-radius": "0.375rem"
        },
        icon: {
            width: "40px",

        },
        text: {

        }
    }

    return (
        <Card className="mt-2">
            <Card.Body style={styles.card}>
                <Link style={styles.link} href={href} className="d-flex">
                    <div style={styles.icon}>
                        <i className={`${icon} fa-lg`}></i>
                    </div>
                    <label style={styles.text}>{name}</label>
                </Link>
            </Card.Body>
        </Card>
    )
}