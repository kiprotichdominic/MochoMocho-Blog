function Hero() {
    return (
        <div className="relative overflow-hidde">
            <div className="relative pt-3 pb-10 sm:pb-24">

                <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Hey, we're Mocho.</span>{' '}
                            <span className="block text-indigo-600 xl:inline">Read our thoughts, stories and ideas</span>
                        </h1>
                        <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                                <form className="sm:flex">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <p className="mt-3 text-sm text-black">
                                Get the email newsletter and unlock access to members-only content and updates
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Hero
