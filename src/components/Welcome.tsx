/*
    function: creates a welcome component for the home page
	returns: component
*/

const Welcome = () => {
    return (
        <div className="flex justify-center text-center mt-20">
            <div className="flex-auto w-32 p-40">
                <h1 className="text-4xl font-extrabold">Welcome to Parh.</h1>
                <h3 className="text-2xl font-light">A new way to study</h3>
            </div>
            <div className="flex-auto w-10 bg-sky-100 p-40 rounded-l-lg">
                <h1></h1>
            </div>
        </div>
    );
}

export default Welcome;