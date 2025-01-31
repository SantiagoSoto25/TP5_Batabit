
function Footer(){
    const footerLogo = '/assets/imgs/logo-footer.svg';
    return (
    <>
    <footer className="w-full h-[100px] bg-bitcoin-orange flex items-center justify-between">
    <div className="text-justify">
    <a href="https://github.com/SantiagoSoto25" className="text-justify ml-6 text-white font-bold">Github</a>
    </div>
    <div>
        <img src={footerLogo} alt="batata" className="w-[80px] mr-10"></img>
    </div>
    </footer>

    </>
    )
}

export default Footer