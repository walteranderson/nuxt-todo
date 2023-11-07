import { eq } from "drizzle-orm";
import { Todo, TodosSchema, db } from "~/db";

export default defineEventHandler(async (event) => {
  try {
    const id = Number(getRouterParam(event, 'id'));
    const body = await readBody<Todo>(event);
    const todo = await db.update(TodosSchema).set(body).where(eq(TodosSchema.id, id)).returning();
    return todo;
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: (err as Error).message
    });
  }
});
