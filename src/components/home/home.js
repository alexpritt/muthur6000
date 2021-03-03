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
                .type("|FILES", {delay:150})
                .break()
                .break()
                .options({speed:30})
                .type("|SYSTEM", {delay:150})
                .break()
                .break()
                .options({speed:30})
                .type("|NOTEPAD", {delay:150})
                return instance;
            }}
        />
        </div>
    );
}

export default Home;