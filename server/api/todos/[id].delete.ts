import { eq } from "drizzle-orm";
import { TodosSchema, db } from "~/db";

export default defineEventHandler(async (event) => {
  try {
    const id = Number(getRouterParam(event, 'id'));
    await db.delete(TodosSchema).where(eq(TodosSchema.id, id));
    setResponseStatus(event, 201);
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: (err as Error).message
    });
  }
});
