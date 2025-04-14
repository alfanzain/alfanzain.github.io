import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitchButOnlySwitchDark from './ThemeSwitchButOnlySwitchDark'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <>
      <div className="h-8"></div> {/* Spacer to prevent content jump */}
      <header className="fixed top-3 left-0 right-0 z-50 mx-auto max-w-7xl bg-black/20 backdrop-blur-sm border border-white/5">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo and site title */}
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center">
                {/* <div className="mr-3">
                  <Logo />
                </div> */}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <span className="text-white text-sm hidden sm:block">
                    {/* {siteMetadata.headerTitle} */}
                    alfanzain.github.io
                  </span>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>

            {/* Navigation links */}
            <nav className="flex items-center text-xs">
              <div className="hidden sm:flex space-x-3">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-gray-200 hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-2 ml-3">
                {/* <SearchButton /> */}
                <ThemeSwitchButOnlySwitchDark />
                <MobileNav />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
