import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">{children}</main>
    </html>
  );
};

export default Layout;
