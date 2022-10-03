function CreatePost() {
    return (
        <div className="relative overflow-hidden">
            <div className="relative pt-3 pb-10 sm:pb-24">

                <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
                    <form className="space-y-6" action="#" method="POST">
                        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Create Post</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div>
                                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="company-website"
                                                    id="company-website"
                                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Post Title"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Content
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="you@example.com"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Go Back
                            </button>
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default CreatePost
