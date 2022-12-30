// components/layout.js
import { type NextPage } from "next";
import { Poppins } from '@next/font/google'
import Navbar from '../Components/Bars/MainNavBar/MainNavBar'
import Footer from '../Components/Bars/MainFooter/MainFooter'
interface LayoutProps {
  children: React.ReactNode;
}

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
}) 

const ClientLayout : NextPage<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <>
    <div className="relative bg-base-100">
      <div className="flex justify-center">
        <div className="w-full px-3 mx-0 lg:mx-0 sm:px-0 max-w-[700px] lg:max-w-[1170px] 3xl:max-w-[1500px]">
          <div className={poppins.className}>
            <Navbar />
            
            <div className="my-2">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default ClientLayout