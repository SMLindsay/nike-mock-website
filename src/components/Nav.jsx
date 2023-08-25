import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo} 
                alt="Logo"
                width={130}
                height={29} 
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img 
                src={hamburger} 
                alt="Hamburger Navigation Button"
                width={25}
                height={25}
                // onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {/* <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >
                <div className="text-sm lg:flex-grow">
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        First Link
                     </a>
                     <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Second Link
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Third Link
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Fourth Link
                    </a>
                </div>
            </div> */}
        </nav>
    </header>
  )
}

export default Nav