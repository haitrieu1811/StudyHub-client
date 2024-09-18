import React from 'react'

import Footer from '@/layouts/main-layout/components/footer'
import Header from '@/layouts/main-layout/components/header'

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </React.Fragment>
  )
}
