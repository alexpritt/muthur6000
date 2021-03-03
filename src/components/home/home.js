// TODO: Add html components to navigation buttons
// TODO: Setup routing to first go through bootup when requesting site

import '../../App.css';
import TypeIt from "typeit-react";

function Home() {
    return (
        <div className="textOutput">
        <TypeIt
            getBeforeInit={instance => {
                instance
                .options({speed:30})
                .type("OVERMONITORING ADDRESS MATRIX")
                .break()
                .break()
                .options({speed:30})
                .type("<button>|FILES</button>", {delay:100})
                .break()
                .break()
                .options({speed:30})
                .type("<button>|SYSTEM<button>", {delay:100})
                .break()
                .break()
                .options({speed:30})
                .type("<button>|NOTEPAD</button>", {delay:100})
                return instance;
            }}
        />
        </div>
    );
}

export default Home;