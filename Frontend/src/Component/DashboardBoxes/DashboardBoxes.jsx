import { FaUser, FaUserAltSlash } from 'react-icons/fa'
import { FaIdCardClip } from 'react-icons/fa6'
import { MdCreditCardOff } from 'react-icons/md'

const DashboardBoxes = () => {
  const boxesData = [
    {
      bg_color: 'bg-blue-400',
      icon: <FaUser />,
      bg_icon: 'bg-blue-300',
      num: 97,
      title: 'Total active users'
    },
    {
      bg_color: 'bg-green-400',
      icon: <FaIdCardClip />,
      bg_icon: 'bg-green-300',
      num: 217,
      title: 'Total active cards'
    },
    {
      bg_color: 'bg-blue-500',
      icon: <FaUserAltSlash />,
      bg_icon: 'bg-blue-400',
      num: 2,
      title: 'Total inactive users'
    },
    {
      bg_color: 'bg-yellow-400',
      icon: <MdCreditCardOff />,
      bg_icon: 'bg-yellow-200',
      num: 15,
      title: 'Total deactivated VCards'
    }
  ]

  return (
    <div className='flex justify-center'>
      <section className='grid md:grid-cols-4 sm:grid-cols-2 gap-y-6 lg:gap-x-4 gap-x-20 mt-6 ml-5'>
        {boxesData.map((box, i) => (
          <div
            key={i}
            className={`card w-[280px] h-50 ${box.bg_color} text-primary-content`}
          >
            <div className='card-body'>
              <div className='flex items-center justify-between text-white'>
                <div
                  className={`text-4xl border-none rounded-xl ${box.bg_icon}  p-2`}
                >
                  {box.icon}
                </div>
                <div>
                  <h1 className='text-end text-3xl font-bold '>{box.num}</h1>
                  <p>Total active users</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default DashboardBoxes
