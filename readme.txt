AI setup:
.env - GITHUB_TOKEN
npm install express dotenv cors @azure-rest/ai-inference @azure/core-auth
npm list @azure/core-util @azure/core-auth -for verification

Server dependency installation
npm install express dotenv cors path body-parser mongoose multer

MongoDB Atlas
Step1: Create db in Atlas
Step2: .env - MONGO_URI(add/dbname in conn string)
Step3: Sever code modification for connectivity
        dotenv.config({ path: path.join('D:/IASF proj/GreenGroves/.env') });
        const mongoURI = process.env.MONGO_URI;
        mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('MongoDB Atlas connected'))
            .catch(err => console.log('MongoDB connection error:', err));

Firebase deploy

Step1: New project, webapp in firebase console
Step2: firebase-config.js in /public
Step3: Add these lines in all html files
        <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
        <script src="firebase-config.js"></script>
Step4: Go to https://greengroves-700c4.web.app/home.html