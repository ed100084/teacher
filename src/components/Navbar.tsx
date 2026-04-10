'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo font-en">
        ✦ 數學星球
      </Link>
      <ul className="navbar-nav">
        <li><Link href="/#grades">年級選擇</Link></li>
        <li><Link href="/#scientists">女性科學家</Link></li>
        <li><Link href="/#about">關於我們</Link></li>
      </ul>
    </nav>
  );
}
