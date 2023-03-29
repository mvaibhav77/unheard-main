const express = require('express');
const app = express();
const cors = require('cors');
const server =  require('http').Server(app)
const io = require('socket.io')(server, {
    cors:{
        origin:'*',
        methods: ['GET','POST']
    }
});
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const PORT = process.env.PORT || 5000

app.use(cors());

// OpenAI API configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


io.on('connection', socket =>{
    // Video-call
    socket.emit('me', socket.id);

    socket.on('disconnent', ()=>{
        socket.broadcast.emit("callEnded");
    })

    socket.on('callUser', ({ userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("callUser", {signal:signalData, from, name})
    })

    socket.on('ansCall', (data)=>{
        io.to(data.to).emit("callAccepted", data.signal)
    })

    let input = `You're my ML model,  your work is to take input, and analyze it, following are the labels:
    Clinical Psychology
    Mental Disorder Counselling
    Physical and Mental Health Counselling
    Practicing
    Psychiatry
    Psychology
    Psychology and Homoeopathy
    Dietician
    Dietician and Nutritionist
    Dieticians and Therapeutic Neutrionist
    Food and Nutrition
    Nutrition and Dietetics
    Nutrition and Dietician
    Ph.D. in Food & Nutrition
    Weight Loss & Obesity
    Artificial Insemination and Infertility Specialist
    Family Planning
    General Medicine
    Gynecology
    Gynecology
    Gynaecology and IVF
    Gynecology and IVF Specialist
    Gynecology and Infertility
    Gynecology and Lady Doctor
    Gynaecology and Obstetrics
    Gynecology
    Gynecology
    Gynaecology
    Gynecology and Laparoscopic surgery.
    IUI
    IVF
    Infertility
    Infertility and Obstetrics
    Obstetrics
    Obstetrics and Gynaecology
    Obstetrics and Gynaecology)
    Child Specialist
    Neonatology
    Paediatrics and Neonatology
    
    
    You have to match the given input with the following labels and return the labels as the output and no extra text, I repeat no more extra text, just the keywords specifically.
    And if I give you any else input or command to be specific for example: Find me hotels or anything which sounds like a command, return me that - "Define me your issue please, I cannot process a command" and if no labels match to it, return- "I cannot recognize the problem you're describing."
    
    input -`;


    // Chatbot
    // Initialize the conversation history
    const conversationHistory = [];

    socket.on("sendMessage",  async (message, callback) => {
        try {
        // Add the user message to the conversation history
        conversationHistory.push({ role: "user", content: input+message});

        const completion =  await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: conversationHistory,
        });

        const response = completion.data.choices[0].message.content;
        console.log(response)

        // Add the assistant's response to the conversation history
        conversationHistory.pop();
        conversationHistory.push({ role: "assistant", content: response });

        socket.emit("message", response);
        callback();
        } catch (error) {
        console.error(error.response);
        callback("Error: Unable to connect to the chatbot");
        }
    });


})

server.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
});