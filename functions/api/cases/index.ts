import { PagesFunction } from "@cloudflare/workers-types";

// Define the environment bindings
interface Env {
    DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        // List all cases, ordered by date descending
        const { results } = await context.env.DB.prepare(
            "SELECT * FROM cases ORDER BY date DESC"
        ).all<any>(); // Using <any> for simplicity or define an interface

        return Response.json(results);
    } catch (err) {
        return new Response(`Error fetching cases: ${err}`, { status: 500 });
    }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const data: any = await context.request.json();

        // Basic validation
        if (!data.title || !data.imageUrl) {
            return new Response("Missing required fields", { status: 400 });
        }

        const { success } = await context.env.DB.prepare(
            "INSERT INTO cases (title, description, location, date, imageUrl) VALUES (?, ?, ?, ?, ?)"
        ).bind(data.title, data.description, data.location, data.date, data.imageUrl).run();

        if (success) {
            return new Response("Case created successfully", { status: 201 });
        } else {
            return new Response("Failed to create case", { status: 500 });
        }
    } catch (err) {
        return new Response(`Error creating case: ${err}`, { status: 500 });
    }
};
