import React from 'react'
import "../style/navbar.css"
import Link from 'next/link'
function navbar() {
    return (
        <div className='navbarMain'>
            <Link href="/">
                <img src="/miLogo.png" alt="/miLogo.png" />
            </Link>
        </div>
    )
}

export default navbar