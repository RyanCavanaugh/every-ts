import { Builtins, Cli } from "clipanion";

import { Bisect, BisectRun, Switch } from "./git.js";
import { Fetch } from "./git.js";
import { Tsc } from "./typescript.js";

const cli = new Cli({
    binaryName: "ts-bisect",
    enableCapture: true,
});

cli.register(Builtins.HelpCommand);
cli.register(Bisect);
cli.register(BisectRun);
cli.register(Switch);
cli.register(Fetch);
cli.register(Tsc);

void cli.runExit(process.argv.slice(2));
