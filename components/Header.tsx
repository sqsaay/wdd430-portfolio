import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-name" href="/">
          Samantha Salazar
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}