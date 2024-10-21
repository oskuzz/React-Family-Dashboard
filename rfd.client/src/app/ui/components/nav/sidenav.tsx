'use client'

import Image from 'next/image';
import Link from 'next/link';
import {
    Card,
    Stack,
    Container
} from 'react-bootstrap';
import NavLink from './navlink';
import Logo from '@/app/ui/assets/images/rfd-logo.svg';
import { sideNavTheme as theme } from '@/app/ui/assets/theme/themeColor';

export default function SideNavigation() {
    return (
        <Container style={{backgroundColor: theme.background.default, width: '250px', height: '100%', paddingRight: '15px'}}>
            <Stack gap={2}>
                <div className="text-center mt-3">
                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                                alt="Logo"
                                src={Logo}
                                width="150"
                                height="150"
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h2>Family Dashboard</h2>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <NavLink href="/reptiles" name="Reptilet" icon="fa-solid fa-staff-snake" active />
                <NavLink href="/Pets" name="Lemmikit" icon="fa-solid fa-dog" />
                <NavLink href="/House" name="Talo" icon="fa-solid fa-house" />
            </Stack>
        </Container>
    );
}