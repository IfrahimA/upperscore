import '../css/newsletter.css'

const Newsletter = () => {
    return (
        <div className="flex justify-center p-24 gap-8">
            <div className="left-panel flex items-center">
                Subscribe to our Newsletter
            </div>
            <form className='flex gap-4'>
                <input type="text" className='outline pl-2' placeholder='name@mail.com'/>
                <button className='outline p-2'>Contact Now</button>
            </form>
        </div>
    )
}

export default Newsletter 