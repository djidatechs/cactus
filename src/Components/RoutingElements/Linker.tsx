import { useRouter } from 'next/router'

interface Props {
    children: React.ReactNode,
    href: string,
    nohref? : boolean,
    styles? : string,
  }
function Linker({ children, href,nohref,styles }:Props) {
  const router = useRouter()

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }
  if (nohref) return (
    <a  className={styles||"" +" "+  (router.asPath === href ? "text-primary": "text-white") }>
      {children}
    </a>
  )
  return (
    <a href={href} onClick={handleClick} className={styles||"" +" "+  (router.asPath === href ? "text-primary": "text-white") }>
      {children}
    </a>
  )
}

export default Linker