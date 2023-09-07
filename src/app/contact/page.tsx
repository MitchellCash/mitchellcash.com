'use client';

import BackBanner from '@/components/back-banner';
import CopyToast from '@/components/copy-toast';
import { faHackerNews, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [toastTimer, setToastTimer] = useState<NodeJS.Timeout | null>(null);

  async function copyEmailToClipboard(): Promise<boolean> {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(atob('bWVAbWl0Y2hlbGxjYXNoLmNvbQ=='));
      return true;
    }

    // TODO: Handle failed copy.
    return false;
  }

  const handleCopyClick = () => {
    copyEmailToClipboard()
      .then(() => {
        if (toastTimer) {
          setIsCopied(false);
          clearTimeout(toastTimer);
        }

        setIsCopied(true);

        setToastTimer(
          setTimeout(() => {
            setIsCopied(false);
            setToastTimer(null);
          }, 3000)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      {isCopied && <CopyToast />}

      <BackBanner link="/" text="home" />

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hello, I&apos;m Mitchell and here is how to contact me.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div>
                <FontAwesomeIcon icon={faSquareEnvelope} />{' '}
                <a onClick={handleCopyClick} className="cursor-pointer">
                  Email
                </a>
              </div>
              {'|'}
              <div>
                <FontAwesomeIcon icon={faSquareGithub} />{' '}
                <a href="https://github.com/mitchellcash" target="_blank">
                  GitHub
                </a>
              </div>
              {'|'}
              <div>
                <FontAwesomeIcon icon={faHackerNews} />{' '}
                <a href="https://news.ycombinator.com/user?id=MitchellCash" target="_blank">
                  Hacker News
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
