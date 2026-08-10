import {requireChatGPTUser,chatGPTSignOutPath} from "../chatgpt-auth";
import {isAdminEmail} from "../admin-auth";
import AdminClient from "./AdminClient";
import "./admin.css";
export const dynamic="force-dynamic";
export default async function AdminPage(){const user=await requireChatGPTUser("/admin");if(!isAdminEmail(user.email))return <main className="admin-shell"><section className="admin-card"><h1>Brak dostępu</h1><p>To konto nie ma uprawnień do panelu zarządzania.</p><a href={chatGPTSignOutPath("/admin")}>Zaloguj się innym kontem</a></section></main>;return <AdminClient email={user.email} signOutHref={chatGPTSignOutPath("/")}/>}
