import express from "express"
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import user from './routes/user.routes'
import room from './routes/room.routes'

const app = express();
const port = 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); 
app.use('/api/user',user);
app.use('/api/room',room);

async function main() {
    await prisma.$connect();
    console.log("Database connected");
}
main()
    // .catch(e => console.error(e))
    // .finally(() => prisma.$disconnect());

app.listen(port,()=>{
    console.log(`The App is listening on ${port}`)
})