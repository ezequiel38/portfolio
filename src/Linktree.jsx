import linkedinLogo from './assets/linkedin.svg'
import resumeLogo from './assets/resume.svg'
import githubLogo from './assets/github.svg'
import copyIcon from './assets/copy.svg'
import downloadIcon from './assets/download.svg'
import checkmarkIcon from './assets/checkmark.svg'
import resumePdf from './assets/resume.pdf'
import './Linktree.css'
import { useState } from 'react'


function Linktree() {
    const time = new Date();
    const hour = time.getHours();
    const LINKEDIN_URL = "https://www.linkedin.com/in/ezequiel-reyes-er8/";
    const GITHUB_URL = "https://github.com/ezequiel38";
    const [copiedLink, setCopiedLink] = useState('')

    // parameter type tells which link should be sent to clipboard
    const copyLink = async (e, type) => {
        e.preventDefault();     // prevents the button from navigating to the link
        try {
            await navigator.clipboard.writeText(type);
            setCopiedLink(type);
            setTimeout(() => setCopiedLink(''), 3000)
        } catch {
            setCopiedLink('')
        }
    }

    const handleDownload = (e) => {
        e.preventDefault();
        // download the document
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Ezequiel_Reyes_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // show checkmark for 2s
        setCopiedLink(resumePdf);
        setTimeout(() => setCopiedLink(''), 2000);
    };

    return(
        <div className='main'>
            <div className='bio'>
                <img className='pfp' src="https://i.pinimg.com/1200x/92/d7/50/92d750d6ec06ce9d9af3afdfa1d8eeb7.jpg" alt="Profile Picture" />
                <h2>
                    Good
                    {hour < 12 ? (' Morning') : hour < 18 ? (' Afternoon') : (' Evening')}
                    . I am
                </h2>
                <h1>Ezequiel Reyes</h1>
                <h2>Software Developer</h2>
            </div>

            <div className='links'>

                <a className='link' href={LINKEDIN_URL} target="_blank">
                    <img className="logo" src={linkedinLogo} alt="LinkedIn logo" />
                    <div className='link-text'>
                        <h3 className='link-title'>LinkedIn</h3>
                        <h4 className='link-desc'>linkedin.com/in/ezequiel-reyes-er8/</h4>
                    </div>
                    <button className="icon-btn" onClick={(e) => copyLink(e, LINKEDIN_URL)} type="button">
                        <img
                        className="icon"
                        src={copiedLink === LINKEDIN_URL ? checkmarkIcon : copyIcon}
                        alt="Copy icon"
                        />
                    </button>
                </a>


                <a className='link' href={resumePdf} target="_blank">
                    <img className="logo" src={resumeLogo} alt="Resume logo" />
                    <div className='link-text'>
                        <h3 className='link-title'>Resume</h3>
                        <h4 className='link-desc'>Open PDF</h4>
                    </div>
                    <button className="icon-btn" onClick={handleDownload} type="button">
                        <img
                        className="icon"
                        src={copiedLink === resumePdf ? checkmarkIcon : downloadIcon}
                        alt="Download icon"
                        />
                    </button>
                </a>

                <a className='link' href={GITHUB_URL} target="_blank">
                    <img className="logo" src={githubLogo} alt="GitHub logo" />
                    <div className='link-text'>
                        <h3 className='link-title'>GitHub</h3>
                        <h4 className='link-desc'>github.com/ezequiel38</h4>
                    </div>
                    <button className="icon-btn" onClick={(e) => copyLink(e, GITHUB_URL)} type="button">
                        <img
                        className="icon"
                        src={copiedLink === GITHUB_URL ? checkmarkIcon : copyIcon}
                        alt="Copy icon"
                        />
                    </button>
                </a>

            </div>
        </div>
    )
}

export default Linktree