import linkedinLogo from './assets/linkedin.svg'
import resumeLogo from './assets/resume.svg'
import githubLogo from './assets/github.svg'
import resumePdf from './assets/resume.pdf'
import './Linktree.css'


function Linktree() {
    const time = new Date();
    const hour = time.getHours();

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
                <a className='link' href="https://www.linkedin.com/in/ezequiel-reyes-er8/" target="_blank">
                    <img className="logo" src={linkedinLogo} alt="LinkedIn logo" />
                    <div className='link-text'>
                        <h3 className='link-title'>LinkedIn</h3>
                        <h4 className='link-desc'>linkedin.com/in/ezequiel-reyes-er8/</h4>
                    </div>
                </a>
                

                <a className='link' href={resumePdf} target="_blank">
                    <img className="logo" src={resumeLogo} alt="Resume logo" />
                    <div className='link-text'>
                        <h3 className='link-title'>Resume</h3>
                        <h4 className='link-desc'>Open PDF</h4>
                    </div>
                </a>
                

                <a className='link' href="https://github.com/ezequiel38" target="_blank">
                    <img className="logo" src={githubLogo} alt="GitHub logo" />                                        
                    <div className='link-text'>
                        <h3 className='link-title'>GitHub</h3>
                        <h4 className='link-desc'>github.com/ezequiel38</h4>
                    </div>                    
                </a>
                            
            </div>
        </div>
    )
}

export default Linktree