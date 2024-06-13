import React from 'react';
import NotFoundImgJpg from '../../assets/NotFoundCity.jpg'
import NotFoundImgWebp from '../../assets/NotFoundCity.webp';

const NotFoundPage = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
          <div className="flex-1 max-w-lg">
          <picture>
              <source srcSet={NotFoundImgWebp} type="image/webp" />
              <source srcSet={NotFoundImgJpg} type="image/jpeg" />
              <img
                src={NotFoundImgJpg}
                alt="Page not found"
                loading='lazy'
              />
            </picture>
          </div>
          <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
            <h3 className="text-red-700 md:text-3xl font-semibold">404 Error</h3>
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">Page not found</p>
            <p className="text-gray-600">
              Sorry, the page you are looking for could not be found or has been removed.
            </p>
            <a
              href="/"
              className="text-red-700 duration-150 hover:text-red-400 md:text-3xl font-medium inline-flex items-center gap-x-1"
            >
              Go back
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
