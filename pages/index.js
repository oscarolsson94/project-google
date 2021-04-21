import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          
          {/* Header */}
          <header className="flex w-full p-5 justify-between text-sm text-gray-700">
              <div className="flex space-x-4 items-center">
                <p className="link">About</p>
                <p className="link">Store</p>
              </div>
                
              <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                  
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
                  
                <Avatar url="https://scontent.fgse1-1.fna.fbcdn.net/v/t1.6435-9/103695651_3163119120436269_5701807603451754723_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=a40Yd2corEIAX8lHb0O&_nc_ht=scontent.fgse1-1.fna&oh=960f329ae324006df2672d03b3b9e843&oe=60A73183" />
              </div>
          </header>

          {/* Body */}
          <form action="">
              <Image
                  src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                  height={100}
                  width={300}
              />
              <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md " >
                  <SearchIcon className="h-5 mr-3 text-gray-500" />
                  <input type="text" className="flex-grow focus:outline-none" />
                  <MicrophoneIcon className="h-5" />
              </div>
          </form>

          {/* Footer */}

    </div>
  )
}
