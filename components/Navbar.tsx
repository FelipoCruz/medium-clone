import Link from 'next/link';
import Image from 'next/image';

// Top navbar

export default function NavBar() {
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {
          username && (
            <>
              <li>
                <Link href="/admin">
                  <button>Write Posts</button>
                </Link>
              </li>

              <li>
                <Link href={`/${username}`}>
                  <Image alt="profile pic" src={user?.photoURL} />
                </Link>
              </li>
            </>
          )}
        {/* user is not signed OR has not created username */}
        {
          !username && (
            <>
              <li>
                <Link href="/enter">
                  <button>Log in</button>
                </Link>
              </li>
            </>
          )}
      </ul>
    </nav>
  )
}