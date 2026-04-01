export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Header</h1>
            <div>{children}</div>
            <h1>Footer</h1>
        </>
    )
}