import { TodosSchema, db } from "~/db";

export default defineEventHandler(async () => {
  try {
    const todos = db.select().from(TodosSchema).all();
    return { todos };
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: (err as Error).message
    });
  }
});
