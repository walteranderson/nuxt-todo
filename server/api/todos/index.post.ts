import { Todo, TodosSchema, db } from "~/db";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Todo>(event);
    const todo = db.insert(TodosSchema).values(body).returning();
    return todo;
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: (err as Error).message
    });
  }
});
