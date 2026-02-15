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

export const onRequestPut: PagesFunction<Env> = async (context) => {
    try {
        const id = context.params.id as string;

        if (!id || isNaN(Number(id))) {
            return new Response("Invalid case ID", { status: 400 });
        }

        const data: any = await context.request.json();

        if (!data.title || !data.imageUrl) {
            return new Response("Missing required fields", { status: 400 });
        }

        const { success } = await context.env.DB.prepare(
            "UPDATE cases SET title = ?, description = ?, location = ?, date = ?, imageUrl = ?, content = ? WHERE id = ?"
        ).bind(data.title, data.description, data.location, data.date, data.imageUrl, data.content || null, Number(id)).run();

        if (success) {
            return new Response("Case updated successfully", { status: 200 });
        } else {
            return new Response("Failed to update case", { status: 500 });
        }
    } catch (err) {
        return new Response(`Error updating case: ${err}`, { status: 500 });
    }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
    try {
        const id = context.params.id as string;

        if (!id || isNaN(Number(id))) {
            return new Response("Invalid case ID", { status: 400 });
        }

        const { success } = await context.env.DB.prepare(
            "DELETE FROM cases WHERE id = ?"
        ).bind(Number(id)).run();

        if (success) {
            return new Response("Case deleted successfully", { status: 200 });
        } else {
            return new Response("Failed to delete case", { status: 500 });
        }
    } catch (err) {
        return new Response(`Error deleting case: ${err}`, { status: 500 });
    }
};
