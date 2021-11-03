const Footer = () => {

    function openLinkedIn(){
        window.open('https://www.linkedin.com/in/samuelcs131/')
    }

    return ( 
        <footer className="pt-3 mt-4 text-muted border-top">
     Developed by <a href="/" onClick={openLinkedIn}>Samuel Claudino</a>  © 2021
     
    </footer>
     );
}
 
export default Footer;