import { useState, useEffect } from "react";
import Output from "../output/output";

function Banner() {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsAnimating(false), 1000);
    }, []);

    const banner = [
        "  /$$$$$$  /$$                                          /$$       /$$      /$$ /$$           /$$                         ",
        " /$$__  $$| $$                                         | $$      | $$$    /$$$|__/          | $$                         ",
        "| $$  \\__/| $$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$      | $$$$  /$$$$ /$$  /$$$$$$$| $$$$$$$   /$$$$$$  /$$$$$$ ",
        "|  $$$$$$ | $$__  $$ |____  $$ /$$__  $$|____  $$ /$$__  $$      | $$ $$/$$ $$| $$ /$$_____/| $$__  $$ /$$__  $$|____  $$",
        " \\____  $$| $$  \\ $$  /$$$$$$$| $$  \\__/ /$$$$$$$| $$  | $$      | $$  $$$| $$| $$|  $$$$$$ | $$  \\ $$| $$  \\__/ /$$$$$$$",
        " /$$  \\ $$| $$  | $$ /$$__  $$| $$      /$$__  $$| $$  | $$      | $$\\  $ | $$| $$ \\____  $$| $$  | $$| $$      /$$__  $$",
        "|  $$$$$$/| $$  | $$|  $$$$$$$| $$     |  $$$$$$$|  $$$$$$$      | $$ \\/  | $$| $$ /$$$$$$$/| $$  | $$| $$     |  $$$$$$$",
        " \\______/ |__/  |__/ \\_______/|__/      \\_______/ \\_______/      |__/     |__/|__/|_______/ |__/  |__/|__/      \\_______/",
        "",
        "",
        "",
    ];

    return (
        <div className={`transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'} whitespace-pre`}>
            {banner.map((element, index) => (
                <Output key={index}>
                    <span className="text-teal-500 font-bold">{element}</span>
                </Output>
            ))}

            <Output>
                <span className="text-yellow-500 font-bold">👋 Welcome to my terminal portfolio!</span>
            </Output>

            <Output>
                <span>I'm a Backend Developer specializing in scalable distributed systems.</span>
            </Output>

            <br />

            <Output>
                <span className="text-teal-500 font-bold">Quick Start: Type <span className="text-teal-500 font-bold">'help'</span> to see all commands</span>
            </Output>

            

            <Output>
                <span className="text-teal-500">---------------------------------------------</span>
            </Output>
        </div>
    );
}

export default Banner;