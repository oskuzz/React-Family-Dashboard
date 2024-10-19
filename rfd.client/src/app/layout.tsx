import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const metadata: Metadata = {
  title: 'Family Dashboard',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}