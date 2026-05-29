import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    ['Dashboard', '/dashboard'],
    ['Transactions', '/transactions'],
    ['Customers', '/customers'],
    ['Compliance', '/compliance'],
    ['Reports', '/reports']
  ];

  return (
    <aside className="sidebar">
      {links.map(([label, path]) => (
        <NavLink key={path} to={path} className="sidebar-link">
          {label}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
