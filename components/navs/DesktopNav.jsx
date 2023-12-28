import { UserRound, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '../ui/input';
import ThemeToggler from '../misc/ThemeToggler';

const DesktopNav = () => {
  return (
    <header className='border-b-[3px] border-luxio-orange-500 bg-white dark:bg-luxio-grey-900'>
      <div className='container'>
        <nav className='flex h-[70px] items-center'>
          <Link
            href='/'
            className=' flex items-center px-3 duration-300 hover:bg-white/5'>
            <Image
              src='/assets/logos/logo.svg'
              width={96}
              height={34.52}
              alt='Luxio logo'
              priority
              style={{ width: '96px', height: 'auto' }}
            />
          </Link>

          <Input
            type='text'
            className='mx-auto max-w-md border-2 border-luxio-grey-200 placeholder:text-luxio-grey-200/100 dark:border-luxio-grey-700 dark:!bg-luxio-grey-800'
            placeholder='Search products'
          />

          <ul className='flex gap-4'>
            <li className='flex flex-col justify-center px-3 duration-300 hover:bg-white/5'>
              <Link href='/profile'>
                <UserRound className='mx-auto mb-1' />
                <span className='text-sm font-semibold'>Profile</span>
              </Link>
            </li>
            <li className='flex flex-col justify-center px-3 duration-300 hover:bg-white/5'>
              <Link href='/wishlist'>
                <Heart className='mx-auto mb-1' />
                <span className='text-sm font-semibold'>Wishlist</span>
              </Link>
            </li>
            <li className='flex flex-col justify-center px-3 duration-300 hover:bg-white/5'>
              <Link href='/cart'>
                <ShoppingCart className='mx-auto mb-1' />
                <span className='text-sm font-semibold'>Cart</span>
              </Link>
            </li>

            <ThemeToggler />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DesktopNav;
