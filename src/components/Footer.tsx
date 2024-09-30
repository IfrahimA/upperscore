/*
    function: generates a footer component
    returns: footer component
*/

const Footer = () => {
    return (
        <div className="flex border-t-2 border-black justify-center gap-24">
            <div className="socials">
                <h1 className="text-lg font-bold">A+ Parh</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, animi.</p>
            </div>
            <div className="mission">
                <h1 className="text-lg font-bold">What we do</h1>
                <ul>
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>Social Media Design</li>
                    <li>Market Analysis Project</li>
                </ul>
            </div>
            <div className="company">
                <h1 className="text-lg font-bold">Company</h1>
                <ul>
                    <li>
                        About Us
                    </li>
                    <li>
                        Career
                    </li>
                    <li>
                        Become Investor
                    </li>
                </ul>
            </div>
            <div className="support">
                <h1 className="text-lg font-bold">Support</h1>
                <ul>
                    <li>
                        FAQ
                    </li>
                    <li>
                        Policy
                    </li>
                    <li>
                        Business
                    </li>
                </ul>
            </div>
            <div className="contact">
                <h1 className="text-lg font-bold">Contact</h1>
                <ul>
                    <li>
                        WhatsApp
                    </li>
                    <li>
                        Support 24
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer