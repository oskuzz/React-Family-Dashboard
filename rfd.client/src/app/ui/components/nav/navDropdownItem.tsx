//import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
//import { navLinksTheme as theme } from '@/app/ui/assets/theme/themeColor';
import React from 'react';

export default function SideNavigationDropdownItem({
    linkItems
}: {
    linkItems: React.ReactNode
}) {
    return (
        <Accordion>
            {linkItems}
        </Accordion>
    );
}