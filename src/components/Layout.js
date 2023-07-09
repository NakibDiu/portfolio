import React from 'react'

const Layout = ({className, children}) => {
  return (
    <div className={`w-full h-full z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 inline-block dark:bg-dark ${className}`}>
        {children}
    </div>
  )
}

export default Layout