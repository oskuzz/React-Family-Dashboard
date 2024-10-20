'use client'

import Image from 'next/image';
import Link from 'next/link';
import {
    Card,
    Container
} from 'react-bootstrap';
import NavLink from './navlink';
import Logo from '@/app/ui/assets/images/rfd-logo.svg';

export default function SideNavigation() {
    return (
        <Container style={{ width: '250px' }}>
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
            <NavLink href="/reptiles" name="Reptilet" icon="fa-solid fa-staff-snake" active/>
            <NavLink href="/Pets" name="Lemmikit" icon="fa-solid fa-dog" />
            <NavLink href="/House" name="Talo" icon="fa-solid fa-house" />
        </Container>
    );
}