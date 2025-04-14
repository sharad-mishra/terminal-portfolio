import Output from "../output/output"

function About() {
    return (
        <>     
            <Output>
                <span>Hi, my name is <span className="text-teal-500 font-bold">Sharad Mishra</span>, a <span className="text-teal-500 font-bold">Backend Developer</span>.</span>
            </Output>

            <Output>
                <span>A final year B.Tech student with strong CS fundamentals and distributed systems expertise.</span>
            </Output>
            
            <br />

            <Output>
                <span>💻 Tech Stack: Node.js, Express.js, React, Redux, MongoDB, MySQL, AWS, Docker, GraphQL, Kafka</span>
            </Output>

            <Output>
                <span>🎯 Expertise:</span>
            </Output>
            <Output>
                <span>Backend: Microservices · REST APIs · Node.js · Express · ORM · Message Queues</span>
            </Output>
            <Output>
                <span>Frontend: React · Redux · Modern JavaScript · HTML5/CSS3</span>
            </Output>
            <Output>
                <span>Database: MongoDB · MySQL · PostgreSQL · Redis</span>
            </Output>
            <Output>
                <span>DevOps: AWS · Docker · CI/CD · Server Management</span>
            </Output>
            <Output>
                <span>CS Core: DSA · System Design · OS · Networks · Design Patterns</span>
            </Output>

            <br />

            <Output>
                <span>Email: <span className="text-teal-500 font-bold">sharadrx9@gmail.com</span></span>
            </Output>

            <Output>
                <span>LinkedIn: <span className="text-teal-500 font-bold underline cursor-pointer">linkedin.com/in/sharad-miishra/</span></span>
            </Output>

            <Output>
                <span>GitHub: <span className="text-teal-500 font-bold underline cursor-pointer">github.com/sharad-mishra</span></span>
            </Output>
        </>
    );
}

export default About