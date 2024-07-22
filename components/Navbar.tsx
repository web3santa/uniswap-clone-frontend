import { ConnectButton } from "@rainbow-me/rainbowkit";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <a className="btn btn-ghost text-xl">SantaSwap</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
        <a href="/" className="btn btn-ghost text-xl">Swap</a>

        </li>
  
        <li>
        <a href="/pool" className="btn btn-ghost text-xl">Pool</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
     <ConnectButton />
    </div>
  </div>
  )
}
export default Navbar