export default function LiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black z-[9999]">
      {children}
    </div>
  );
}
