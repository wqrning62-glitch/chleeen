import {getChatGPTUser} from "../../chatgpt-auth";
import {isAdminEmail} from "../../admin-auth";
import {isSiteContent,readContent,writeContent} from "../../content-store";
export async function GET(){return Response.json(await readContent(),{headers:{"Cache-Control":"no-store"}})}
export async function PUT(request:Request){const user=await getChatGPTUser();if(!user||!isAdminEmail(user.email))return Response.json({error:"Brak uprawnień"},{status:403});const body:unknown=await request.json();if(!isSiteContent(body))return Response.json({error:"Nieprawidłowe dane"},{status:400});return Response.json({ok:true,updatedAt:await writeContent(body)})}
