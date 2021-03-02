import '../../App.css';
import TypeIt from "typeit-react";

function Home() {
    return (
        <div className="textOutput">
        <TypeIt
            getBeforeInit={instance => {
                instance
                .options({speed:20})
                .type("OVERMONITORING ADDRESS MATRIX")
                return instance;
            }}
        />
        </div>
    );
}

export default Home;