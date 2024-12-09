

export const Icons = ({icon, name})=>{
    return(
        <>
          <div className="h-auto w-[30%]  flex flex-col items-center justify-center  cursor-pointer " title={name}>
            <p className="text-2xl h-auto w-auto  rounded-full p-1 bg-[#50505f2c] ">{icon}</p>
            <p className="text-[12px] ">{name}</p>
          </div>
        </>
    )
}