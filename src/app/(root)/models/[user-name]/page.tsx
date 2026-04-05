import { redirect } from "next/navigation";

export default async function ModelRootPage({ params }: { params: Promise<{ "user-name": string }> }) {
    const resolvedParams = await params;
    const userName = resolvedParams["user-name"];
    redirect(`/models/${userName}/stream`);
}
