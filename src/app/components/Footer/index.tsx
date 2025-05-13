import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  //   const service = [
  //     ' 1-on-1 Coaching',
  //     'Company Review',
  //     'Accounts Review',
  //     'HR Consulting',
  //     'SEO Optimisation',
  //   ];
  //   const company = ['About', 'Meet the Team', 'Accounts Review'];

  //   const helping = ['Contact', 'FAQs', 'Live Chat'];

  //   const legal = ['Accessibility', 'Returns Policy', 'Refund Policy', ' Hiring Statistics'];

  return (
    <React.Fragment>
      <div id="footer" className="mt-[90px]">
        <div className="bg-white pt-0 lg:pt-[100px]">
          <div
            className="max-w-[1140px] bg-[#8234E9] rounded-xl px-[20px] sm:px-[64px] py-[64px] m-auto"
            style={{
              transform: "translate(0px, 70px)",
            }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-9">
                <p className="text-[30px] text-white text-center lg:text-start">Quer transformar sua ideia em uma aplicação web ou mobile de impacto?</p>
                <p className="text-white font-sans text-center lg:text-start">Entre em contato comigo e vamos conversar</p>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <div className="flex justify-center mt-5 lg:mt-0">
                  <a
                    href="/page/contact-me"
                    className="font-sans cursor-pointer px-10 py-5 bg-white rounded-xl text-[#A66BFF] font-medium text-lg relative overflow-hidden group"
                  >
                    <span className="absolute left-0 top-0 h-full bg-[#A66BFF] w-0 transition-width duration-500 group-hover:w-full"></span>
                    <span className="relative z-10 group-hover:text-white">Entrar em contato</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-[#223740]">
          <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="container mx-auto p-4 md:hidden block mt-10">

            </div>

            <div className="xl:max-w-6xl 2xl:max-w-7xl px-10 md:px-20 xl:px-44 mx-auto sm:py-10 overflow-hidden">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                  <a
                    href="https://www.linkedin.com/in/michel-cordeiro-b6425b49/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#8234E9]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                    <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-4 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#8234E9]">
                      LinkedIn
                    </h5>
                  </a>
                </div>

                <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                  <a href="https://github.com/Michel-O-Cordeiro" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 496 512"
                      className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#8234E9]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                    <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-4 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#8234E9]">
                      Github
                    </h5>
                  </a>
                </div>

                <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                  <a
                    href="https://wa.me/+5538991536970"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 group flex flex-col items-center justify-center"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#8234E9]"
                      height="1em"
                      width="1em"
                    >
                      <path
                        d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>

                    <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-4 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#8234E9]">
                      WhatsApp
                    </h5>
                  </a>
                </div>

                <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                  <a
                    href="mailto:cadastromichel@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 group flex flex-col items-center justify-center"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#8234E9]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      `
                    </svg>

                    <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-4 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#8234E9]">
                      E-mail
                    </h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-auto ">
              <p className="mt-4 text-[#7b858b] font-sans text-center">Michel Oliveira Cordeiro</p>
              <p className="text-[#7b858b] font-sans text-center">CNPJ: 50.522.053/0001-40</p>
              <p className="mt-2 text-xs text-[#7b858b] font-sans text-center">
                &copy; {currentYear ? `${currentYear}` : "2025"}. Todos os direitos reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
