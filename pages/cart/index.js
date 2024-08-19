import React from 'react'
import dynamic from 'next/dynamic';
const Header = dynamic(()=> import('@/components/Header'),{ssr:false});

const index = () => {
    return (
        <div className="min-h-screen min-w-full flex flex-col">
			<Header />
		</div>
    );
}

export default index