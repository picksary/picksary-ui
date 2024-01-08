export const Articles = ({ key, items })=>{
    return(
       items.map((item, k)=>(
        <div key={k} className="grid grid-cols-8 gap-4">
            <div style={{ transition: "0.5s ease-in-out" }} className="col-span-2 opacity-90 hover:opacity-100"><img alt="" className="h-full" src={item} /></div>
            <div style={{ transition: "0.5s ease-in-out" }} className="col-start-3 col-span-4 opacity-90 hover:opacity-100"><img alt="" src={item} /></div>
            <div style={{ transition: "0.5s ease-in-out" }} className="col-span-2 opacity-90 hover:opacity-100"><img alt="" className="h-full" src={item} /></div>
            <div style={{ transition: "0.5s ease-in-out" }} className="col-span-2 opacity-90 hover:opacity-100"><img alt="" src={item} /></div>
            <div style={{ transition: "0.5s ease-in-out" }} className="col-span-2 opacity-90 hover:opacity-100"><img alt="" src={item} /></div>
            <div style={{ transition: "0.5s ease-in-out" }} className="col-span-2 opacity-90 hover:opacity-100"><img alt="" src={item} /></div>
            <div style={{ transition: "0.5s ease-in-out" }} className="col-span-2 opacity-90 hover:opacity-100"><img alt="" src={item} /></div>
        </div>
       ))
    )
}