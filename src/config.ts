import "dotenv/config";

import pkg from "../package.json" assert { type: "json" };
import { Command, Option } from "commander";

// default values
export const DEFAULT_PORT = 3000
export const DEFAULT_HOSTNAME = "0.0.0.0"
export const DEFAULT_VERBOSE = false
export const DEFAULT_SQLITE_FILENAME = "db.sqlite"

// parse command line options
const opts = new Command()
    .name(pkg.name)
    .description(pkg.description)
    .showHelpAfterError()
    .addOption(new Option("--public-key <string>", "(required) Ed25519 public key").env("PUBLIC_KEY"))
    .addOption(new Option("--port <int>", "Server listen on HTTP port").default(DEFAULT_PORT).env("PORT"))
    .addOption(new Option("--hostname <string>", "Server listen on HTTP hostname").default(DEFAULT_HOSTNAME).env("HOSTNAME"))
    .addOption(new Option("--sqlite-filename <string>", "SQLite database filename").default(DEFAULT_SQLITE_FILENAME).env("SQLITE_FILENAME"))
    .addOption(new Option("--verbose <boolean>", "Enable verbose logging").default(DEFAULT_VERBOSE).env("VERBOSE"))
    .version(pkg.version)
    .parse(process.argv).opts();

// export options
export const PUBLIC_KEY: string = opts.publicKey;
export const PORT = Number(opts.port);
export const HOSTNAME: string = opts.hostname
export const SQLITE_FILENAME: string = opts.sqliteFilename;
export const VERBOSE: boolean = opts.verbose === "true" ? true : false;

// validate required options
if (!PUBLIC_KEY) throw new Error("PUBLIC_KEY is required");
if (Buffer.from(PUBLIC_KEY, "hex").length !== 32) throw new Error("PUBLIC_KEY must be a 32 byte hex string");
if (!Number.isInteger(PORT)) throw new Error("PORT must be an integer");
