import Link from 'next/link';

export default function BackBanner({ link, text }: { link: string; text: string }) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Take me back to{' '}
            <Link href={link} className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true"></span>
              {text.toLowerCase()} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
