import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white" >
            <div className="flex w-full p-6 items-center" >
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center " >
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" defaultValue={router.query.term} />
                    <XIcon
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => searchInputRef.current.value = ""}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search} >Search</button>
                </form>
                <Avatar className="ml-auto" url="https://scontent.fgse1-1.fna.fbcdn.net/v/t1.6435-9/103695651_3163119120436269_5701807603451754723_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=a40Yd2corEIAX8lHb0O&_nc_ht=scontent.fgse1-1.fna&oh=960f329ae324006df2672d03b3b9e843&oe=60A73183" />
            </div>

            <HeaderOptions />
        </header>
    );
}

export default Header;
