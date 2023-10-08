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
        /moduleHash
        /traceId
        /chain

    HTTP POST (Ed25519 signature)
        / {timestamp, signature, body}
        / {"message": "PING"}

    WebSocket
        Message {"method": "ping"}
        Message {"method": "time"}
        Message {"method": "subscribe", "params": {moduleHash, chain}}
`
    return text;
}