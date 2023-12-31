import Router from "koa-router";
import combineRouters from "koa-combine-routers"


const router  = new Router()



router.get('/',async(ctx)=>{  
    console.log("welcome") 
    ctx.body = { success: true, data: "Welcome to Todo API" };
    ctx.status=200
})

router.post("/api/auth/sign_up", auth.signUp);
router.post("/api/auth/sign_in", auth.signIn);
 
router.post("/api/todos", authorize, todos.create);
router.get("/api/todos", authorize, todos.fetchAll);
router.get("/api/todos/:todoId", authorize, todos.fetchOne);
router.put("/api/todos/:todoId", authorize, todos.update);
router.delete("/api/todos/:todoId", authorize, todos.delete);

router.post("/api/todoItems", todoItems.create);
router.get("/api/todos/:todoId/todoItems", todoItems.fetchAll);
router.get("/api/todoItems/:todoItemId", todoItems.fetchOne);
router.put("/api/todoItems/:todoItemId", todoItems.update);
router.delete("/api/todoItems/:todoItemId", todoItems.delete);


const defaultRouter = combineRouters(router)
export default defaultRouter;