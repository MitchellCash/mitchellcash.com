import Button from '@/components/button';
import Image from 'next/image';
import mitchellPic from '../../public/me.jpg';

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="flex items-center justify-center mb-6">
          <Image src={mitchellPic} alt="Mitchell Cash" className="rounded-full h-64 w-64" />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Mitchell Cash
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">Sort of geeky, sort of not.</p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button link="/blog" text="Blog" />
            <Button link="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
