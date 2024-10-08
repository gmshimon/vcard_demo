import { BsFillPersonVcardFill } from 'react-icons/bs';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    const navOptions = [
        {
            icon : <MdDashboard />,
            title:"Dashboard",
            path: "/dashboard"
        },
        {
            icon : <BsFillPersonVcardFill />,
            title:"Vcards",
            path: "/dashboard"
        },
        {
            icon : <FaProjectDiagram />,
            title:"Projects",
            path: "/dashboard"
        },
        {
            icon : <MdDashboard />,
            title:"Projects",
            path: "/dashboard"
        },
    ]
  return (
    <section className='lg:flex'>
      <div className='w-full'>
        <div className='drawer lg:drawer-open'>
          <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col'>
            {/* Navbar */}
            <div className='flex-none lg:hidden'>
              <div className='navbar bg-red-400 w-full'>
                <label
                  htmlFor='my-drawer-3'
                  aria-label='open sidebar'
                  className='btn btn-square btn-ghost'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block h-6 w-6 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>

          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-3'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu bg-base-200 min-h-full w-80 p-4'>
              {/* Sidebar content here */}
              <div className='flex justify-center items-center'>
                <img
                  src='https://infyvcards-demo.nyc3.digitaloceanspaces.com/settings/9168/Logo-1.png'
                  alt=''
                />
                <p className='ml-4 text-xl font-semibold'>vCard</p>
              </div>
              <div className='divider'></div>
              <div>
                <label className='input input-bordered flex items-center gap-2'>
                  <input type='text' className='grow' placeholder='Search' />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    className='h-4 w-4 opacity-70'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </label>
              </div>
              <div className='mt-5 text-xl'>
                {
                    navOptions.map((nav,index)=><li key={index} className='mb-2'>
                        <NavLink to={nav?.path}>
                            <div className='flex items-center'>
                                <p className='mr-5'>{nav?.icon}</p>
                                <p >{nav?.title}</p>
                            </div>
                            {/* <p >  </p>
                             */}
                        </NavLink>
                    </li>)
                }
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className='lg:flex-1'>
        <Outlet />
      </div>
    </section>
  );
};

export default Navbar;
