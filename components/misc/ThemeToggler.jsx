'use client';
import { useTheme } from '@/context/ThemeProvider';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { themeMenuItems } from '@/constants';
import { Sun, Moon } from 'lucide-react';

const ThemeToggler = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className='relative h-full border-none bg-transparent p-0 shadow-none hover:!bg-white/5 dark:bg-transparent'>
      <MenubarMenu>
        <MenubarTrigger className=' flex h-full cursor-pointer flex-col justify-center px-3 data-[state=closed]:bg-transparent data-[state=open]:bg-transparent data-[state=closed]:text-inherit  data-[state=open]:text-inherit dark:data-[state=closed]:bg-transparent dark:data-[state=open]:bg-transparent dark:data-[state=closed]:text-inherit  dark:data-[state=open]:text-inherit'>
          {mode === 'light' ? (
            <>
              <Sun className='mx-auto mb-1' />
              <span className='text-sm font-semibold'>Light</span>
            </>
          ) : (
            <>
              <Moon className='mx-auto mb-1' />
              <span className='text-sm font-semibold'>Dark</span>
            </>
          )}
        </MenubarTrigger>
        <MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-white py-2 dark:bg-luxio-grey-900 dark:text-slate-100'>
          {themeMenuItems.map(item => (
            // @ts-ignore
            <MenubarItem
              key={item.value}
              className='flex cursor-pointer items-center gap-4 px-2.5 py-2 !text-luxio-grey-700 duration-300 hover:!bg-luxio-grey-50 dark:!text-luxio-grey-200 dark:hover:!bg-luxio-grey-800'
              onClick={() => {
                setMode(item.value);
                if (item.value !== 'system') {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem('theme');
                }
              }}>
              {item.icon}
              <p className='font-medium'>{item.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeToggler;
