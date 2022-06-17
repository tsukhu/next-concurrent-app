import { NavLink } from './NavLink';

export default function NavBar() {
  return (
    <nav>
      <NavLink href="/">Suspense SSR</NavLink>
      <NavLink href="/basic">Basic</NavLink>
      <NavLink href="/transition">start Transition</NavLink>
      <NavLink href="/deferredValue">use DeferredValue</NavLink>
    </nav>
  );
}
