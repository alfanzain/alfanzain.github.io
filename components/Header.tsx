import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitchButOnlySwitchDark from './ThemeSwitchButOnlySwitchDark'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo and site title */}
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center">
              {/* <div className="mr-3">
                <Logo />
              </div> */}
              {typeof siteMetadata.headerTitle === 'string' ? (
                <span className="font-medium text-white text-xl hidden sm:block">
                  {/* {siteMetadata.headerTitle} */}
                  alfanzain.github.io
                </span>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>

          {/* Navigation links */}
          <nav className="flex items-center text-base leading-5">
            <div className="hidden sm:flex space-x-6">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="font-medium text-white hover:text-white/80 transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3 ml-6">
              {/* <SearchButton /> */}
              <ThemeSwitchButOnlySwitchDark />
              <MobileNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
