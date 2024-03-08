import Header from "../components/Header.js";
import NavVertical from "../components/Nav_verticale.js";
import WelcomeUser from "../components/Welcome_User.js";
import StatisticsUser from "../components/StatisticsUser.js";
import GraphUser from "../components/GraphEvolutionUser.js";
import TimeSessionsUser from "../components/TimeSessionsUser.js";
import PerformanceUser from "../components/PerformanceUser.js";
import ScoreUser from "../components/ScoreUser.js"
import '../styles/mock_styles.css'

function Welcome(){
 
    return (
    <div className="accl_mock_page">
        <Header />
        <div className="accl_nav">
            <NavVertical/>
                <div className="mock_stats">
                <WelcomeUser/>
                    <div className="mock_flex">
                        <div className="space_gram">
                        <GraphUser/>
                        <div className="mock_perf_space">
                            <TimeSessionsUser/>
                            <PerformanceUser/>
                            <ScoreUser/>
                        </div>
                    </div>
                    <div className="mock_activity">
                        <StatisticsUser />
                    </div>
                    </div>
                    
                </div>
        </div>
    </div>
    )
}

export default Welcome;