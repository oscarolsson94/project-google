import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";

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
                  
                  {/* Icon */}
                  <ViewGridIcon />
                  
                  <Avatar url="https://scontent.fgse1-1.fna.fbcdn.net/v/t1.6435-9/103695651_3163119120436269_5701807603451754723_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=a40Yd2corEIAX8lHb0O&_nc_ht=scontent.fgse1-1.fna&oh=960f329ae324006df2672d03b3b9e843&oe=60A73183" />

              </div>
          </header>

          {/* Body */}

          {/* Footer */}

    </div>
  )
}
