import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div id="contact" className="h-36 bg-gradient-to-b from-black to-emerald-900 text-white grid md:grid-cols-2">
            <div className="flex flex-col mt-5 text-xs md:text-base ml-10 items-center">
                <p>Napisz do mnie:</p>
                <h1>aleksandraskrzypek97@gmail.com</h1>
            </div>
            <div className="flex flex-col mt-5 text-xs md:text-base ml-10 items-center">
                Tu jestem:
                <a href="https://www.linkedin.com/in/aleksandra-skrzypek-7575b2188/">Linkedin <LinkedInIcon/></a>
                <a href="https://github.com/aleksandraskrzypek">Github <GitHubIcon/></a>
            </div>
        </div>
    )
}

export default Footer