import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full p-4 flex justify-center items-center">
                        <h2 className="title-font font-extralight text-gray-400 tracking-widest text-sm mb-3">
                            400 University Drive Suite 200 Coral Gables, FL 33134 USA
                        </h2>
                    </div>


                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 grid-cols-1 gap-2">
                        <h2 className="title-font font-extralight text-gray-400 tracking-widest text-2xl mb-5">
                            Links
                        </h2>
                        <nav className="list-none mb-10 text-2xl font-bold">
                            <li className="mb-5">
                                <a className="text-gray-600 hover:text-gray-900">Home</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-gray-600 hover:text-gray-900">Shop</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-gray-600 hover:text-gray-900">About</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-gray-600 hover:text-gray-900">Contact</a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font  font-extralight text-gray-400 tracking-widest text-2xl mb-5 ">
                            Helps

                        </h2>
                        <nav className="list-none mb-10 text-2xl font-bold">
                            <li  className="mb-5">
                                <a className="text-gray-600 hover:text-gray-900">Payment Options</a>
                            </li>
                            <li  className="mb-5">
                                <a className="text-gray-600 hover:text-gray-900">Returns</a>
                            </li>
                            <li  className="mb-5">
                                <a className="text-gray-600 hover:text-gray-900">Privacy Policies</a>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-extralight text-gray-400 tracking-widest text-2xl mb-3">
                            Newsletter
                        </h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                
                                <input  />
                                <input
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-white border-0 py-2 px-6  font-mono focus:outline-none hover:bg-white rounded text-2xl">
                                Subscribe
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 lg:text-2xl">
                        2022 Meubel House. All rights reverved

                    </p>

                </div>
            </div>

        </footer>




    )
}

export default Footer

