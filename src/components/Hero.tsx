
export const Hero = () => {
    return (
        <div className="hero flex justify-center h-screen text-center items-center before:[bg-[#000000]">
            <div className="container flex flex-col gap-7">
                <h1 className="text-8xl font-bold text-cyan-50 uppercase">authentic italian pizza</h1>
                <p className="text-cyan-50 font-normal text-xl">Et praesent nulla urna consequat dui arcu cursus diam fringilla libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit suspendisse aliquam lacus sollicitudin mauris.</p>
                <div className="flex justify-center gap-8.5">
                    <button className="rounded py-2.5 px-6 bg-cyan-500 text-cyan-50 font-semibold text-xl uppercase">Mirar el menu</button>
                    <button className="rounded py-2.5 px-6 p-2.5 border-2 border-cyan-100 text-cyan-100 text-xl font-normal uppercase bg-transparent">Ir al local</button>
                </div>
            </div>
        </div>
    )
}
