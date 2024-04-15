'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemprop {
    name: string;
    image: string;
    href: string;
}

const ListItem: React.FC<ListItemprop> = ({
    name,
    image,
    href
}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }
return (
    <button onClick={onClick} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
        
        <div className="relative min-h-[64px] min-w-[64px]">
                <Image 
                    className="object cover"
                    fill
                    src={image}
                    alt={image}
                />
        </div>
        <p className="font-medium py-5 truncate">
            {name}
        </p>
        <div className=" absolute transition bg-green-500 rounded-full p-4 items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 flex right-5 drop-shadow-md">
            <FaPlay className="text-black"/>
        </div>
    </button>
  )
}

export default ListItem
