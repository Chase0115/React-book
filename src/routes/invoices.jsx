import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../Data';


export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      <h1>Invoices</h1>
      <nav 
      style={{
        borderRight: "solid black",
        padding: "1rem",
      }}>
        {invoices.map((invoice) => (
          <NavLink
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}>
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}