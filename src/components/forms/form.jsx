import { useState } from "react";

import Output from "../output/output";
import Banner from "../banner/banner";
import About from "../about/about";
import Projects from "../projects/projects";
import Educations from "../educations/educations";
import Help from "../help/help";
import Socials from "../socials/socials";

function Form() {
    const [width, setWidth] = useState(0);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);

    const commands = [
        'about', 'banner', 'clear', 'cls', 'help', 'h', 'projects', 
        'educations', 'socials', 'github', 'linkedin', 'email', 'sudo'
    ];

    const handleInputChange = (event) => {
        const input = event.target.value;
        setWidth(input.length * 8.4);
    };

    const [input, setInput] = useState([]);
    const [inputHistory, setInputHistory] = useState([]);
    const [caretPos, setCaretPos] = useState(0);

    const handleInput = (event) => {
        const caret = document.getElementById("caret");

        switch (event.key) {
            case "Enter":
                const command = event.target.value.trim().toLowerCase();
                const urlMap = {
                    linkedin: "https://www.linkedin.com/in/sharad-miishra/",
                    github: "https://github.com/sharad-mishra",
                    resumify: "https://resumify.me",
                    mathscribe: "https://github.com/sharad-mishra/mathscribe-fe",
                    "semantic-search": "https://github.com/sharad-mishra/SemanticSearchEngine",
                    chess: "https://github.com/sharad-mishra/chess",
                    sudo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                };

                setInput(prev => [...prev, command]);
                setInputHistory(prev => [...prev, command]);
                setCommandHistory(prev => [command, ...prev]);
                setHistoryIndex(-1);

                if (urlMap[command]) {
                    setIsLoading(true);
                    setTimeout(() => {
                        window.open(urlMap[command]);
                        setIsLoading(false);
                    }, 500);
                }

                event.target.value = "";
                setWidth(0);
                break;

            case "ArrowLeft":
                if (caretPos > 0) {
                    setCaretPos(caretPos - 1);
                    caret.style.left = caretPos * 8.4 + "px";
                }
                break;

            case "ArrowRight":
                if (caretPos < input.length) {
                    setCaretPos(caretPos + 1);
                    caret.style.left = caretPos * 8.4 + "px";
                }
                break;

            case "ArrowUp":
                if (historyIndex < commandHistory.length - 1) {
                    setHistoryIndex(historyIndex + 1);
                    event.target.value = commandHistory[historyIndex + 1];
                    setWidth(event.target.value.length * 8.4);
                }
                break;

            case "ArrowDown":
                if (historyIndex > 0) {
                    setHistoryIndex(historyIndex - 1);
                    event.target.value = commandHistory[historyIndex - 1];
                    setWidth(event.target.value.length * 8.4);
                }
                break;

            case "Tab":
                event.preventDefault();
                const input = event.target.value;
                const matches = commands.filter(cmd => cmd.startsWith(input));
                if (matches.length === 1) {
                    event.target.value = matches[0];
                    setWidth(matches[0].length * 8.4);
                }
                break;

            default:
                break;
        }
    };

    return (
        <div className="flex flex-col-reverse">
            <label htmlFor="input" className="my-2 flex gap-2 cursor-text">
                <span className="text-teal-500 font-bold">guest@sharad.works ~$</span>
                <div className="flex">
                    <input
                        type="text"
                        className="bg-transparent outline-none caret-transparent w-full"
                        style={{ width: `${width}px` }}
                        id="input"
                        onChange={handleInputChange}
                        onKeyDown={handleInput}
                        autoFocus
                    />
                    <div className="caret" id="caret" />
                </div>
                {isLoading && <span className="animate-pulse">Loading...</span>}
            </label>
            <div>
                <div className={inputHistory.includes("clear") || inputHistory.includes("cls") ? "hidden" : "block"}>
                    <Banner /> {/* Always show banner */}
                    {input.map((element, index) => {
                        if (!element) return null;
                        
                        const commandOutput = (
                            <Output key={`cmd-${index}`} className="mt-2">
                                <span>
                                    <span className="text-teal-500 font-bold">guest@sharad.works ~$ </span>
                                    {element}
                                </span>
                            </Output>
                        );

                        switch (element) {
                            case "help":
                            case "h":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Help />
                                    </div>
                                );
                            case "about":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <About />
                                    </div>
                                );
                            case "projects":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Projects />
                                    </div>
                                );
                            case "educations":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Educations />
                                    </div>
                                );
                            case "socials":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Socials />
                                    </div>
                                );
                            case "linkedin":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Output key="linkedin">
                                            <span>Opening LinkedIn...</span>
                                        </Output>
                                    </div>
                                );
                            case "github":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Output key="github">
                                            <span>Opening Github...</span>
                                        </Output>
                                    </div>
                                );
                            case "email":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Output key="email">
                                            <span>My email: <span className="text-teal-500 font-bold">sharadrx9@gmail.com</span></span>
                                        </Output>
                                    </div>
                                );
                            case "sudo":
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Output key="sudo">
                                            <span>Oh no, you&apos;re not admin...</span>
                                        </Output>
                                    </div>
                                );
                            case "clear":
                            case "cls":
                                setInput([]);
                                break;
                            default:
                                return (
                                    <div key={index}>
                                        {commandOutput}
                                        <Output key={index}>
                                            <span>Command not found. For a list of commands, type &apos;help&apos;.</span>
                                        </Output>
                                    </div>
                                );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default Form;