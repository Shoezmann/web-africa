import React from 'react';
import './Header.scss';


class Header extends React.Component{
    render(){
        return (
            <>
                <div className="relative pt-16 flex content-center items-center justify-center min-h-full">
                    <div className="bg-primary absolute top-0 w-full h-full bg-center"></div>
                    <div className="container flex md:pt-16 flex-col z-10 h-3/4 w-full text-white mx-80">
                        <p>STOP PAY FOR THE INTERNET.</p>
                        <h1 className="text-white font-semibold block">HOORAY!</h1>
                        <h1 className="text-white font-semibold block">FIBRE INTERNET</h1>
                        <h1 className="text-white font-semibold block">IS AVAILABLE HERE</h1>
                        <p className="mt-4">You are here</p>
                        <form className="w-full max-w-3xl">
                            <div className="flex items-center py-2">
                                <input className=" appearance-none block bg-gray-200 text-gray-700 border border-primary rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-3/5" type="text" placeholder="Jane Doe" aria-label="Full name" />
                                <button className="bg-primary shadow  hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full md:ml-4 focus:shadow-outline w-2/5 flex justify-center items-center" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>CHECK AGAIN</span>
                                </button>
                            </div>
                        </form>
                        <div className=" flex md:justify-end sm:justify-center items-center max-w-md text-right text-sm text-gray-500">
                            <p className="mt-4">Wrong place? Change your address or use our interactive map </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="md:py-16">The following internet options are available at your address:</p>
                    </div>

                    <div className="slide--one-waves z-0">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </>
        )
    }
}
 
export default Header;

