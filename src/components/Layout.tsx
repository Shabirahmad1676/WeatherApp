import  { PropsWithChildren } from 'react'
import Header from './Header'

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className='bg-gradient-to-br  from-background to-muted'>
      <Header/>
     <main className='container min-h-screen mx-auto px-4 py-8'>
     {children}
     </main>
      <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto text-center  text-gray-400 '>
          <p>Made with 💗 by  Shabir.Dev</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout