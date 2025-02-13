import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="hero py-20">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                <Image
                    alt=''
                    width={600}
                    height={600}
                    src="https://images.unsplash.com/photo-1579600161224-cac5a2971069?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnRhbHxlbnwwfHwwfHx8MA%3D%3D"
                    className="max-w-80 h-80 object-cover rounded-lg shadow-2xl lg:ml-60"
                />
                <div>
                    <h1 className="text-4xl font-bold md:leading-none leading-tight md:mt-0 mt-10">
                        Get a Mental Disorder Diagnosis <span className="md:block mt-4"> Accurately and Quickly</span>
                    </h1>
                    <p className="py-2 text-xl mt-4 pr-12">
                        Get better and faster analysis for understanding your mental health condition.
                    </p>
                    <Link href="/gejala">
                        <button className="btn text-lg mt-16 px-12 btn-primary normal-case">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero