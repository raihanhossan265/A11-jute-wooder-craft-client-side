const Footer = () => {
    return (
        <div>
            <footer className="footer flex bg-base-200 text-base-content p-10">
                <nav className="flex-1">
                    <h6 className="footer-title">Export Terms & Conditions</h6>
                    <p>100% advance payment through TT at bank account before shipment (as per Export Rules of Bangladesh Govt.) The payment could be made in two installments: Advance payment (minimum 50% of the total order value of Proforma Invoice) requires before starting the mass production. The balance payment could be made before</p>
                </nav>
                <nav className="flex-1">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex-1">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form className="flex-1">
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="">
                            <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Raihan Hossan"
                                className="input input-bordered w-full" />
                            <input
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered w-full" />
                            </div>
                            <input type="submit" value="Subscribe" className="btn mt-4 m-auto w-full btn-primary"/>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;