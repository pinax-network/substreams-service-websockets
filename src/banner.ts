import pkg from "../package.json" assert { type: "json" };

// https://fsymbols.com/generators/carty/
export function banner()  {
    let text =`

    ░██╗░░░░░░░██╗███████╗██████╗░░██████╗░█████╗░░█████╗░██╗░░██╗███████╗████████╗░██████╗
    ░██║░░██╗░░██║██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██║░██╔╝██╔════╝╚══██╔══╝██╔════╝
    ░╚██╗████╗██╔╝█████╗░░██████╦╝╚█████╗░██║░░██║██║░░╚═╝█████═╝░█████╗░░░░░██║░░░╚█████╗░
    ░░████╔═████║░██╔══╝░░██╔══██╗░╚═══██╗██║░░██║██║░░██╗██╔═██╗░██╔══╝░░░░░██║░░░░╚═══██╗
    ░░╚██╔╝░╚██╔╝░███████╗██████╦╝██████╔╝╚█████╔╝╚█████╔╝██║░╚██╗███████╗░░░██║░░░██████╔╝
    ░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░╚═════╝░░╚════╝░░╚════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░╚═════╝░

`
    text += `                             🚀 ${pkg.description} v${pkg.version}

    Documentation: ${pkg.homepage}

    HTTP GET
        /health
        /metrics
        /subscribe

    HTTP POST (Ed25519 signature)
        / {timestamp, signature, body}
        / {"message":"PING"}

    WebSocket
        message <moduleHash>
`
    return text;
}