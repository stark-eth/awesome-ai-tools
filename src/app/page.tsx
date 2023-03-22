import Contact from '@/components/Contact';
import Icon from '@/components/Icon';
import { AiFillFileText } from 'react-icons/ai';
import { SiOpenai, SiNotion } from 'react-icons/si'

export default function About() {
  const TEXT_TOOLS = [{ icon: SiOpenai, href: 'https://chat.openai.com/chat', label: 'Chatgpt' },
  { icon: SiNotion, href: 'https://notion.ai', label: 'Notion' },
  { icon: '/img/sidekick.jpeg', href: 'https://www.airops.com/', label: 'AI Data sidekick' },
  { icon: '/img/writesonic.jpeg', href: 'https://writesonic.com', label: 'Writesonic' },
  { icon: '/img/copyai.jpeg', href: 'https://www.copy.ai', label: 'Copy.ai' },
  ]
  const PAINT_TOOLS = [{ icon: '/img/midjourney.jpeg', href: 'https://www.midjourney.com', label: 'Midjourney' },
  { icon: '/img/photorroom.jpeg', href: 'https://www.photoroom.com', label: 'PhotorRoom' },
  { icon: '/img/sidekick.jpeg', href: 'https://www.airops.com/', label: 'AI Data sidekick' },
  { icon: '/img/writesonic.jpeg', href: 'https://writesonic.com', label: 'Writesonic' },
  { icon: '/img/copyai.jpeg', href: 'https://www.copy.ai', label: 'Copy.ai' },
  ]
  const AUDIO_TOOLS = [{ icon: '/img/brainfm.jpeg', href: 'https://www.brain.fm', label: 'Brain.fm' },
  { icon: '/img/soundraw.jpeg', href: 'https://soundraw.io', label: 'Soundraw' },
  { icon: '/img/sidekick.jpeg', href: 'https://www.airops.com/', label: 'AI Data sidekick' },
  { icon: '/img/writesonic.jpeg', href: 'https://writesonic.com', label: 'Writesonic' },
  { icon: '/img/copyai.jpeg', href: 'https://www.copy.ai', label: 'Copy.ai' },
  ]
  const VIDEO_TOOLS = [{ icon: '/img/runway.jpeg', href: 'https://runwayml.com/', label: 'Runway' },
  { icon: '/img/cascadeur.jpg', href: 'https://cascadeur.com/', label: 'Cascadur' },
  { icon: '/img/sidekick.jpeg', href: 'https://www.airops.com/', label: 'AI Data sidekick' },
  { icon: '/img/writesonic.jpeg', href: 'https://writesonic.com', label: 'Writesonic' },
  { icon: '/img/copyai.jpeg', href: 'https://www.copy.ai', label: 'Copy.ai' },
  ]

  return (
    <div className="flex flex-col justify-center px-8 pb-32 pt-20 md:pt-32 md:pb-36 lg:px-10 lg:py-36">
      <h1 className="text-6xl font-extrabold">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Awesome AI Tools</span>
      </h1>
      <div>
        <div className='flex'>
          <AiFillFileText size={30} />
          AI Text
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {TEXT_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>

      <div>
        <div className='flex'>
          <AiFillFileText size={30} />
          AI Painting
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {PAINT_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>

      <div>
        <div className='flex'>
          <AiFillFileText size={30} />
          AI Audio
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {AUDIO_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>

      <div>
        <div className='flex'>
          <AiFillFileText size={30} />
          AI Video
        </div>
        <div className='my-4 grid grid-cols-4  border border-orange-500 p-2'>
          {VIDEO_TOOLS.map((item, index) => (
            <Icon key={index} icon={item.icon} href={item.href} label={item.label}></Icon>
          ))}
        </div>
      </div>
      <hr className="my-12 h-px border-0 bg-black dark:bg-[#292C2D]" />
      <Contact />
    </div>
  );
}