import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <div className="flex flex-col min-h-screen bg-black text-white selection:bg-pink-500/30">
                <Header />
                <div className="flex flex-1">
                    <Sidebar />
                    <main className="flex-1 flex flex-col min-w-0 bg-[#0a0a0c]">
                        <div className="flex-1">
                            {children}
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        </AuthProvider>
    );
}