'use client'

import Image from 'next/image';
import '@/app/ui/assets/css/navigation/sideNav.css'
import {
    Stack,
    Container
} from 'react-bootstrap';
import { NavLink, NavLinkFiller } from './navlink';
import Logo from '@/app/ui/assets/images/rfd-logo.svg';

export default function SideNavigation() {
    const links = [
        { name: "Etusivu", href: "/", icon: "fa-solid fa-house"},
        { name: "Reptilet", href: "/Reptiles", icon: "fa-solid fa-staff-snake" },
        { name: "Lemmikit", href: "/pets", icon: "fa-solid fa-dog" },
    ];

    return (
        <Container className="d-flex flex-column sideNav">
            <Stack gap={2} className="d-flex flex-column">
                <div className="d-flex flex-column mt-3 logo-container pt-2 pb-2">
                    <div className="d-flex justify-content-center">
                        <Image
                            alt="Logo"
                            src={Logo}
                            width="150"
                            height="150"
                        />
                    </div>
                    <h4 className="d-flex justify-content-center">Family Dashboard</h4>
                </div>
                {
                    links.map(link => (
                            <NavLink key={link.href} href={link.href} name={link.name} icon={link.icon} />
                        ))
                }
                <NavLinkFiller />
            </Stack>
        </Container>
    );
}