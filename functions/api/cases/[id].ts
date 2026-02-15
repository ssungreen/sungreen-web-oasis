import { PagesFunction } from "@cloudflare/workers-types";

interface Env {
    DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const id = context.params.id as string;

        if (!id || isNaN(Number(id))) {
            return new Response("Invalid case ID", { status: 400 });
        }

        const result = await context.env.DB.prepare(
            "SELECT * FROM cases WHERE id = ?"
        ).bind(Number(id)).first<any>();

        if (!result) {
            return new Response("Case not found", { status: 404 });
        }

        return Response.json(result);
    } catch (err) {
        return new Response(`Error fetching case: ${err}`, { status: 500 });
    }
};
