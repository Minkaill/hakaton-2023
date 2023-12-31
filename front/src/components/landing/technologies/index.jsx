const Technologies = () => {
  return (
    <>
      <section
        className="m-auto mb-24 max-w-screen-xl px-6 py-24"
        id="technologies"
      >
        <div className="md:flex md:justify-between">
          <div className="mb-4 text-lg text-gray-800 md:text-xl">
            ОСОБЕННОСТИ
          </div>
          <h2
            className="rounded-md bg-brand-green px-2 py-1
      text-2xl font-bold text-white md:text-6xl"
          >
            РЕВИЗОРЫ КАЧЕСТВА
          </h2>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-secondary-700 md:text-6xl">
          МЫ СЛЕДИМ ЗА КАЧЕСТВОМ И БЕЗОПАСНОСТЬЮ
        </h2>

        <div className="mt-16 flex flex-col gap-5">
          <div className="grid grid-cols-[auto_1fr] rounded-full bg-white md:grid-cols-10">
            <div
              className="spin grid h-14 w-14 place-content-center
        rounded-full bg-brand-dark md:col-span-1 md:h-28 md:w-28"
            >
              <svg
                className="h-6 w-6 md:h-12 md:w-12"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M17.4465 2.1955C18.4886 0.0751907 21.5114 0.0751914 22.5535 2.1955V2.1955C23.313 3.74088 25.2604 4.26269 26.6909 3.30411V3.30411C28.6535 1.98891 31.2713 3.50031 31.1136 5.8576V5.8576C30.9987 7.5757 32.4243 9.00129 34.1424 8.88637V8.88637C36.4997 8.72869 38.0111 11.3465 36.6959 13.3091V13.3091C35.7373 14.7396 36.2591 16.687 37.8045 17.4465V17.4465C39.9248 18.4886 39.9248 21.5114 37.8045 22.5535V22.5535C36.2591 23.313 35.7373 25.2604 36.6959 26.6909V26.6909C38.0111 28.6535 36.4997 31.2713 34.1424 31.1136V31.1136C32.4243 30.9987 30.9987 32.4243 31.1136 34.1424V34.1424C31.2713 36.4997 28.6535 38.0111 26.6909 36.6959V36.6959C25.2604 35.7373 23.313 36.2591 22.5535 37.8045V37.8045C21.5114 39.9248 18.4886 39.9248 17.4465 37.8045V37.8045C16.687 36.2591 14.7396 35.7373 13.3091 36.6959V36.6959C11.3465 38.0111 8.72869 36.4997 8.88637 34.1424V34.1424C9.00129 32.4243 7.5757 30.9987 5.8576 31.1136V31.1136C3.50031 31.2713 1.98891 28.6535 3.30411 26.6909V26.6909C4.26269 25.2604 3.74088 23.313 2.1955 22.5535V22.5535C0.0751911 21.5114 0.0751914 18.4886 2.1955 17.4465V17.4465C3.74088 16.687 4.26269 14.7396 3.30411 13.3091V13.3091C1.98891 11.3465 3.50031 8.72869 5.8576 8.88637V8.88637C7.5757 9.00129 9.00129 7.57569 8.88637 5.8576V5.8576C8.72869 3.50031 11.3465 1.98891 13.3091 3.30411V3.30411C14.7396 4.26269 16.687 3.74088 17.4465 2.1955V2.1955Z"
                  fill="rgb(132 217 155)"
                />
              </svg>
            </div>
            <div
              className="h-fit self-center pl-2 text-xs md:col-span-7
        md:col-start-4 md:w-full md:text-xl"
            >
              МЕРОПРИЯТИЯ
              <span className="font-bold"> ПРОХОДЯТ ТЩАТЕЛЬНУЮ ПРОВЕРКУ </span>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] rounded-full bg-white md:grid-cols-10">
            <div
              className="spin grid h-14 w-14 place-content-center
        rounded-full bg-brand-dark md:col-span-1 md:h-28 md:w-28"
            >
              <svg
                className="h-6 w-6 md:h-12 md:w-12"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M17.4465 2.1955C18.4886 0.0751907 21.5114 0.0751914 22.5535 2.1955V2.1955C23.313 3.74088 25.2604 4.26269 26.6909 3.30411V3.30411C28.6535 1.98891 31.2713 3.50031 31.1136 5.8576V5.8576C30.9987 7.5757 32.4243 9.00129 34.1424 8.88637V8.88637C36.4997 8.72869 38.0111 11.3465 36.6959 13.3091V13.3091C35.7373 14.7396 36.2591 16.687 37.8045 17.4465V17.4465C39.9248 18.4886 39.9248 21.5114 37.8045 22.5535V22.5535C36.2591 23.313 35.7373 25.2604 36.6959 26.6909V26.6909C38.0111 28.6535 36.4997 31.2713 34.1424 31.1136V31.1136C32.4243 30.9987 30.9987 32.4243 31.1136 34.1424V34.1424C31.2713 36.4997 28.6535 38.0111 26.6909 36.6959V36.6959C25.2604 35.7373 23.313 36.2591 22.5535 37.8045V37.8045C21.5114 39.9248 18.4886 39.9248 17.4465 37.8045V37.8045C16.687 36.2591 14.7396 35.7373 13.3091 36.6959V36.6959C11.3465 38.0111 8.72869 36.4997 8.88637 34.1424V34.1424C9.00129 32.4243 7.5757 30.9987 5.8576 31.1136V31.1136C3.50031 31.2713 1.98891 28.6535 3.30411 26.6909V26.6909C4.26269 25.2604 3.74088 23.313 2.1955 22.5535V22.5535C0.0751911 21.5114 0.0751914 18.4886 2.1955 17.4465V17.4465C3.74088 16.687 4.26269 14.7396 3.30411 13.3091V13.3091C1.98891 11.3465 3.50031 8.72869 5.8576 8.88637V8.88637C7.5757 9.00129 9.00129 7.57569 8.88637 5.8576V5.8576C8.72869 3.50031 11.3465 1.98891 13.3091 3.30411V3.30411C14.7396 4.26269 16.687 3.74088 17.4465 2.1955V2.1955Z"
                  fill="rgb(132 217 155)"
                />
              </svg>
            </div>
            <div
              className="h-fit self-center pl-2 text-xs md:col-span-7 md:col-start-4
        md:w-full md:text-xl"
            >
              МЫ <span className="font-bold">НЕ ХРАНИМ</span> ВАШИ ЛИЧНЫЕ
              <span className="ml-1 font-bold">ДАННЫЕ</span>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] rounded-full bg-white md:grid-cols-10">
            <div
              className="spin grid h-14 w-14 place-content-center
        rounded-full bg-brand-dark md:col-span-1 md:h-28 md:w-28"
            >
              <svg
                className="h-6 w-6 md:h-12 md:w-12"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M17.4465 2.1955C18.4886 0.0751907 21.5114 0.0751914 22.5535 2.1955V2.1955C23.313 3.74088 25.2604 4.26269 26.6909 3.30411V3.30411C28.6535 1.98891 31.2713 3.50031 31.1136 5.8576V5.8576C30.9987 7.5757 32.4243 9.00129 34.1424 8.88637V8.88637C36.4997 8.72869 38.0111 11.3465 36.6959 13.3091V13.3091C35.7373 14.7396 36.2591 16.687 37.8045 17.4465V17.4465C39.9248 18.4886 39.9248 21.5114 37.8045 22.5535V22.5535C36.2591 23.313 35.7373 25.2604 36.6959 26.6909V26.6909C38.0111 28.6535 36.4997 31.2713 34.1424 31.1136V31.1136C32.4243 30.9987 30.9987 32.4243 31.1136 34.1424V34.1424C31.2713 36.4997 28.6535 38.0111 26.6909 36.6959V36.6959C25.2604 35.7373 23.313 36.2591 22.5535 37.8045V37.8045C21.5114 39.9248 18.4886 39.9248 17.4465 37.8045V37.8045C16.687 36.2591 14.7396 35.7373 13.3091 36.6959V36.6959C11.3465 38.0111 8.72869 36.4997 8.88637 34.1424V34.1424C9.00129 32.4243 7.5757 30.9987 5.8576 31.1136V31.1136C3.50031 31.2713 1.98891 28.6535 3.30411 26.6909V26.6909C4.26269 25.2604 3.74088 23.313 2.1955 22.5535V22.5535C0.0751911 21.5114 0.0751914 18.4886 2.1955 17.4465V17.4465C3.74088 16.687 4.26269 14.7396 3.30411 13.3091V13.3091C1.98891 11.3465 3.50031 8.72869 5.8576 8.88637V8.88637C7.5757 9.00129 9.00129 7.57569 8.88637 5.8576V5.8576C8.72869 3.50031 11.3465 1.98891 13.3091 3.30411V3.30411C14.7396 4.26269 16.687 3.74088 17.4465 2.1955V2.1955Z"
                  fill="rgb(132 217 155)"
                />
              </svg>
            </div>
            <div
              className="h-fit self-center pl-2 text-xs md:col-span-7 md:col-start-4
        md:w-full md:text-xl"
            >
              АКТИВНО РАЗВИВАЕМСЯ И СПОСОБСТВУЕМ К ОРГАНИЗАЦИИ
              <span className="ml-1 font-bold">КРУТЫХ МЕРОПРИЯТИЙ</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
