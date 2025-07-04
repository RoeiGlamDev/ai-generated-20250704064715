import Link from 'next/link';

function Navigation() {
  return (
    <nav className="bg-black text-gold py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/upload">
          <a>Upload</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;