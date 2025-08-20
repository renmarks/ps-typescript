import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Header: React.FC = () => {
  return (
    <div className="pl-4 py-2 border-b-2 flex gap-4">
      <Link
        to="/transactions"
        className="text-indigo-600 hover:text-indigo-500"
      >
        Transactions
      </Link>
      <Link to="/summary" className="text-indigo-600 hover:text-indigo-500">
        Summary
      </Link>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="justify-between">
      <Header />
      <div className="pl-4 py-4">{children}</div>
    </div>
  );
};

export default Layout;
