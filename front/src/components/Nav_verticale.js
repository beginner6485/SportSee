import '../styles/header_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { faHotTubPerson } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


function NavVertical() {
    return (
        <div className='vertical-nav'>

            <div className='nav-icon'>
            <div className='icon-space'>
                <FontAwesomeIcon icon={faHotTubPerson} className='icon-style' />
            </div>
            <div className='icon-space'>
                <FontAwesomeIcon icon={faPersonSwimming} className='icon-right icon-style'/>
            </div>
            <div className='icon-space'>
                <FontAwesomeIcon icon={faPersonBiking} className='icon-style'/>
            </div>
            <div className='icon-space'>
                <FontAwesomeIcon icon={faDumbbell} className='icon-style'/>
            </div>
            </div>
            <div className='copyright'>Copyright, SportSee 2020</div>
        </div>
    )
}
 export default NavVertical