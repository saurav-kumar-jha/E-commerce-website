import { FaSearch } from "react-icons/fa"

export const Search = ()=>{
    return(
        <>
          <div className="h-[100%] w-[28%] flex justify-center items-center ">
          <div className="h-[30px] w-[80%] flex rounded bg-[#e9eff3] border border-transparent hover:border-black">
            <input type="search" className="w-[88%] bg-transparent outline-none px-[8px] py-[4px] text-black font-mono text-[18px] " placeholder="Search product" />
            <span className="h-[100%] w-[12%] rounded-r flex justify-center items-center text-[19px] mr-[-15px] cursor-pointer bg-[orange]"><FaSearch /></span>
          </div>
        </div>
        </>
    )
}