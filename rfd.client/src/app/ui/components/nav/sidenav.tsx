'use client'

import Image from 'next/image';
import Link from 'next/link';
import { 
    Card, 
    Container,
    InputGroup,
    Button 
} from 'react-bootstrap';
import Logo from '@/app/ui/assets/images/rfd-logo.svg';

export default function SideNavigation() {
    return (
        <Container style={{ width: '250px'}}>
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
            <InputGroup>
                <InputGroup.Text><i className="fa-solid fa-staff-snake"></i></InputGroup.Text>
                <Link className="" href="/reptiles">Reptilet</Link>
            </InputGroup>
        </Container>
    );
}