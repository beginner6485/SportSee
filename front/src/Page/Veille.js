import { USER_MAIN_DATA,  } from '../data';
import { Link } from 'react-router-dom';



function Veille(){
    const data = USER_MAIN_DATA;

    <div>
        <span>Bienvenue {data}</span>
        {data.map(profile => (
          <div key={profile.id}>
            <Link to={`/user/${profile.id}`}>
              {profile.userInfos.firstName} {profile.userInfos.lastName}
            </Link>
            <span>Bienvenue</span>
            </div>
        ))}
    </div>
}

export default Veille