import '../../App.css';
import TypeIt from "typeit-react";

function BootUp() {
    return (
      <div className="textOutput">
        <TypeIt
          getBeforeInit={instance => {
            instance
              .options({speed:20})
              .type("INITIALIZING BOOTSTRAP")
              .options({speed:100})
              .type(".....", {delay:200})
              .options({speed:650})
              .type("..", {delay: 300})
              .options({speed:60})
              .type(".....", {delay:100})
              .options({speed:20})
              .type("DONE!", {delay:100})
              .break()
              .break()
              .options({speed:20})
              .type("STARTING NETWORK MANAGER DISPATCHER SERVICE")
              .break()
              .options({speed:20})
              .type("STARTING DISPATCHER DAEMON FOR SYSTEM_NETWORK")
              .break()
              .options({speed:20})
              .type("BOOTING NETWORK MANAGER...", {delay:300})
              .options({speed:20})
              .type("DONE!")
              .break()
              .break()
              .options({speed:50})
              .type("MU//TH//UR 6000 USER INTERFACE INITIALIZING...", {delay:400})
              .options({speed:20})
              .type("DONE!", {delay:100})
              .break()
              .break()
              .options({speed:100})
              .type("WELCOME")
            return instance;
          }}
        />
      </div>
    );
}

export default BootUp;
