import React from 'react'

import Footer from '@/layouts/main-layout/components/footer'
import Header from '@/layouts/main-layout/components/header'
import Sidebar from '@/layouts/main-layout/components/sidebar'

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <Header />
      <div className='flex space-x-4'>
        <Sidebar />
        <main className='flex-1'>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  )
}
