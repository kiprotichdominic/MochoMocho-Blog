import { useEffect } from "react"
import usePostStore from "../../store/posts"
function Blog() {
    const { data, fetch } = usePostStore((state) => state)
    useEffect(() => {
        const url = "http://127.0.0.1:3000/posts"
        fetch(url)
    }, [])

    console.log(data);

    return (
        <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Posts</h2>
                </div>
                <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    {data.map((post) => (
                        <div key={post.id}>
                            <p className="text-sm text-gray-500">
                                <time dateTime={post.datetime}>{post.created_at}</time>
                            </p>
                            <a href="#" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                <p className="mt-3 text-base text-gray-500">{post.content}</p>
                            </a>
                            <div className="mt-3">
                                <a href={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                                    Read full story
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
