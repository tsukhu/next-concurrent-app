import { useRouter } from 'next/router';
import Link from 'next/link';

export { NavLink };

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, exact = true, children }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a className={`${isActive ? 'active' : ''}`}>{children}</a>
    </Link>
  );
};
