import Output from "../output/output"

function About() {
    return (
        <div className="whitespace-pre my-2">
            <Output>
                <span className="text-teal-500 font-bold">About Me</span>
            </Output>
            <br />
            <Output>
                <span>I bring hands-on experience in developing distributed, high-performance systems.</span>
            </Output>
            <br />

            <Output>
                <span className="text-teal-500 font-bold">Technical Skills:</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">• <span className="text-yellow-500">Backend:</span> Node.js, FastAPI, Flask, WebSockets, REST APIs, Python</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">• <span className="text-yellow-500">Frontend:</span> React.js, Tailwind CSS, HTML, Material UI</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">• <span className="text-yellow-500">Infrastructure & DevOps:</span> Docker, Kubernetes, CI/CD, AWS (EC2, Lambda, S3)</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">• <span className="text-yellow-500">Databases & Caching:</span> MongoDB, PostgreSQL, Redis, Elasticsearch</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">• <span className="text-yellow-500">Architecture:</span> Microservices, Event-driven systems, RabbitMQ, JWT Auth</span>
            </Output>
            <br />

            
            <Output>
                <span className="indent-[34px] block">I specialize in building and deploying scalable distributed systems using</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">microservices architecture and designing high-performance APIs. With a focus</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">on system optimization, I implement comprehensive DevOps pipelines and enhance</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">performance through advanced caching strategies. I thrive in collaborative</span>
            </Output>
            <Output>
                <span className="indent-[34px] block">environments, working with agile teams and contributing to open-source projects.</span>
            </Output>
            <br />

            <Output>
                <span>Type <span className="text-teal-500 font-bold">'projects'</span> to see my work or <span className="text-teal-500 font-bold">'socials'</span> to connect!</span>
            </Output>
        </div>
    )
}

export default About