export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="161"
            height="30"
            viewBox="0 0 161 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.4585 4.78993C24.2867 4.78993 25.0813 5.1209 25.6655 5.7079L41.6577 21.7743C42.83 22.9522 41.9953 24.9618 40.3335 24.9618H25.5522C25.0583 24.9614 24.5856 24.7638 24.2358 24.4149L23.4858 23.6649C23.0484 23.2281 22.3374 23.2283 21.8999 23.6649L21.1499 24.4149C20.7998 24.7644 20.3243 24.9618 19.8296 24.9618H4.99365C3.3323 24.9613 2.49734 22.952 3.66944 21.7743L19.6616 5.7079C20.2457 5.12102 21.0407 4.79006 21.8687 4.78993H23.4585ZM22.5483 9.5204C21.8566 9.52087 21.1926 9.7996 20.7046 10.2899L10.689 20.3524H21.0679C21.3336 20.3524 21.5907 20.2473 21.7788 20.0595L22.1812 19.6571C22.4156 19.4244 22.7941 19.4247 23.0288 19.6571L23.4351 20.0595C23.6231 20.2472 23.8764 20.3524 24.1421 20.3524H34.4937L24.4741 10.2899C23.9858 9.79924 23.3227 9.52047 22.6304 9.5204H22.5483Z"
              fill="url(#paint0_linear_80_264)"
            />
            <path
              d="M60.8219 19.0853H54.5912L53.5603 22.0662H50.2656L55.8912 6.39988H59.5444L65.1699 22.0662H61.8529L60.8219 19.0853ZM59.9702 16.5751L57.7066 10.0307L55.4429 16.5751H59.9702Z"
              fill="#232E3F"
            />
            <path
              d="M84.2613 9.64969L80.6305 22.0662H77.2462L74.9825 13.3926L72.7189 22.0662H69.3122L65.659 9.64969H68.8415L71.0379 19.1077L73.4137 9.64969H76.7307L79.0616 19.0853L81.258 9.64969H84.2613Z"
              fill="#232E3F"
            />
            <path
              d="M102.948 9.64969L99.3168 22.0662H95.9326L93.6689 13.3926L91.4053 22.0662H87.9986L84.3453 9.64969H87.5279L89.7243 19.1077L92.1 9.64969H95.4171L97.748 19.0853L99.9444 9.64969H102.948Z"
              fill="#232E3F"
            />
            <path
              d="M121.634 9.64969L118.003 22.0662H114.619L112.355 13.3926L110.092 22.0662H106.685L103.032 9.64969H106.214L108.411 19.1077L110.786 9.64969H114.103L116.434 19.0853L118.631 9.64969H121.634Z"
              fill="#232E3F"
            />
            <path
              d="M128.621 22.2679C127.426 22.2679 126.35 22.0064 125.394 21.4835C124.437 20.9456 123.683 20.191 123.13 19.2198C122.592 18.2486 122.323 17.128 122.323 15.8579C122.323 14.5879 122.6 13.4673 123.152 12.4961C123.72 11.5249 124.49 10.7778 125.461 10.2548C126.432 9.71693 127.515 9.44798 128.711 9.44798C129.906 9.44798 130.989 9.71693 131.961 10.2548C132.932 10.7778 133.694 11.5249 134.247 12.4961C134.814 13.4673 135.098 14.5879 135.098 15.8579C135.098 17.128 134.807 18.2486 134.224 19.2198C133.656 20.191 132.879 20.9456 131.893 21.4835C130.922 22.0064 129.831 22.2679 128.621 22.2679ZM128.621 19.5336C129.189 19.5336 129.719 19.3991 130.212 19.1302C130.72 18.8463 131.124 18.4279 131.423 17.8751C131.722 17.3222 131.871 16.6498 131.871 15.8579C131.871 14.6775 131.557 13.7736 130.93 13.146C130.317 12.5035 129.562 12.1823 128.666 12.1823C127.769 12.1823 127.015 12.5035 126.402 13.146C125.805 13.7736 125.506 14.6775 125.506 15.8579C125.506 17.0383 125.797 17.9498 126.38 18.5923C126.978 19.2198 127.725 19.5336 128.621 19.5336Z"
              fill="#232E3F"
            />
            <path
              d="M140.314 11.5772C140.717 10.9197 141.24 10.4042 141.882 10.0307C142.54 9.65716 143.287 9.47039 144.124 9.47039V12.765H143.294C142.308 12.765 141.561 12.9966 141.053 13.4598C140.56 13.923 140.314 14.7298 140.314 15.8803V22.0662H137.176V9.64969H140.314V11.5772Z"
              fill="#232E3F"
            />
            <path
              d="M153.364 22.0662L149.151 16.7768V22.0662H146.013V5.48097H149.151V14.9166L153.319 9.64969H157.399L151.93 15.8803L157.443 22.0662H153.364Z"
              fill="#232E3F"
            />
            <defs>
              <linearGradient
                id="paint0_linear_80_264"
                x1="15.5064"
                y1="14.6331"
                x2="28.5135"
                y2="21.2199"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.240385" stopColor="#007FFD" />
                <stop offset="1" stopColor="#0066E6" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        <div className="flex flex-1 items-center  md:justify-end">
          {/* <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </nav> */}

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-[#007FFD] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0066E6]"
                href="#"
              >
                Войти
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#007FFD] transition hover:text-teal-[#0066E6] sm:block"
                href="#"
              >
                Начатьб
              </a>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
