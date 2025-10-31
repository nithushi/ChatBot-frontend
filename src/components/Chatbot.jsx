import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

const Chatbot = () => {
    const[input, setInput]= useState("") //Stores user inputs
    const[messages, setMessages]= useState([]) //stores chat messages
    const chatEndRef = useRef(null);

    //function to send user messages to chatgpt api
    const sendMessages = async()=>{

        if(!input.trim()) return;

        const userMessages ={text:input, sender:"user"};
        setMessages([...messages, userMessages]);

        setInput("") //clear input after sending message

        try {

            const res= await axios.post("http://localhost:8080/api/chat", {prompt: input},
                {headers: {"Content-Type": "application/json"},
            });

            const botMessage={text: res.data, sender:"bot"};
            setMessages([...messages, userMessages, botMessage]);

        } catch (error) {
            console.error("Error fetching response", error);
            setMessages([...messages, userMessages, {text: "Error retrieving response", sender:"bot"}]);
        }

    };

    //scroll chat to bottom automatically when new messages arrive
    useEffect(()=>{
        chatEndRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    return(
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white text-center">
                    <h4>ChatBot</h4>
                </div>

                <div className="card-body chat-box" style={{height: "400px", overflow:"auto"}}>
                    {messages.map((msg, index) =>(
                        <div key={index} className={`d-flex ${msg.sender==="user"? "justify-content-end": "justify-content-start"}`}>
                            <div className={`p-3 rounded shadow mb-3 ${msg.sender==="user" ? "bg-primary text-white": "#85c9e6 text-black"}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef}/>
                </div>

                <div className="card-footer">
                    <div className="input-group">
                        <input 
                        
                            type="text"
                            className="form-control"
                            placeholder="Type Your Message..."
                            value={input}
                            onChange={(e)=> setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessages()}
                            
                        />
                        <button className="btn btn-primary" onClick={sendMessages}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Chatbot;
