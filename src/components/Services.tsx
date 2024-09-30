/* 
	function: creates a services component
	returns: a services component
*/


const Services = () => {
    return (
        <div className="h-screen flex justify-around items-center">
            <div className="left-panel">
                <div className="title text-lg font-bold">
                    How can we help your business?
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quis!
                </p>
            </div>
            <div className="right-panel grid grid-cols-2 grid-rows-2 gap-4">
                <div className="p-12 outline text-center">Business Planning</div>
                <div className="p-12 outline text-center">Financial Planning System</div>
                <div className="p-12 outline text-center">Development Website and App</div>
                <div className="p-12 outline text-center">Market Analysis Project</div>
            </div>
        </div>
    )
}

export default Services